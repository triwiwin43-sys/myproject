// SEO and Meta Tags utility
import { APP_CONFIG } from '../config/constants';

export const updateMetaTags = (pageData = {}) => {
  const {
    title = 'Inter Medi-A E-Commerce',
    description = 'Platform e-commerce terpercaya untuk printer, komputer, dan peralatan kantor',
    keywords = 'printer, komputer, peralatan kantor, e-commerce, jakarta',
    image = '/og-image.jpg',
    url = window.location.href,
    type = 'website'
  } = pageData;

  // Update document title
  document.title = title;

  // Helper function to update or create meta tag
  const updateMetaTag = (property, content, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let tag = document.querySelector(`meta[${attribute}="${property}"]`);
    
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attribute, property);
      document.head.appendChild(tag);
    }
    
    tag.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('author', 'Inter Medi-A');
  updateMetaTag('robots', 'index, follow');
  updateMetaTag('language', 'Indonesian');
  updateMetaTag('revisit-after', '7 days');

  // Open Graph tags
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:image', image, true);
  updateMetaTag('og:url', url, true);
  updateMetaTag('og:type', type, true);
  updateMetaTag('og:site_name', 'Inter Medi-A E-Commerce', true);
  updateMetaTag('og:locale', 'id_ID', true);

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);

  // Additional SEO tags
  updateMetaTag('theme-color', '#1d4ed8');
  updateMetaTag('msapplication-TileColor', '#1d4ed8');
  updateMetaTag('apple-mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
  updateMetaTag('apple-mobile-web-app-title', 'Inter Medi-A');
};

// Structured data for SEO
export const addStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inter Medi-A",
  "description": "Platform e-commerce terpercaya untuk printer, komputer, dan peralatan kantor",
  "url": "https://intermedia.com",
  "logo": "https://intermedia.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-21-1234-5678",
    "contactType": "customer service",
    "availableLanguage": "Indonesian"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalan Klingkit Dalam Blok C No. 22, RT 010/RW 011",
    "addressLocality": "Rawa Buaya, Cengkareng",
    "addressRegion": "Jakarta Barat",
    "postalCode": "11470",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://facebook.com/intermedia",
    "https://instagram.com/intermedia",
    "https://twitter.com/intermedia"
  ]
};

// Product structured data generator
export const generateProductStructuredData = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.images?.[0] || '/placeholder-product.jpg',
  "brand": {
    "@type": "Brand",
    "name": product.brand || "Inter Medi-A"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "IDR",
    "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Inter Medi-A"
    }
  },
  "aggregateRating": product.rating ? {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount || 0
  } : undefined
});

// Breadcrumb structured data generator
export const generateBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export default {
  updateMetaTags,
  addStructuredData,
  organizationStructuredData,
  generateProductStructuredData,
  generateBreadcrumbStructuredData
};
