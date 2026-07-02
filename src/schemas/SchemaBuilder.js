// Utility to build structured JSON-LD Schemas dynamically for Google SEO / GEO crawlers
export const SchemaBuilder = {
  // 1. Organization Schema
  getOrganizationSchema: () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'DentaLand Dental Clinic',
      'alternateName': 'DentaLand',
      'url': 'https://dentaland.in',
      'logo': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=150',
      'sameAs': [
        'https://facebook.com/dentalandpune',
        'https://instagram.com/dentalandpune',
        'https://youtube.com/@dentalandpune',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9000000001',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi', 'mr'],
      },
    };
  },

  // 2. Dentist / MedicalBusiness Schema (Branch Specific)
  getDentistSchema: (branch) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      'name': branch.name,
      'image': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'url': `https://dentaland.in/branches/${branch.id}`,
      'telephone': `+91-${branch.phone}`,
      'priceRange': '$$',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': branch.id === 'pimpri' ? '142' : branch.id === 'kalewadi' ? '98' : branch.id === 'chikhali' ? '114' : '86',
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': branch.address.split(',')[0] + ', ' + branch.landmark,
        'addressLocality': branch.shortName,
        'addressRegion': 'Maharashtra',
        'postalCode': branch.address.match(/\b\d{6}\b/)?.[0] || '411027',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': branch.id === 'pimpri' ? 18.6264906 : 18.5999086,
        'longitude': branch.id === 'pimpri' ? 73.8166099 : 73.7844053,
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:00',
          'closes': '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': branch.timingsRaw.sundayCloseHour > 0 ? '09:00' : '00:00',
          'closes': branch.timingsRaw.sundayCloseHour > 0 ? '13:00' : '00:00',
        },
      ],
    };
  },

  // 3. FAQ Schema
  getFAQSchema: (faqs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };
  },

  // 4. Breadcrumb Schema
  getBreadcrumbSchema: (crumbs = []) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': crumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': crumb.url,
      })),
    };
  },
};

export default SchemaBuilder;
