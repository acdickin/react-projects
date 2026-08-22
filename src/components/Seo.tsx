import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const defaultTitle = 'Andrew Cosmic | Frontend & Full Stack Engineer'
const defaultDescription =
  'Andrew Cosmic builds modern web apps with React, TypeScript, Java, AWS, and PostgreSQL in Kent, Washington.'

const routeMeta: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  '/': {
    title: 'Andrew Cosmic | Frontend & Full Stack Engineer',
    description: defaultDescription,
    keywords:
      'Andrew Cosmic, frontend engineer, full stack engineer, React developer, Kent Washington',
  },
  '/synonyms': {
    title: 'Synonym Search App | Andrew Cosmic',
    description:
      'Search for synonyms quickly with a lightweight React app built by Andrew Cosmic.',
    keywords: 'synonym search, React app, Andrew Cosmic',
  },
  '/memory-game': {
    title: 'Memory Game | Andrew Cosmic',
    description:
      'Play a polished memory matching game built in React by Andrew Cosmic.',
    keywords: 'memory game, React game, Andrew Cosmic',
  },
  '/todo': {
    title: 'Todo App | Andrew Cosmic',
    description:
      'A simple todo app experience built with React and TypeScript by Andrew Cosmic.',
    keywords: 'todo app, React todo, Andrew Cosmic',
  },
  '/color-guesser': {
    title: 'Color Guesser Game | Andrew Cosmic',
    description:
      'Guess the color values in this interactive React color game by Andrew Cosmic.',
    keywords: 'color guesser, React game, Andrew Cosmic',
  },
}

const setMetaTag = (
  tagName: string,
  attributes: Record<string, string>,
  value?: string
) => {
  let tag = document.querySelector(
    `${tagName}[${Object.keys(attributes)[0]}="${Object.values(attributes)[0]}"]`
  )

  if (!tag) {
    tag = document.createElement(tagName)
    Object.entries(attributes).forEach(([key, attrValue]) => {
      tag?.setAttribute(key, attrValue)
    })
    document.head.appendChild(tag)
  }

  if (value !== undefined) {
    tag.setAttribute('content', value)
  }
}

const Seo = () => {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    const route = routeMeta[pathname] || {
      title: defaultTitle,
      description: defaultDescription,
      keywords:
        'Andrew Cosmic, frontend engineer, full stack engineer, React developer, Kent Washington',
    }
    const origin = window.location.origin
    const canonicalUrl = `${origin}${pathname}`

    document.title = route.title

    setMetaTag('meta', { name: 'description' }, route.description)
    setMetaTag('meta', { name: 'keywords' }, route.keywords)
    setMetaTag(
      'meta',
      { name: 'robots' },
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    )
    setMetaTag('meta', { name: 'author' }, 'Andrew Cosmic')
    setMetaTag('meta', { name: 'geo.region' }, 'US-WA')
    setMetaTag('meta', { name: 'geo.placename' }, 'Kent, Washington, USA')
    setMetaTag('meta', { name: 'geo.position' }, '47.3809;-122.2348')
    setMetaTag('meta', { name: 'ICBM' }, '47.3809, -122.2348')

    setMetaTag('meta', { property: 'og:title' }, route.title)
    setMetaTag('meta', { property: 'og:description' }, route.description)
    setMetaTag('meta', { property: 'og:type' }, 'website')
    setMetaTag('meta', { property: 'og:url' }, canonicalUrl)
    setMetaTag('meta', { property: 'og:locale' }, 'en_US')
    setMetaTag('meta', { name: 'twitter:card' }, 'summary_large_image')
    setMetaTag('meta', { name: 'twitter:title' }, route.title)
    setMetaTag('meta', { name: 'twitter:description' }, route.description)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)
  }, [location.pathname])

  return null
}

export default Seo
