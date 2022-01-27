import attributeimg from "./assets/specs.jpeg";
import team1 from "./assets/team1.jpeg";
import team2 from "./assets/team2.jpeg";
import team3 from "./assets/team3.jpeg";
import team4 from "./assets/team4.jpeg";
import team5 from "./assets/team5.jpeg";
import team6 from "./assets/team6.jpeg";
import team7 from "./assets/team7.jpeg";
import team8 from "./assets/team8.jpeg";
const HtmlToReactParser = require("html-to-react").Parser;

const htmlToReactParser = new HtmlToReactParser();

export const headerData = {
  twitter: "https://twitter.com/JabroniMH",
  discord: "https://discord.gg/khrxbJ9fV7",
  spotify: "https://opensea.io/collection/jabroni-moon-house",
  insta: "https://www.instagram.com/jabronimoonhouse/",
};

export const footerData = {
  description: "Smart contract",
};

export const landingData = {
  h1: "WELCOME TO THE",
  h2: "JABRONI MOON HOUSE",
  description: htmlToReactParser.parse(
    `Each NFT comes with a full membership to the <span style="color:#F19DFF">Moon House</span>.`
  ),
};

export const aboutData = {
  welcome: {
    title1: `WELCOME TO THE`,
    title2: `JABRONI MOON HOUSE`,
    description: htmlToReactParser.parse(
      `Jabroni <span style="color:#F19DFF">Moon House</span> is a collection of 8,008 unique ERC-721 tokens stored on the Ethereum Blockchain. Each NFT comes with a full membership to the <span style="color:#F19DFF">Moon House</span>. Once inducted, Jabronis are granted a variety of perks such as exclusive access to Beer Pong Tournaments, charity donations, Spotify playlists by resident DJs, and most importantly, lifelong frienships amongst the historic elite.`
    ),
  },
  story: {
    title1: `READ ABOUT`,
    title2: `OUR STORY`,
    description:
      htmlToReactParser.parse(`May 27th, 2021, 5:45pm. Graduation Day. The Jabronis just crushed finals week and school’s finally out for the summer, err... rather forever unless Topher’s dad makes him go to law school. 

It must be criminal to leave these bonds formed at the fraternity behind and move back home with the parentals, but the Jabronis will look back on their time at Hopstra University with gratitude, fond memories, and fish tacos. After all, they did it: mastered the projective geometrics of beer pong, chased tail, bar hopped, out-chugged Thad’s cousin, worked out, payed respects to brother Daytona’s fire complexion, and most importantly, made their mums proud. But now what?

Fast forward furiously to October and how many times can they drift around on their dad’s golf carts during the day and mix DJ sets for their fellow Jabronis at night? If you’d ask them, they’d say as long as mum doesn’t kick them out. But like a ripe avocado, the Jabronis know they need a purpose—to make a name for themselves in this world, like Jump Bezos, recognized for the highest vertical jump known to kangaroos. Using dad’s credit card and having one final serving of mum’s spaghetti, the Jabronis know they needed to find their own way... to make their own bread. They set off. Mission-driven and collars popped. To meet up with their boys again when they were loaded.

The get-rich plan was in motion. They had unlimited funds (thanks, dad!) but how would they fork dad’s cash into their own? Crypto. And boy did they moon. So much so that the <span style="color:#F19DFF">Moon House</span> was born. Daytona, Topher and Thad used their crypto gains to construct their own fraternity house on the moon. To reminisce on the good ol’ days, the founding Jabronis are holding a Monthly Jabroni Beer Pong Tournament for all their brothers who want to compete—on the moon.

<span style="font-style:italic">Now, opportunity awaits, each and every Jabroni has a chance at victory, to jump to new heights where records are yet to be set and gravity can’t hold them down.</span>`),
  },
  specs: {
    title1: `MOON HOUSE`,
    title2: `THE SPECS`,
    specs: [
      {
        text: `Created from over 190 illustrations, all hand-drawn and inventive.`,
        img: attributeimg,
      },
      {
        text: htmlToReactParser.parse(
          `Holding a Jabroni NFT will allow full exclusive access to the <span style="color:#F19DFF">Moon House</span>.`
        ),
        img: attributeimg,
      },
      {
        text: `Verified Smart Contract with all images hosted on IPFS.`,
        img: attributeimg,
      },
      {
        text: `Commercial usage rights granted to the owner for use in video/media.`,
        img: attributeimg,
      },
      {
        text: `Committed to our values of brotherhood, courage, and respect for fellow Jabronis.`,
        img: attributeimg,
      },
    ],
  },
};

export const teamData = {
  title1: "ABOUT US",
  title2: "THE TEAM",
  members: [
    {
      name: "Daytona.",
      designation:
        " Underpaid and underworked cryptologist. About as useful as Angel’s mum.",
      image: team1,
    },
    {
      name: "Topher.",
      designation: htmlToReactParser.parse(
        ` <span style="color:#F19DFF">Moon House</span> made possible by Topher’s dad.`
      ),
      image: team2,
    },
    {
      name: "Thad.",
      designation: ` Creative Director: “Who do you even know here?”`,
      image: team3,
    },
    {
      name: "Butterman.",
      designation: " Digital artisan, illustrator, and world traveler.",
      image: team4,
    },
    {
      name: "Chad.",
      designation: " Just here for the comments and booze.",
      image: team5,
    },
    {
      name: "Vitamin.",
      designation: htmlToReactParser.parse(
        ` <span style="color:#F19DFF">Moon House</span> mechanic and an excellent source of 12 essential nutrients.`
      ),
      image: team6,
    },
    {
      name: "Guppy.",
      designation: " Celebrity personality and professional cuddler.",
      image: team7,
    },
    {
      name: "Caboose.",
      designation: " Support system and power bottom.",
      image: team8,
    },
  ],
};

export const roadmapData = [
  {
    heading: "20%",
    description: htmlToReactParser.parse(
      `Tokens are now access keys, granting members entry to exclusive sectors of the <span style="color:#F19DFF">Moon House</span> and Discord.`
    ),
  },
  {
    heading: "30%",
    description: "Airdrop of 10 Jabronis to random holders.",
  },
  {
    heading: "40%",
    description:
      "All Jabronis are aware of those less fortunate, so we will be donating 7 ETH to a charity of the community’s choosing.",
  },
  {
    heading: "50%",
    description:
      "The male Jabronis are getting lonely on the moon, leading to the release of a limited female collection (Jabronitas).",
  },
  {
    heading: "60%",
    description: htmlToReactParser.parse(
      `The Garage is unlocked in the <span style="color:#F19DFF">Moon House</span>, where a Beer Pong Tournament will be played for an ETH prize pool.`
    ),
  },
  {
    heading: "70%",
    description: htmlToReactParser.parse(
      `Spotify sessions begin: monthly playlists made by resident DJs in the <span style="color:#F19DFF">Moon House</span>.`
    ),
  },
  {
    heading: "80%",
    description:
      "Member-exclusive merchandise store, featuring limited edition tees, hats, socks, and other moon merch.",
  },
  {
    heading: "90%",
    description: "Jabroni liquidity pool is initiated.",
  },
  {
    heading: "100%",
    description:
      "The Jabronis have been busy finding their mates because their mums want grandchildren. NFT breeding is upon us.",
  },
];

export const mintData = {
  active: {
    price: "0.12Ξ",
  },
  inactive: {
    title: "SOLD OUT!",
    description: "If you're late to the launch, you can refer to the ",
    link: "Secondary Market.",
  },
};
