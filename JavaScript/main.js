let storyIndex = 0;

let maxOxygen = 150; // Set max oxygen level to allow for longer durations
let oxygen = maxOxygen;
const oxygenBar = document.getElementById('oxygenBar');
const oxygenText = document.getElementById('oxygenText');

let inventoryArray = ["","","",""]
const inventory = ["🔧","🔦","🔋","🔑"];
const inventorySlots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3'), document.getElementById('slot4')];

let pathsTakenInShip = 0;
let level1Complete = false;
let level2Complete = false;




function typeWriterEffect(text, elementId, speed = 5, callback = null) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous text

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            // Call the callback function after text is fully typed
            callback();
        }
    }
    type();
}

function updateGameText(storyIndex) {

    let result = chooseCorrectLevel(storyIndex); // Allows function to return 2 values
    currentStory = result.currentStory; //CurrentStory can now be linked to storyLevel1 or storyLevel2
    storyIndex = result.index; // Capture the updated storyIndex, this will be reset to 0 when the user enters Level2 

    if (currentStory["item-picked-up"] === true) {
        updateInventory(currentStory["item"]);
    }

    //storyIndex = forceLeaveShip(storyIndex); // Update storyIndex again only neededs to run during Level 1 currently

    // result = chooseCorrectLevel(storyIndex); // Get latest story and index
    // currentStory = result.currentStory;
    // storyIndex = result.index;

    let newText = currentStory.dialog;

    typeWriterEffect(newText, "gameText", 5, () => {
        addCorrectNumberOfButtons(currentStory);
    });

    if (currentStory.backgroundImage != null) {
        document.getElementById("backgroundImage").innerHTML = `<img src="${currentStory["backgroundImage"]}" alt="Background image" width="90%" height="auto">`;
    }
}


function chooseCorrectLevel(index) {
    if (index == 21) {
        level1Complete = true; 
        index = 0; // Reset index if level 1 is complete
    } 
    else if (index == 20 && level1Complete == true) {
        level2Complete = true;
    }

    if (index != 21 && level1Complete == false) {
        index = forceLeaveShip(index); // Update index to 10, if both right and left paths have been explored.
        currentStory = storyLevel1[index];
    } 
    else if (level1Complete == true) {
        currentStory = storyLevel2[index];
    }

    console.log("Level 1 complete during: " + level1Complete);
    console.log("Story Index during: " + index);
    
    return { currentStory, index }; // Return updated values
}



function addCorrectNumberOfButtons(currentStory){
    if(currentStory["option2"] == null){    //If option 2 is null there should only be 1 button 
        document.getElementById("gameText").innerHTML += `
        <div id="storyOptionsContainer">
            <button onclick="updateGameText(currentStory['option-1-id'])">${currentStory.option1}</button>
        </div>`;
    }
    else if(currentStory["option3"] == null){   //If option 3 is null there should be 2 buttons
        document.getElementById("gameText").innerHTML += `
        <div id="storyOptionsContainer">
            <button onclick="updateGameText(currentStory['option-1-id'])">${currentStory.option1}</button>
            <button onclick="updateGameText(currentStory['option-2-id'])">${currentStory.option2}</button>
        </div>`;
    }
    else if(currentStory["option4"]== null){
        document.getElementById("gameText").innerHTML += `
        <div id="storyOptionsContainer">
            <button onclick="updateGameText(currentStory['option-1-id'])">${currentStory.option1}</button>
            <button onclick="updateGameText(currentStory['option-2-id'])">${currentStory.option2}</button>
            <button onclick="updateGameText(currentStory['option-3-id'])">${currentStory.option3}</button>
        </div>`;
    }
};


function updateInventory(icon) {
        // Find the first empty slot in the inventory array
        for (let i = 0; i < inventoryArray.length; i++) {
            if (inventoryArray[i] === "") {
                // Add the icon to the empty slot
                inventoryArray[i] = icon;
    
                // Update the corresponding DOM element with the icon as an image
                inventorySlots[i].innerHTML = `<img src="${icon}" alt="Inventory Icon" width="100%" height="auto">`;

    
                break;
            }
        }
    }

function forceLeaveShip(choiceId){
    console.log("This runs");
    console.log("Paths taken:"+pathsTakenInShip);
    if(choiceId == 5 || choiceId == 6 || choiceId == 8 || choiceId == 9){ // 5,6 are taking the left path 8, is from the right path
        pathsTakenInShip++;
    }
    if(pathsTakenInShip==2){
        currentStory = storyLevel1[choiceId];
        //Needed if the second option the used picks also includes an item pick up
        if (currentStory["item-picked-up"] === true) {
            updateInventory(currentStory["item"]);
        }
    
        console.log("There should be text 9 on screen");
        pathsTakenInShip = 100; // so the code doesnt get stuck in infinit loop
        return 10;      //The ID that links to the text "After Exploring everything on the ship..."
    }
    return choiceId;

}


//Oxygen timer
function updateOxygen() {
    if (oxygen > 0) {
        oxygen--;
        let barWidth = (oxygen / maxOxygen) * 100;
        oxygenBar.style.width = barWidth + '%';
        oxygenText.textContent = `You have ${oxygen}s left until you run out of oxygen`;
        if (oxygen <= maxOxygen * 0.1) {
            oxygenBar.style.backgroundColor = 'darkred';
        } else if (oxygen <= maxOxygen * 0.3) {
            oxygenBar.style.backgroundColor = 'red';
        } else if (oxygen <= maxOxygen * 0.5) {
            oxygenBar.style.backgroundColor = 'orange';
        } else {
            oxygenBar.style.backgroundColor = 'green';
        }
    } else {
        oxygenText.textContent = "You have run out of oxygen!";
        oxygenBar.style.width = '0%'; //Game over
    }
}

document.addEventListener("DOMContentLoaded",function(){
updateGameText(storyIndex);
setInterval(updateOxygen, 1000);
});
