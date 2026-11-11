export interface TimelineEvent {
  id: string;
  time: string;
  period: string; // 'Morning' | 'Late Morning' | 'Afternoon' | 'Late Afternoon' | 'Dusk' | 'Evening'
  title: string;
  subtitle: string;
  description: string;
  location: string;
  dressCode?: string;
  iconName: 'temple' | 'rings' | 'sadya' | 'games' | 'fireworks' | 'cocktail';
  tag: string;
  accentColor: string;
}

export interface Amenity {
  title: string;
  description: string;
  icon: string;
}

export interface ExploreSpot {
  id: string;
  category: 'backwaters' | 'beaches' | 'culture' | 'flavors';
  title: string;
  subtitle: string;
  distance: string;
  description: string;
  highlight: string;
  tag: string;
  image?: string;
}

export interface GuestSquad {
  id: string;
  name: string;
  subtitle: string;
  membersNote: string;
  vibes: string[];
  icebreaker: string;
  badgeColor: string;
}

export interface ContactPerson {
  role: string;
  names: string;
  phone: string;
  whatsappMessage: string;
  description: string;
  side: 'bride' | 'groom' | 'transport' | 'venue';
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isRevealJoke?: boolean;
    funComment: string;
  }[];
}

export const WEDDING_DATA = {
  couple: {
    bride: "Renu",
    groom: "Ayushman",
    fullName: "Renu & Ayushman",
    tagline: "Together on the Backwaters",
    invitationNote: "Renu & Ayushman would love to invite you to share their wedding day",
    subNote: "An intimate gathering of 150 of our dearest family and lifelong friends.",
    blessing: "with love, Renu & Ayushman",
  },
  dates: {
    weddingDateISO: "2027-01-30T09:00:00+05:30",
    displayDate: "January 30, 2027",
    shortDate: "30.01.27",
    dayOfWeek: "Saturday",
    year: "2027",
  },
  venue: {
    name: "Punnamada Resort",
    tagline: "Traditional Kerala Heritage on the Serene Waters of Vembanad Lake",
    address: "Punnamada, Kottankulangara, Alappuzha, Kerala 688006",
    mapsUrl: "https://maps.google.com/?q=Punnamada+Resort+Alleppey+Kerala+688006",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.918930811984!2d76.35728347576595!3d9.510041490571661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08850626354fbf%3A0xc3fae3ba15b0ceca!2sPunnamada%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    phone: "+91 9446433692",
    email: "mail@punnamada.com",
    coordinates: { lat: 9.5100, lng: 76.3573 },
    amenities: [
      {
        title: "Lake View & Heritage Garden Villas",
        description: "Open-roof heritage Kerala bathrooms, handcrafted teakwood furnishings, and serene private verandas.",
        icon: "Home",
      },
      {
        title: "Freshwater Swimming Pool",
        description: "Lakeside infinity pool surrounded by gently swaying coconut groves and flowering frangipani.",
        icon: "Waves",
      },
      {
        title: "Bicycles & Walking Trails",
        description: "Complimentary bicycles to explore the village paths, lotus ponds, and waterfront stretches.",
        icon: "Bike",
      },
      {
        title: "Ayurvedic Spa & Wellness",
        description: "Rejuvenating traditional Kerala abhyanga oil massages and herbal steam treatments.",
        icon: "Sparkles",
      },
      {
        title: "Backwater Shikara & Speedboats",
        description: "Private resort boat jetty offering serene wooden canoe rides or high-speed lake jaunts.",
        icon: "Compass",
      },
      {
        title: "Lakeside Fishing & Lawn Games",
        description: "Peaceful bamboo rod fishing on Vembanad Lake, carrom, chess, and sunset badminton.",
        icon: "Sun",
      },
    ],
    transit: [
      {
        mode: "By Air",
        title: "Cochin International Airport (COK)",
        duration: "~2 to 2.5 hours",
        details: "Direct prepaid taxi or app cabs down NH66 scenic coastal highway right to the resort gates. (Check our cab-pool below!)",
        icon: "Plane",
      },
      {
        mode: "By Train",
        title: "Alappuzha Railway Station (ALLP)",
        duration: "~15 to 20 minutes",
        details: "Well connected to Trivandrum, Ernakulam, Bangalore, and Chennai. Quick autorickshaw or resort cab ride (6.5 km).",
        icon: "Train",
      },
      {
        mode: "By Road / Car",
        title: "Scenic Kerala Backroads",
        duration: "Direct on NH66",
        details: "Free on-site valet and guest parking available throughout the wedding weekend.",
        icon: "Car",
      },
    ],
  },
  timeline: [
    {
      id: "temple",
      time: "07:30 AM – 09:30 AM",
      period: "Morning",
      title: "Temple Blessings",
      subtitle: "Sacred Beginnings & Traditional Prayers",
      description: "Starting the day with blessings at a historic local Alleppey temple. Jasmine flowers, oil lamps, and intimate prayers surrounded by traditional nadaswaram melodies.",
      location: "Alleppey Local Temple (Cabs leave resort lobby at 7:15 AM)",
      dressCode: "Traditional Kerala Kasavu Mundu / Saree or Indian Ethnic Pastels",
      iconName: "temple",
      tag: "Spiritual",
      accentColor: "#C5A059",
    },
    {
      id: "registration-vows",
      time: "11:00 AM – 01:00 PM",
      period: "Late Morning",
      title: "Lakeside Registration, Vows & Rings",
      subtitle: "Making It Official by Vembanad Lake",
      description: "Gathering under the coconut canopy on the waterfront lawn. Official marriage registration, exchanging heartfelt personal vows, exchanging rings, and slicing into our custom wedding cake.",
      location: "Punnamada Lakeside Promenade",
      dressCode: "Lakeside Festive Chic / Light Linen / Elegant Florals",
      iconName: "rings",
      tag: "The Main Moment",
      accentColor: "#4A5D4E",
    },
    {
      id: "sadya",
      time: "01:00 PM – 02:45 PM",
      period: "Afternoon",
      title: "Grand Kerala Sadya Feast",
      subtitle: "Authentic Multi-Course Feast on Fresh Banana Leaves",
      description: "A ceremonial 26-dish traditional Kerala vegetarian banquet served on tender banana leaves. Piping hot rice, avial, sambar, thoran, crispy upperi, sweet unniyappam, and rich Ambalappuzha paal payasam.",
      location: "Choola Heritage Dining Hall, Punnamada Resort",
      dressCode: "Relaxed Indian Ethnic (Elastic waistbands strongly advised!)",
      iconName: "sadya",
      tag: "Culinary Highlight",
      accentColor: "#B85D43",
    },
    {
      id: "leisure",
      time: "03:30 PM – 05:45 PM",
      period: "Late Afternoon",
      title: "Lawn Games & Backwater Leisure",
      subtitle: "Unwind, Compete & Cruise",
      description: "Kick off your shoes! Competitive outdoor wedding games on the emerald lawns, lively carrom and chess tournaments on the verandah, speedboat sprints, or a refreshing dip in the infinity pool.",
      location: "Central Lawns, Verandahs & Resort Pool",
      dressCode: "Breezy Resort Casual / Swimwear / Flat Footwear",
      iconName: "games",
      tag: "Play & Unwind",
      accentColor: "#73957B",
    },
    {
      id: "fireworks",
      time: "06:15 PM – 06:45 PM",
      period: "Dusk",
      title: "Lakeside Twilight Fireworks",
      subtitle: "Illuminating the Backwater Skies",
      description: "As the sun dips below Vembanad Lake, casting gold and lilac reflections across the water, gather by the jetty for a spellbinding sunset fireworks display celebrating the newlyweds.",
      location: "Punnamada Lakefront Jetty",
      dressCode: "Evening Attire",
      iconName: "fireworks",
      tag: "Golden Hour Magic",
      accentColor: "#C5A059",
    },
    {
      id: "cocktails",
      time: "07:30 PM – Late",
      period: "Evening",
      title: "Cocktail Dinner & Celebrations",
      subtitle: "Toasts, Grooves & Dinner Under the Stars",
      description: "Handcrafted tropical cocktails, live DJ beats blending Malayalam grooves, indie rock, and Bollywood bangers, celebratory speeches, and a sumptuous feast celebrating into the night.",
      location: "The Palm Garden & Waterfront Pavilion",
      dressCode: "Dress to Celebrate! Cocktail Attire / Festive Glamour",
      iconName: "cocktail",
      tag: "Party All Night",
      accentColor: "#222422",
    },
  ] as TimelineEvent[],
  exploreSpots: [
    {
      id: "houseboats",
      category: "backwaters",
      title: "Kettuvallam & Shikara Rides",
      subtitle: "Silent Glides through Kuttanad Canals",
      distance: "Departs from Resort Jetty",
      description: "Climb aboard a traditional thatched kettuvallam or intimate wooden shikara to glide through the narrow canals of Kuttanad, where farming happens 4 to 10 feet below sea level. Spot kingfishers, egrets, and lake lotus blooms.",
      highlight: "Sunset Shikara Cruise (4:30 PM to 6:00 PM)",
      tag: "Must Experience",
    },
    {
      id: "beaches",
      category: "beaches",
      title: "Alappuzha & Marari Beaches",
      subtitle: "Historic 1862 Pier & Serene White Sands",
      distance: "15 to 25 mins drive",
      description: "Alappuzha Beach boasts an evocative 150-year-old railway pier stretching into the Arabian Sea and a striped colonial lighthouse. For tranquil bliss, head north to Marari Beach for quiet coconut-shaded sands.",
      highlight: "Crisp salt air and sea-spray sunsets",
      tag: "Coastline",
    },
    {
      id: "culture",
      category: "culture",
      title: "Temples, Churches & Coir Craft",
      subtitle: "Rich Architecture & Heritage Artistry",
      distance: "10 to 30 mins drive",
      description: "Visit the 17th-century Ambalappuzha Sree Krishna Temple (famed for its celestial condensed-milk Paal Payasam), the historic Portuguese-built St. Mary’s Forane Church in Champakulam, or discover coconut fiber weaving at the Coir Museum.",
      highlight: "Famous Ambalappuzha sweet Paal Payasam",
      tag: "Heritage",
    },
    {
      id: "flavors",
      category: "flavors",
      title: "Kerala Backwater Delicacies",
      subtitle: "Karimeen Fry, Pazham Pori & Filter Coffee",
      distance: "Walking & short auto rides",
      description: "Feast on fresh Pearl Spot (Karimeen Pollichathu) wrapped in charred banana leaves, tender beef roast with flaky layered Malabar parottas, piping hot Pazham Pori (sweet banana fritters), and frothy chicory-laced filter coffee.",
      highlight: "Authentic lakeside Toddy shops & tea stalls",
      tag: "Foodie Paradise",
    },
  ] as ExploreSpot[],
  squads: [
    {
      id: "iiser",
      name: "The IISER Pune Squad",
      subtitle: "Lab coats exchanged for Kasavu silks",
      membersNote: "College buddies, physics nerds, dorm night owls & late-night chai conspirators.",
      vibes: ["Quantum Debates", "Board Game Sharpshooters", "Nostalgia 100%"],
      icebreaker: "Ask them about the infamous Pune hostel microwave incident or who owes whom Maggi.",
      badgeColor: "bg-[#73957B]/15 text-[#4A5D4E] border-[#4A5D4E]/25",
    },
    {
      id: "runners",
      name: "The Bangalore Runners & Cult Crew",
      subtitle: "Cubbon Park 10K survivors & fitness fiends",
      membersNote: "Ayushman’s weekend running group, sourdough bakers, and specialty coffee snobs.",
      vibes: ["Pace Talk", "Strava Kudos", "Cortado Lovers"],
      icebreaker: "Ask them why they secretly plan to run a 5k around Vembanad Lake on Saturday morning.",
      badgeColor: "bg-[#B85D43]/15 text-[#B85D43] border-[#B85D43]/25",
    },
    {
      id: "kerala",
      name: "The Kerala Home Team",
      subtitle: "Warm hospitality, aunts, uncles & cousin energy",
      membersNote: "Renu’s family roots, local Alleppey guides, and master advisors on eating Sadya with hands.",
      vibes: ["Infinite Refills", "Mallu Jams", "Sweetest Smiles"],
      icebreaker: "Ask an uncle which tea shop has the crunchiest banana chips in town.",
      badgeColor: "bg-[#C5A059]/20 text-[#866732] border-[#C5A059]/35",
    },
    {
      id: "gamers",
      name: "The Foodies & Board Gamers",
      subtitle: "Catan strategists & midnight snack masters",
      membersNote: "Friends from Lucknow, Pune, Delhi, and Bangalore who take casual games way too seriously.",
      vibes: ["Carrom Masters", "Snack Hoarders", "Dance Floor Anchors"],
      icebreaker: "Challenge any of them to a game of carrom on the resort verandah between 3 and 5 PM.",
      badgeColor: "bg-[#222422]/10 text-[#222422] border-[#222422]/20",
    },
  ] as GuestSquad[],
  trivia: [
    {
      id: "q1",
      question: "Who is mathematically guaranteed to shed the first tear during the lakeside vows?",
      options: [
        { id: "renu", text: "Renu (she cries during cute animal reels)", funComment: "Fact: She cried when a duck crossed the road yesterday." },
        { id: "ayushman", text: "Ayushman (trying to play it cool behind sunglasses)", funComment: "High probability! The sunglasses won't fool anyone." },
        { id: "both", text: "Both together in cinematic unison", funComment: "The romantic consensus! Have tissues ready." },
        { id: "achan", text: "Achan & Arvind Uncle during the toasts", funComment: "A heartwarming dark-horse prediction!" },
      ],
    },
    {
      id: "q2",
      question: "How many crispy Kerala Pappadams will Ayushman consume during the Sadya feast?",
      options: [
        { id: "p1", text: "1–2 (polite, controlled groom mode)", funComment: "Unrealistic. Have you seen him around hot ghee & pappadam?" },
        { id: "p2", text: "3–5 (healthy appreciation of crunch)", funComment: "A solid baseline." },
        { id: "p3", text: "6–9 (crushing them right into the payasam)", funComment: "The authentic Kerala connoisseur method!" },
        { id: "p4", text: "Lost count, the catering staff ran out", funComment: "Confirmed: emergency pappadam reinforcements are on standby." },
      ],
    },
    {
      id: "q3",
      question: "What time will the cocktail party music finally wind down by the lake?",
      options: [
        { id: "t1", text: "11:00 PM (responsible adults with bedtime routines)", funComment: "Zero chance with this 150-person crew." },
        { id: "t2", text: "01:00 AM (after the third round of 90s indie rock)", funComment: "Now we're warming up." },
        { id: "t3", text: "03:30 AM (watching sunrise mist over the backwaters)", funComment: "Punnamada night owls represent!" },
      ],
    },
  ] as TriviaQuestion[],
  contacts: [
    {
      role: "Bride's Side Coordination",
      names: "Achan, Amma, Fluffy & Aliyan",
      phone: "+91 98470 54321",
      whatsappMessage: "Hi! Reaching out regarding Renu & Ayushman's wedding (Bride's family assistance).",
      description: "Ceremony rituals, traditional temple visits, and bride family assistance.",
      side: "bride",
    },
    {
      role: "Groom's Side Coordination",
      names: "Arvind & Sunita Singh, Mohit Bhaiya, Alisha",
      phone: "+91 98101 23456",
      whatsappMessage: "Hi! Reaching out regarding Renu & Ayushman's wedding (Groom's family assistance).",
      description: "Guest arrivals, room keys, logistics, and family guidance.",
      side: "groom",
    },
    {
      role: "Local Transport & Cab Fleet",
      names: "Girish Chettan",
      phone: "+91 94471 88990",
      whatsappMessage: "Namaskaram Girish Chettan! Calling/messaging for Renu & Ayushman wedding cab coordination.",
      description: "Cochin Airport (COK) pickups, railway transfers, and local Alleppey sight-seeing taxis.",
      side: "transport",
    },
    {
      role: "Venue Front Desk & Concierge",
      names: "Punnamada Resort Reception",
      phone: "+91 9446433692",
      whatsappMessage: "Hello Punnamada Resort! Query regarding wedding guest villa check-in for Renu & Ayushman (Jan 30, 2027).",
      description: "Room check-ins, villa housekeeping, early baggage drop, and on-site amenities.",
      side: "venue",
    },
  ] as ContactPerson[],
  giftNote: {
    heading: "A Gentle Note on Gifts",
    quote: "The most important gift to us is having you share in our special day by the backwaters.",
    body: "We are deeply grateful for the time, love, and effort you are making to travel to Alleppey to celebrate with us. Your presence, laughter, and blessings are genuinely all we ask for. Please, no boxed gifts — your warm company is our greatest treasure.",
  },
  // Configurable Google Apps Script Webhook URL
  // Paste your published Web App URL here after deploying google-apps-script.js
  rsvpConfig: {
    googleAppsScriptUrl: "", // Leave blank to use instant mock submission + local preview
    submitSuccessMessage: "We cannot wait to celebrate with you under the Kerala palms!",
  },
  // Physical Wedding Invitation QR Code Configuration
  qrConfig: {
    // 1. Direct Custom Domain: If you own a domain (e.g., https://renuandayushman.com/#rsvp-section)
    productionDomainUrl: "https://renu-ayushman.wedding/#rsvp-section",
    // 2. Dynamic Redirection Link (Zero-risk future-proofing for physical cards):
    // Use an alias like tinyurl.com/renu-ayushman-rsvp or your custom redirect.
    // That way, you can point it anywhere before or after deployment without ever reprinting cards!
    dynamicRedirectUrl: "https://tinyurl.com/renu-ayushman-rsvp",
    // The currently active target URL embedded in the generated QR assets:
    activeUrl: "https://renu-ayushman.wedding/#rsvp-section",
  }
};
