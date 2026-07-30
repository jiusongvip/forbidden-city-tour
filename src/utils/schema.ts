// Schema.org structured data helpers for Forbidden City Tours
const SITE_URL = "https://forbidden-city-tour.com";
const SITE_NAME = "Forbidden City Tours";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Expert guides to the best Forbidden City tours, tickets, and visitor tips in Beijing.",
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
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
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
        url: `${SITE_URL}${t.url}`,
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

export function articleSchema(title: string, description: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}