export const footerSchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soća Servis AD",
  url: "https://www.soca.rs",
  logo: "https://www.soca.rs/images/logo_soca.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+381 21 444 147",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["Serbian"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+381 21 6339 731",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["Serbian"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+381 63 444 085",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["Serbian"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Đorđa Zličića 9",
    addressLocality: "Novi Sad",
    postalCode: "21000",
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export const headerSchemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soća Servis AD",
  url: "https://www.soca.rs",
  logo: "https://www.soca.rs/images/logo_soca.png",
  sameAs: ["https://www.facebook.com/servissoca"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+381 21 444 147",
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: ["Serbian"],
    },
  ],
};
