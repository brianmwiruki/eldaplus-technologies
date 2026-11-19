import React from "react";
import { COMPANY_INFO, SERVICES } from "@/data/company";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.wordmark,
    legalName: COMPANY_INFO.name,
    identifier: COMPANY_INFO.registrationNumber,
    description: COMPANY_INFO.aboutSummary,
    url: "https://eldaplus.co.ke",
    foundingDate: "2026-11-09",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.city,
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: COMPANY_INFO.contact.email,
      telephone: COMPANY_INFO.contact.phone,
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Solutions & Consultancy Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDesc,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
