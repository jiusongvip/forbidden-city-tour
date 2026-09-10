// Schema.org structured data helpers for Forbidden City Tours
import type { Tour } from "../data/tours";

const SITE_URL = "https://www.forbidden-city-tour.com";
const SITE_NAME = "Forbidden City Tours";
const LAST_REVIEWED = "2026-09-10";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Independent editorial guide to Forbidden City tours, tickets, and visitor tips in Beijing.",
    email: "hello@forbidden-city-tour.com",
    logo: `${SITE_URL}/favicon.svg`,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

function toAbsoluteURL(path: string): string {
  if (path.startsWith("http")) return path;
  if (path === "/") return SITE_URL;
  if (path.includes("#")) return `${SITE_URL}${path}`;
  return `${SITE_URL}${path.endsWith("/") ? path : path + "/"}`;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Expert guides to the best Forbidden City tours, tickets, and visitor tips in Beijing.",
    dateModified: LAST_REVIEWED,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function touristAttractionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Forbidden City (Palace Museum)",
    alternateName: "故宫博物院",
    description: "The world's largest imperial palace complex with 980 buildings across 72 hectares. UNESCO World Heritage Site housing over 1.8 million artifacts.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Jingshan Front Street, Dongcheng District",
      addressLocality: "Beijing",
      addressCountry: "CN",
      postalCode: "100009",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9163,
      longitude: 116.3972,
    },
    openingHours: "Tu-Su 08:30-17:00",
    publicAccess: true,
    touristType: ["History buffs", "Architecture lovers", "Cultural tourists", "Photography enthusiasts"],
    sameAs: [
      "https://en.wikipedia.org/wiki/Forbidden_City",
      "https://zh.wikipedia.org/wiki/%E6%95%85%E5%AE%AB",
      "https://www.wikidata.org/wiki/Q80290",
    ],
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: toAbsoluteURL(item.url),
    })),
  };
}

export function itemListSchema(tours: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tours.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: t.name,
        url: toAbsoluteURL(t.url),
      },
    })),
  };
}

export function howToSchema(name: string, steps: Array<{ name: string; text: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function faqPageSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    dateModified: LAST_REVIEWED,
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function tourSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    url: `${SITE_URL}/tours/${tour.slug}/`,
    image: `${SITE_URL}${tour.image}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: tour.priceFrom,
      url: tour.bookURL,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviewCount,
      bestRating: 5,
    },
    review: tour.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      datePublished: r.date,
      reviewBody: r.text,
    })),
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
  };
}

export function articleSchema(title: string, description: string, datePublished: string, dateModified: string = LAST_REVIEWED) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: "hello@forbidden-city-tour.com",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}