interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform (Amazon, eBay)',
    description: `A comprehensive system design breakdown of an E-Commerce Platform — covering event-driven architecture, microservices, data modeling, API design, and complete flow diagrams for product browsing, cart management, and checkout.`,
    imgSrc: '/static/images/ecommerce-system-design/ecommerce-hero.png',
    href: '/blog/ecommerce-platform-system-design',
  },
]

export default projectsData
