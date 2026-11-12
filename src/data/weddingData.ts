export interface TimelineEvent {
  id: string;
  time: string;
  period: string;
  title: string;
  caption: string;
  iconName: 'temple' | 'rings' | 'sadya' | 'games' | 'fireworks' | 'celebration';
  side: 'left' | 'right';
  badge: string;
}

export interface SettingCard {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  mapsUrl: string;
  category: 'venue' | 'canals' | 'coast' | 'heritage' | 'flavors';
  stampPostmark: string;
  rotation: string;
}

export interface GuestSquad {
  id: string;
  name: string;
  subhead: string;
  tags: string[];
  icebreaker: string;
  accent: string;
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    funComment: string;
  }[];
}

export interface ContactPerson {
  role: string;
  names: string;
  phone: string;
  whatsappMessage: string;
}

export const WEDDING_DATA = {
  couple: {
    bride: "Renu",
    groom: "Ayushman",
    fullName: "Renu & Ayushman",
    monogram: "R & A",
    blessing: "with love, Renu & Ayushman",
  },
  dates: {
    weddingDateISO: "2027-01-30T09:00:00+05:30",
    displayDate: "Saturday, January 30, 2027",
    shortDate: "30.01.2027",
    rsvpDeadline: "December 15, 2026",
  },
  venue: {
    name: "Punnamada Resort",
    location: "Alleppey, Kerala",
    address: "Punnamada, Kottankulangara, Alappuzha, Kerala 688006",
    mapsUrl: "https://maps.google.com/?q=Punnamada+Resort+Alleppey+Kerala+688006",
    phone: "+91 9446433692",
    tagline: "Heritage Kerala Sanctuary on Vembanad Lake",
  },
  timeline: [
    {
      id: "temple",
      time: "07:30 AM",
      period: "Morning",
      title: "Temple Visit",
      caption: "Sacred morning prayers & jasmine blessings",
      iconName: "temple",
      side: "left",
      badge: "Spiritual",
    },
    {
      id: "registration",
      time: "11:00 AM",
      period: "Late Morning",
      title: "Registration, Rings & Cake",
      caption: "Vows & cake cutting under the palms",
      iconName: "rings",
      side: "right",
      badge: "The Vows",
    },
    {
      id: "sadya",
      time: "01:00 PM",
      period: "Afternoon",
      title: "Sadya Lunch",
      caption: "Grand 26-dish feast on fresh banana leaves",
      iconName: "sadya",
      side: "left",
      badge: "Feast",
    },
    {
      id: "games",
      time: "03:30 PM",
      period: "Late Afternoon",
      title: "Lawn Games",
      caption: "Carrom, chess & backwater leisure",
      iconName: "games",
      side: "right",
      badge: "Play",
    },
    {
      id: "fireworks",
      time: "06:15 PM",
      period: "Dusk",
      title: "Fireworks by the Lake",
      caption: "Twilight illumination over Vembanad waters",
      iconName: "fireworks",
      side: "left",
      badge: "Golden Hour",
    },
    {
      id: "dinner",
      time: "07:30 PM",
      period: "Evening",
      title: "Dinner & Celebrations",
      caption: "Dinner, toasts & grooves under the stars",
      iconName: "celebration",
      side: "right",
      badge: "Party",
    },
  ] as TimelineEvent[],
  settingCards: [
    {
      id: "punnamada",
      title: "Punnamada Resort",
      subtitle: "Heritage teak villas & lakeside lawns",
      tag: "The Haven",
      mapsUrl: "https://maps.google.com/?q=Punnamada+Resort+Alleppey+Kerala+688006",
      category: "venue",
      stampPostmark: "ALLEPPEY • 688006",
      rotation: "0deg",
    },
    {
      id: "shikara",
      title: "Shikara Canal Cruises",
      subtitle: "Silent glides through Kuttanad lotus canals",
      tag: "Backwaters",
      mapsUrl: "https://maps.google.com/?q=Punnamada+Lake+Jetty+Alleppey",
      category: "canals",
      stampPostmark: "VEMBANAD • JETTY",
      rotation: "-2deg",
    },
    {
      id: "marari",
      title: "Marari Beach Sands",
      subtitle: "Tranquil coconut-shaded white sands",
      tag: "Coastline",
      mapsUrl: "https://maps.google.com/?q=Marari+Beach+Alappuzha",
      category: "coast",
      stampPostmark: "ARABIAN SEA • 15KM",
      rotation: "3deg",
    },
    {
      id: "lighthouse",
      title: "Alappuzha Pier & Lighthouse",
      subtitle: "1862 teakwood railway pier ruins",
      tag: "Heritage",
      mapsUrl: "https://maps.google.com/?q=Alappuzha+Lighthouse",
      category: "heritage",
      stampPostmark: "HISTORIC PORT • 1862",
      rotation: "-1.5deg",
    },
    {
      id: "karimeen",
      title: "Toddy Shop Karimeen",
      subtitle: "Charred pearl spot in spicy banana wrap",
      tag: "Flavors",
      mapsUrl: "https://maps.google.com/?q=Alappuzha+Backwater+Karimeen",
      category: "flavors",
      stampPostmark: "KUTTANAD • FLAVORS",
      rotation: "2deg",
    },
  ] as SettingCard[],
  squads: [
    {
      id: "iiser",
      name: "The IISER Pune Crew",
      subhead: "Physics nerds & hostel night owls",
      tags: ["Quantum Debates", "Chai Conspirators"],
      icebreaker: "Ask who owes whom Maggi or about the legendary hostel microwave incident.",
      accent: "#4A5D4E",
    },
    {
      id: "runners",
      name: "The Bangalore Runners",
      subhead: "Cubbon Park 10K survivors & coffee fiends",
      tags: ["Pace Talk", "Cortado Lovers"],
      icebreaker: "Ask why they're secretly plotting a 5k sunrise run around the lake on Saturday.",
      accent: "#B85D43",
    },
    {
      id: "kerala",
      name: "The Kerala Home Team",
      subhead: "Alleppey roots & warm hospitality",
      tags: ["Sadya Masters", "Infinite Refills"],
      icebreaker: "Ask an uncle which local tea stall serves the crunchiest banana chips.",
      accent: "#C5A059",
    },
    {
      id: "gamers",
      name: "The Board Game Foodies",
      subhead: "Catan strategists & midnight snack masters",
      tags: ["Carrom Sharpshooters", "Dance Anchors"],
      icebreaker: "Challenge any of them to a game of carrom on the verandah between 3 and 5 PM.",
      accent: "#73957B",
    },
  ] as GuestSquad[],
  trivia: [
    {
      id: "q1",
      question: "Who will shed the first tear during the lakeside vows?",
      options: [
        { id: "renu", text: "Renu (happy tears guaranteed)", funComment: "Fact: She cries during cute animal reels." },
        { id: "ayushman", text: "Ayushman (behind sunglasses)", funComment: "The sunglasses won't fool anyone!" },
        { id: "both", text: "Both in cinematic unison", funComment: "The romantic consensus! Have tissues ready." },
      ],
    },
    {
      id: "q2",
      question: "How many Kerala Pappadams will Ayushman eat during the Sadya?",
      options: [
        { id: "p1", text: "1–2 (polite groom mode)", funComment: "Unrealistic given his love for hot ghee & crunch." },
        { id: "p2", text: "4–6 (healthy crunch)", funComment: "A solid baseline." },
        { id: "p3", text: "Countless (crushed into payasam)", funComment: "The authentic Kerala connoisseur method!" },
      ],
    },
  ] as TriviaQuestion[],
  contacts: [
    {
      role: "Renu's Family",
      names: "Bride's Family Assistance",
      phone: "+91 98470 54321",
      whatsappMessage: "Hi! Reaching out regarding Renu & Ayushman's wedding celebration.",
    },
    {
      role: "Punnamada Resort",
      names: "Reception & Concierge",
      phone: "+91 9446433692",
      whatsappMessage: "Hello! Inquiry regarding guest stay for Renu & Ayushman's wedding on Jan 30, 2027.",
    },
  ] as ContactPerson[],
  giftNote: {
    heading: "A Gentle Note",
    text: "The greatest gift is having you celebrate with us by the lake. Please, no boxed gifts.",
  },
  rsvpConfig: {
    googleAppsScriptUrl: "",
    submitSuccessMessage: "We look forward to celebrating with you by the lake.",
  },
  qrConfig: {
    productionDomainUrl: "https://renuandayushman.github.io/#rsvp-section",
    dynamicRedirectUrl: "https://tinyurl.com/renu-ayushman-rsvp",
    activeUrl: "https://renuandayushman.github.io/#rsvp-section",
  }
};
