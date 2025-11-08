const fs = require('fs');
const { Parser } = require('json2csv');


// Generate 10,000 users
const fileName = '3k_users_final.csv';
const users = Array.from({ length: 3000 }, (_, i) => ({
    "First Name*": randomName(),
    "Last Name": randomName(),
    "User ID*": `UID${1000 + i}`, // Unique ID
    "Email*": `user${i + 1}@example.com`, // Unique email
    "Employee Designation*": "Manager",
    "Vessel IMO Number": "",
    "Vessel Status": "",
    "Country": ""
}));

function randomName() {
    const adjectives = [
        "Fast","Slow","Happy","Sad","Tall","Short","Old","New","Brave","Clever",
        "Calm","Wild","Bright","Dark","Strong","Weak","Funny","Serious","Gentle",
        "Harsh","Quick","Lazy","Smart","Bold","Shiny","Rusty","Loud","Silent",
        "Fresh","Ancient","Lucky","Curious","Fierce","Kind","Cold","Warm","Sharp",
        "Smooth","Rough","Swift","Steady","Epic","Tiny","Massive","Mighty","Glorious",
        "Witty","Sneaky","Noble","Royal","Charming","Daring","Cheerful","Cautious",
        "Famous","Fearless","Grumpy","Jolly","Lively","Magical","Mysterious",
        "Noisy","Peaceful","Radiant","Stormy","Sunny","Vivid","Wise","Young",
        "Zany","Agile","Clumsy","Crafty","Elegant","Gentle","Heroic","Icy",
        "Jumpy","Lucky","Majestic","Nervous","Odd","Proud","Quick","Rare"
    ];

    const nouns = [
        "Car","Dog","House","Tree","Pen","Pencil","Book","Table","Cat","Bird",
        "River","Mountain","Ocean","Cloud","Star","Moon","Sun","Laptop","Phone",
        "Chair","Cup","Bottle","Flower","Road","Bridge","Plane","Train","Ship",
        "Clock","Drum","Sword","Shield","Castle","Dragon","Knight","Wizard","Robot",
        "Alien","Monster","Rocket","Planet","Stone","Gem","Ring","Crown","Helmet",
        "Boat","Cave","Forest","Valley","Desert","Island","Beach","Tower","Village",
        "City","Market","Garden","Farm","Barn","Temple","Bridge","Tunnel","Gate",
        "Wall","Statue","Lamp","Torch","Bookcase","Scroll","Map","Key","Door",
        "Window","Mirror","Coin","Bell","Pipe","Bench","Stage","Arena","Camp",
        "Tent","Field","Well","Fountain"
    ];

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adjective}${noun}`;
}


// Convert to CSV
const json2csvParser = new Parser({ fields: Object.keys(users[0]) });
const csv = json2csvParser.parse(users);

// Write CSV to file
fs.writeFileSync(fileName, csv);

console.log('✅ File generated: ', fileName);