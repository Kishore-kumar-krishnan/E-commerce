import p1img from './p1.jpg';
import p2img from './p2.jpeg';
import p3img from './p3.jpeg';
import p4img from './p4.jpg';
import p5img from './p5.jpeg';
import p6img from './p6.jpeg';
import p7img from './p7.jpeg';
import p8img from './p8.jpeg';
import p9img from './p9.jpeg';
import p10img from './p10.jpeg';

const allproduct=[
    {
       id:1,
        name: "Becoming",
        author:'Michelle Obama',
        summary:'In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world',
        category: "Oldbooks",
        image : p4img,
        newprice:50,
        oldprice:80.5,
        reviews:'188',
        count:1,                                   
        total:50
    }, 
    {
        id:2,
        name: "Educated",
        author:'Tara Westover',
        summary:'Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her "head-for-the-hills bag". In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her fathers junkyard.',
        category: "Newbooks",
        image : p4img,
        newprice:90,
        oldprice:102,
        reviews:'122',
        count:1,
        total:90
    },
    {
        id:3,
        name: "Born a Crime",
        author:'Trevor Noah',
        summary:'Trevor Noah’s unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents’ indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away.',
        category:'Newbooks',
        image : p4img,
        newprice:49,
        oldprice:76.5,
        reviews:'193',
        count:1,
        total:49
    },
    {
        id:4,
        name: "Doglapan",
        author:'Ashneer Grover',
        summary:'A young boy with a refugee tag growing up in Delhis Malviya Nagar outpaces his circumstances by becoming a rank-holder at the pinnacle of academic excellence in India-IIT Delhi. He goes on to do an MBA from the hallowed halls of IIM Ahmedabad, builds a career as an investment banker at Kotak Investment Banking and AmEx, and is pivotal in the making of two unicorns-Grofers, as CFO, and BharatPe, as co-founder.',
        category: "Oldbooks",
        image : p4img,
        newprice:53,
        oldprice:78,
        reviews:'163',
        count:1,
        total:53
    },
    {
        id:5,
        name: "Just the Nicest Couple",
        author:'Trevor Noah',
        summary:'A husband’s disappearance links two couples in this twisty thriller from the New York Times bestselling author of Local Woman Missing, Mary Kubica .Jake Hayes is missing. This much is certain. At first, his wife, Nina, thinks he is blowing off steam at a friends house after their heated fight the night before. But then a day goes by. Two days. Five. And Jake is still nowhere to be found.',
        category: "Newbooks",
        image : p4img,
        newprice:88,
        oldprice:110,
        reviews:'119',
        count:1,
        total:88
    },
    {
        id:6,
        name: "To Kill a Mockingbird",
        author:'Harper Lee',
        summary:'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
        category: "Oldbooks",
        image : p4img,
        newprice:45,
        oldprice:80,
        reviews:'255',
        count:1,
        total:45
    },
    {
        id:7,
        name: "The Kite Runner",
        author:'Harper Lee',
        summary:'Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.',
        category: "Oldbooks",
        image : p4img,
        newprice:67.5,
        oldprice:99,
        reviews:'157',
        count:1,
        total:67.5
    },
    {
        id:8,
        name: "1984",
        author:'Ashneer Grover',
        summary:'A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984',
        category: "Oldbooks",
        image : p4img,
        newprice:60,
        oldprice:77.5,
        reviews:'229',
        count:1,
        total:60
    },
    {
        id:9,
        name: "Where the Dead Wait ",
        author:'Michelle Obama',
        summary:'An eerie, atmospheric Polar Gothic following a Victorian explorer in search of his lost shipmate and his own redemption—from the author of the “vivid, immersive” (The Guardian) horror novel All the White Spaces. William Day should be an acclaimed Arctic explorer. But after a failed expedition, in which his remaining men only survived by eating their dead comrades, he returned in disgrace. ',
        category: "Oldbooks",
        image : p4img,
        newprice:63,
        oldprice:83.6,
        reviews:'199',
        count:1,
        total:63
    },
    {
        id:10,
        name: "Never Lie",
        author:'Tara Westover',
        summary:'Newlyweds Tricia and Ethan are searching for the house of their dreams.But when they visit the remote manor that once belonged to Dr. Adrienne Hale, a renowned psychiatrist who vanished without a trace four years earlier, a violent winter storm traps them at the estate… with no chance of escape until the blizzard comes to an end.',
        category: "Newbooks",
        image : p4img,
        newprice:86.8,
        oldprice:102.4,
        reviews:'87',
        count:1,
        total:86.8
    },
    {
        id:11,
        name: "The Perfect Marriage",
        author:'Harper Lee',
        summary:'Sarah Morgan is a successful and powerful defense attorney in Washington D.C. At 33 years old, she is a named partner at her firm and life is going exactly how she planned.  The same cannot be said for her husband, Adam. He is a struggling writer who has had little success in his career. He begins to tire of his and Sarah’s relationship as she is constantly working.',
        category: "Newbooks",
        image : p4img,
        newprice:88.4,
        oldprice:122.9,
        reviews:'87',
        count:1,
        total:88.4
    },

    
]
export default allproduct;