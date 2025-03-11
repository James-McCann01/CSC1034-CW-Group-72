let storyLevel1 = [
    {   
        "id": 0,
        "dialog": `Youre on the research ship the “Explorer”. While carrying out a research mission in 
        the newly discovered planet Vega-9s atmosphere your ship suddenly loses power; rapidly 
        falling to the surface. You and other crew members run to the escape pod hanger when suddenly everything 
        goes black You wake up dazed and confused, with a growing fire in the corner of your 
        vision - you need to move. Do you:`,
        "option1": "Explore deeper into the wreckage",
        "option-1-id": 1,
        "option2": "Exit the ship through the airlock",
        "option-2-id": 12,
        "backgroundImage": "Images//Background//in_ship_fire.png"
    },
    //Explore the wreckage
    {
        "id": 1,
        "dialog": `You move through the halls with the power flickering on and
         off as the hull makes ominous creaking sounds.
         You come across a supply crate with a torch. Do you take the torch:`,
        "option1": "Yes",
        "option-1-id": 2,
        "option2": "No",
        "option-2-id":11,
        
    },
    {
        "id": 2,
        "dialog": `Using the torch youre able to go deeper into the ship, calling out to your crewmates
        yet you receive no response. You continue on and on until you reach the bridge.
         Do you search the left or right side?`,
        "option1": "Left Side",
        "option-1-id": 3,
        "option2": "Right side",
        "option-2-id": 4,
        "item-picked-up": true,
        "item":"Images//InventoryIcons//Flashlight.png",
        "backgroundImage": "Images//Background//burning_bridge.png"
    },
    {
        "id": 3,
        "dialog": `You find a medkit - do you use it now on your light injuries or keep it for later use`,
        "option1": "Use",
        "option-1-id":5,
        "option2": "Keep",
        "option-2-id":6,
    },
    {
        "id":4,
        "dialog":`You find a mobile distress beacon - do you try set it off now with the ships
         remaining power or add it to your inventory?`,
        "option1":"Use",
        "option-1-id":7,
        "option2":"Keep",
        "option-2-id":8,
        "option3":"Leave",
        "option-3-id":9

    },
    {
        "id":5,
        "dialog":`You used the Medkit and are starting to feel better, you 
        head back to the bridge. Do you decide to check the right side?`,
        "option1":"Right Side",
        "option-1-id":4,
        "option2":"Leave the Ship",
        "option-2-id":19,
    },
    {
        "id":6,
        "dialog":`You kept the Medkit for later use,
        still feeling weak you head back to the bridge. Do you decide to check the right side?`,
        "option1":"Right Side",
        "option-1-id":4,
        "option2":"Leave the Ship",
        "option-2-id":19,
        "item-picked-up": true,
        "item":"Images//InventoryIcons//Medkit.png"

    },
    {
        "id":7,
        "dialog":`The ship doesn’t seem to have enough power causing the beacon to malfunction 
        - sending out a high pitched signal in all directions before shutting itself off. 
        Silence. Before you can even think you hear a shriek - an inhuman shriek. 
        You quickly set off in a panic needing to get off the ship`,
        "option1":"Continue",
        "option-1-id":20,       //Links to you running away until you find the ruins
        "option2":null,
        "option-2-id":null,         //There is no options for this. The user must hit continue

    },
    {
        "id":8,
        "dialog":`You carry the beacon in your inventory. 
        Confused to where your team is, you assume they’ve exited 
        the ship to try make contact with base command.`,
        "option1":"Explore the left side",
        "option-1-id":3,
        "option2":"Leave the ship",
        "option-2-id":19, 
        "item-picked-up": true,
        "item": "Images//InventoryIcons//Destress Beacon.png"
    },
    {
        "id":9,
        "dialog":`You leave the beacon in the ship.
        Confused to where your team is, you assume they’ve exited 
        the ship to try make contact with base command.`,
        "option1":"Explore the left side",
        "option-1-id":3,
        "option2":"Leave the ship",
        "option-2-id":19, 
    },
    {
        "id":10,
        "dialog":`After exploring everything on the ship you hear a shriek - an inhuman shriek. 
        You quickly set off in a panic needing to get off the ship`,
        "option1":"Continue",
        "option-1-id":20,   //Links to you running away until you find the ruins
    },
    //No Tourch Death
    {
        "id":11,
        "dialog":`You continue on muttering “Pfft, who needs a torch?” walking blindly through the ship.
         Suddenly you trip on something, faceplanting directly onto a piece of debris. You feel something wet below you… blood? No. 
        You hear a deep growl from the darkness beneath you. Then… teeth. Game over`,
        "option1":"Play Again ",
        "option-1-id":1,
        "option2":"Leave Game",
        "option-2-id":1, 
    },
    //Leave Ship
    {
        "id":12,
        "dialog":`You push open the airlock to reveal a large open desert planet with blazing heat. 
        In the distance you spot some alien structures - yet scans from the ship reported the planet was uninhabited…
        You follow the footprints in the sand from the airlock - it seems like some of your crew escaped!
        With a sigh of relief you carry on.`,
        "option1":"Continue",
        "option-1-id":13,
        "backgroundImage": "Images//Background//PlaneCrash.png"
    },
    {
        "id":13,
        "dialog":`As you climb over a hill you’re met with a horrid sight - your entire crew dead. 
        Their suits are torn, their visors shattered, and deep claw marks scar their bodies. 
        Something hunted them down. Do you: `,
        "option1":"Run before whatever killed you crew gets you too",
        "option-1-id":21,
        "option2":"Scavenge for items off your crew",
        "option-2-id":14, 
        "backgroundImage": "Images//Background//outside_ship.png"
    },
    
    {
        "id":14,
        "dialog":`Moving from body to body, fighting off the gnawing guilt you look for necessary items.. 
        Knowing you need something to defend yourself against whatever devoured your crew, 
        you find an experimental plasma cutter for cutting samples out of rock - but the high energy 
        blasts could be used as a weapon. You also find a sonic resonator blade - a blade vibrating at 
        high frequencies to slice through rock… and bone. Do you take the:`,
        "option1":"Plasma Cutter",
        "option-1-id":15,
        "option2":"Sonic Blade",
        "option-2-id":16, 

    },
    {
        "id":15,
        "dialog":`Moving on with the plasma cutter in hand, you see your good friend - torn in half. 
        Holding back tears you collect his tag to return to his family but then notice a 
        communicator in his hand. Do you:`,
        "option1":"Listen to the message",
        "option-1-id":17,
        "option2":"Carry on",
        "option-2-id":18, 
        "item-picked-up": true,
        "item": "Images//InventoryIcons//Laser_cutter.png"
        
    },
    {
        "id":16,
        "dialog":`Moving on with the sonic blade in hand, you see your good friend - torn in half. 
        Holding back tears you collect his tag to return to his family but then notice a 
        communicator in his hand. Do you:`,
        "option1":"Listen to the message",
        "option-1-id":17,
        "option2":"Carry on",
        "option-2-id":18, 
        "item-picked-up": true,
        "item": "Images//InventoryIcons//sonic_blade.png"
    },
    {
        "id":17,
        "dialog":`You press play and hear the last recorded message: 
        “We… we weren’t alone… it’s watching. If you hear it—” followed by an inhuman shriek. 
        Suddenly you hear the same ear piercing shriek.
         In a panic you ruin to the nearest shelter you see - some abandoned ruins.`,
        "option1":"Continue",
        "option-1-id":21,     
    },
    {
        "id":18,
        "dialog":`As you begin to set off you hear an ear piercing shriek sending shivers down your spine - that was not human.
         In a panic you run to the nearest shelter - some abandoned ruins.`,
        "option1":"Continue",
        "option-1-id":21,     
    },

    //The Ruins Story
    {
        "id":19,
        "dialog":`As you exit your ship you hear an ear piercing shriek sending shivers down your spine - that was not human.
         In a panic you run to the nearest shelter - some abandoned ruins.`,
        "option1":"Continue",
        "option-1-id":21,     
    },
    {
        "id":20,
        "dialog":`In a panic you leave the ship and run to the nearest shelter - some abandoned ruins.`,
        "option1":"Continue",
        "option-1-id":21,     
    },
];
//Level 2 is in the ruins
let storyLevel2 = [
    {
        "id":0,
        "dialog":`The you stumble into the ruins, heart pounding as distant shrieks echo through the canyon.
         The alien structures loom over them—ancient, decayed, and covered in strange bioluminescent
         spores that pulse faintly along the stone walls.
         This is their only chance for shelter, but something feels… wrong.`,
        "option1":"Continue",
        "option-1-id":1, 
        "option2":"Continue",
        "option-2-id":1, 
        "item-picked-up": null,
        "item": "Images//InventoryIcons//",
        "backgroundImage": "Images//Background//ruins.png",
    },
]
//Level 3 is Alien Base

let storyLevel3 = [
    {
        "id":0,
        "dialog":``,
        "option1":"Continue",
        "option-1-id":1, 
        "option2":"Continue",
        "option-2-id":1, 
        "item-picked-up": null,
        "item": "Images//InventoryIcons//",
        "backgroundImage": "Images//Background//",
    },
]
