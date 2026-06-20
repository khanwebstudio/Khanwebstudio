const services = [
  {
    icon: '01',
    title: 'Landing Page Strategy',
    description:
      'Clear section planning, offer positioning, CTA flow, and page structure before design starts.',
  },
  {
    icon: '02',
    title: 'Custom UI Design',
    description:
      'Modern, brand-aligned interface design for SaaS, service businesses, products, and creators.',
  },
  {
    icon: '03',
    title: 'React Development',
    description:
      'Clean, responsive React implementation with reusable components and maintainable styling.',
  },
  {
    icon: '04',
    title: 'SEO Foundation',
    description:
      'Page titles, descriptions, semantic headings, Open Graph tags, sitemap, robots file, and copy structure.',
  },
  {
    icon: '05',
    title: 'Speed & Accessibility',
    description:
      'Fast-loading layout, keyboard-friendly controls, visible focus states, and mobile-first QA.',
  },
  {
    icon: '06',
    title: 'Launch Support',
    description:
      'Final review, deployment guidance, contact-form setup recommendations, and post-launch fixes.',
  },
]

const packages = [
  {
    name: 'Starter',
    detail: 'One focused landing page for a simple offer or MVP.',
  },
  {
    name: 'Growth',
    detail: 'A stronger sales page with extra sections, trust signals, and SEO setup.',
  },
  {
    name: 'Premium',
    detail: 'Full landing page experience with polish, launch guidance, and optimization review.',
  },
]

function Service() {
  return (
    <section className="page section">
      <div className="container">
        <span className="section-label">Service</span>
        <h1 className="section-title">Landing Page Services for Online Clients</h1>
        <p className="section-desc">
          I help Fiverr and Upwork clients turn an offer into a clear, fast,
          responsive page that explains the value, builds trust, and guides
          visitors toward action.
        </p>

        <div className="service-grid">
          {services.map(({ icon, title, description }) => (
            <article key={title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {icon}
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="package-section" aria-label="Service package examples">
          {packages.map(({ name, detail }) => (
            <article key={name} className="package-card">
              <h2>{name}</h2>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
