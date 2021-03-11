import about from '../content/data/about.json'

const baseURL = process.env.NUXT_ENV_BASE_URL
const siteName = process.env.NUXT_ENV_SITE_NAME
const siteTitle = process.env.NUXT_ENV_SITE_TITLE
const siteImage = process.env.NUXT_ENV_SITE_IMAGE

const personalInfo = about.filter((obj) => obj.slug === 'personal-info')[0] || null
const socialLinks = []
if (personalInfo && personalInfo.social && personalInfo.social.length) {
  personalInfo.social.forEach((s) => socialLinks.push(s.url))
}

const schema_person = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  'name': personalInfo.name || null,
  'url': personalInfo.website || null,
  'image': personalInfo.avatar || null,
  'sameAs': socialLinks || null,
  'jobTitle': personalInfo.title || null,
  'worksFor': {
    '@type': 'Organization',
    'name': personalInfo.company || null,
  },
}

export default (pageData) => {
  const { type, title, description, url, image, published, modified } = pageData

  const webpage = {
    '@context': 'https://schema.org/',
    '@type': 'WebPage',
    'name': title || null,
    'headline': title || null,
    'description': description || null,
    'url': url || null,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url || null,
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': image ? baseURL + image : null,
    },
    'image': {
      '@type': 'ImageObject',
      'url': image ? baseURL + image : null,
    },
    'author': schema_person || null,
    'publisher': {
      '@type': 'Organization',
      'name': siteName || null,
      'url': baseURL || null,
      'logo': {
        '@type': 'ImageObject',
        'url': siteImage || null,
      },
    },
    'datePublished': published || null,
    'dateModified': modified || null,
    'lastReviewed': modified || null,
    'copyrightHolder': schema_person || null,
    'copyrightYear': new Date(published).getFullYear() || new Date(modified).getFullYear() || new Date().getFullYear(),
  }

  let structuredData = []

  if (type === 'homepage') {
    // Webpage
    structuredData.push(webpage)

    structuredData.push({
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      'name': title || null,
      'description': description || null,
      'url': url || null,
      'image': {
        '@type': 'ImageObject',
        'url': image ? baseURL + image : null,
      },
      '@id': url || null,
    })
  } else if (type === 'changelog') {
    // Webpage
    structuredData.push(webpage)

    // Breadcrumbs
    structuredData.push({
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': baseURL || null,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': title || 'Changelog',
          // 'item': url || null,
        },
      ],
    })
  }

  if (!structuredData.length) {
    return {
      hid: 'structured-data',
      type: 'application/ld+json',
    }
  }

  return {
    hid: 'structured-data',
    type: 'application/ld+json',
    json: structuredData,
  }
}
