import Script from "next/script";

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ services }: { services: { name: string; description: string; image?: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Moving Services",
    "provider": {
      "@type": "MovingCompany",
      "name": "Rent-A-Hand Moving",
      "image": "https://rentahandwindsor.ca/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Windsor",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
      "telephone": "+1-519-555-0198",
    },
    "areaServed": {
      "@type": "City",
      "name": "Windsor",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Moving Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          ...(service.image && { "image": service.image })
        },
        "position": index + 1
      }))
    }
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
