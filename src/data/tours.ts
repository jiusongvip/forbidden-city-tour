export interface Tour {
  slug: string;
  name: string;
  category: "group" | "private" | "vip" | "half-day" | "full-day";
  duration: string;
  price: string;
  rating: number;
  highlights: string[];
  image: string;
  description: string;
}

export const tours: Tour[] = [
  {
    slug: "imperial-highlights-group",
    name: "Imperial Highlights Group Tour",
    category: "group",
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    highlights: ["Hall of Supreme Harmony", "Palace of Heavenly Purity", "Imperial Garden"],
    image: "/images/group-tour.webp",
    description: "Join a small group led by an English-speaking guide through the Forbidden City's iconic halls. Ideal for first-time visitors seeking a 4-hour overview."
  },
  {
    slug: "private-imperial-deep-dive",
    name: "Private Imperial Deep Dive",
    category: "private",
    duration: "6 hours",
    price: "$180",
    rating: 4.9,
    highlights: ["Treasure Gallery", "Clock Exhibition", "Hall of Clocks", "Hidden courtyards"],
    image: "/images/private-tour.webp",
    description: "A private, fully customized tour with an expert historian. Explore the Treasure Gallery, Hall of Clocks, and hidden courtyards at your own pace."
  },
  {
    slug: "vip-skip-the-line",
    name: "VIP Skip-the-Line Experience",
    category: "vip",
    duration: "5 hours",
    price: "$250",
    rating: 5.0,
    highlights: ["Priority entry", "Private guide", "Exclusive areas", "Tea ceremony"],
    image: "/images/vip-tour.webp",
    description: "Skip every queue with priority entry and a private guide. Access exclusive areas, restricted courtyards, and enjoy an imperial tea ceremony."
  },
  {
    slug: "half-day-essentials",
    name: "Half-Day Essentials Tour",
    category: "half-day",
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    highlights: ["Meridian Gate", "Hall of Supreme Harmony", "Imperial Garden"],
    image: "/images/halfday-tour.webp",
    description: "Short on time? Hit the must-sees with a knowledgeable guide in 3 hours. Cover the Meridian Gate, Hall of Supreme Harmony, and Imperial Garden efficiently."
  },
  {
    slug: "full-day-complete-palace",
    name: "Full-Day Complete Palace Tour",
    category: "full-day",
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    highlights: ["All major halls", "Treasure Gallery", "East & West Palaces", "Jingshan Park"],
    image: "/images/full-day-tour.webp",
    description: "The complete Forbidden City experience: every major hall, the Treasure Gallery, and Jingshan Park for the iconic rooftop view. 8 hours, lunch included."
  },
  {
    slug: "sunset-photography-tour",
    name: "Sunset Photography Tour",
    category: "private",
    duration: "4 hours",
    price: "$160",
    rating: 4.8,
    highlights: ["Golden hour access", "Photo guidance", "Best angles", "Jingshan sunset"],
    image: "/images/sunset-photography.webp",
    description: "Timed for the golden hour, this private photography tour covers the palace's most photogenic angles. End at Jingshan Park for a panoramic sunset."
  }
];

export function getToursByCategory(category: Tour["category"]): Tour[] {
  return tours.filter((t) => t.category === category);
}
