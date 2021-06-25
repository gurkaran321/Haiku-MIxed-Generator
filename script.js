let num = [];

let randomLines = [];
randomLines.length = 27;

const randomNumber = () => { return Math.floor(Math.random() * 27) };

const haikus = ["An old silent pond,A frog jumps into the pond,Splash! Silence again.",
    "The light of a candle,Is transferred to another candle,Spring twilight",
    "I write erase rewrite,Erase again and then,A poppy blooms.",
    "Over the wintry Forest, winds howl in rage,With no leaves to blow.",
    "The apparition of these faces in the crowd;,Petals on a wet, black bough.",
    "The taste,Of rain,—Why kneel?",
    "Love between us is,speech and breath. loving you is,a long river running.",
    "life’s little our heads,sad. Redeemed and wasting clay,this chance. Be of use.",
    "Period,One blue egg all summer long,Now gone"
]

//const lines1 = haikus.map((haiku) => { return haiku.split(',') })

for (let i = 0; i < haikus.length; i++) {
    const lines = haikus[i].split(',');
    let size = lines.length;
    while (size > 0) {
        let ran = randomNumber();

        while (num.includes(ran)) {
            ran = randomNumber();
        }
        num.push(ran);
        randomLines[ran] = lines[size - 1];

        size--;

    }
}


console.log(randomLines);

console.log(num);