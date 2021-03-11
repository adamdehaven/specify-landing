const type = 'website'
const baseURL = process.env.NUXT_ENV_BASE_URL
const title = process.env.NUXT_ENV_SITE_NAME
const description = process.env.NUXT_ENV_SITE_TITLE
const image = process.env.NUXT_ENV_SITE_IMAGE

const getImageMimeType = (img) => {
  if (!img) {
    return null
  }
  const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i
  if (Array.isArray(img.match(regex)) && ['png', 'jpg', 'jpeg', 'gif'].some((ext) => img.match(regex)[1] === ext)) {
    return 'image/' + img.match(regex)[1]
  } else {
    return null
  }
}

export default (meta) => {
  return [
    // General
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'itemprop:name',
      itemprop: 'name',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'itemprop:description',
      itemprop: 'description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'itemprop:image',
      itemprop: 'image',
      content: meta && meta.image ? baseURL + meta.image : image,
    },
    // Open Graph
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || baseURL,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: meta && meta.image ? baseURL + meta.image : image,
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: (meta && meta.image && getImageMimeType(meta.image)) || getImageMimeType(image),
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: (meta && meta.image && meta.title) || title,
    },
    // Twitter
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || baseURL,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: meta && meta.image ? baseURL + meta.image : image,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: (meta && meta.title) || title,
    },
  ]
}
