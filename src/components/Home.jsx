import { Link } from 'react-router-dom'

const trustStats = [
  { value: '20+', label: 'Projects Delivered', detail: 'Launch-ready pages for growing brands.' },
  { value: '100%', label: 'Responsive Design', detail: 'Built for mobile, tablet, and desktop.' },
  { value: '90+', label: 'Lighthouse Performance', detail: 'Fast experiences that keep visitors moving.' },
  { value: 'Fast', label: 'Delivery', detail: 'Clear timelines without unnecessary process.' },
  { value: 'Direct', label: 'Communication', detail: 'Work directly with the person building your site.' },
]

const problems = [
  {
    title: 'Slow Performance',
    text: 'Visitors leave before they understand your offer when pages feel heavy or delayed.',
  },
  {
    title: 'Outdated Design',
    text: 'A weak first impression can make a solid business feel less trustworthy.',
  },
  {
    title: 'Confusing User Experience',
    text: 'If visitors have to guess what to do next, most of them will do nothing.',
  },
  {
    title: 'Weak Conversion Strategy',
    text: 'Pretty sections are not enough without a clear path from interest to action.',
  },
]

const solutions = [
  { title: 'Build Trust at First Sight', label: 'First Impression' },
  { title: 'Turn More Visitors Into Customers', label: 'Conversion' },
  { title: 'Stand Out From Competitors', label: 'Differentiation' },
  { title: 'Fast Enough to Keep Visitors Engaged', label: 'Speed' },
  { title: 'Look Professional on Every Device', label: 'Responsive Design' },
  { title: 'Ready to Grow With Your Business', label: 'Scalability' },
]

const projects = [
  {
    type: 'Service Business',
    goal: 'Turn local visitors into qualified booking requests.',
    solution: 'Clear offer hierarchy, trust blocks, and a frictionless inquiry path.',
    final: 'A fast landing page that explains value before asking for action.',
  },
  {
    type: 'SaaS Launch',
    goal: 'Collect more waitlist signups before product release.',
    solution: 'Benefit-led messaging, product preview cards, and FAQ objections.',
    final: 'A premium launch page built around clarity and momentum.',
  },
  {
    type: 'Digital Product',
    goal: 'Help visitors understand the outcome before they buy.',
    solution: 'Offer framing, proof points, pricing emphasis, and focused CTAs.',
    final: 'A sales page designed to move buyers from curiosity to confidence.',
  },
]

const reasons = [
  {
    title: 'Strategy First',
    text: 'We learn about your business before designing anything.',
  },
  {
    title: 'Built for Conversion',
    text: 'Every page is designed to guide visitors toward taking action.',
  },
  {
    title: 'Performance Matters',
    text: 'Fast loading, SEO-ready, and optimized for every device.',
  },
  {
    title: 'Direct Communication',
    text: 'Work directly with the developer from start to finish.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'Learn about your business, goals, audience, competitors, and the action you want visitors to take.',
  },
  {
    step: '02',
    title: 'Design & Develop',
    text: 'Create a premium landing page focused on user experience, speed, and conversion.',
  },
  {
    step: '03',
    title: 'Launch & Grow',
    text: 'Deploy the website, verify the experience, and provide support if needed.',
  },
]

const testimonials = [
  {
    name: 'Replace with client name',
    role: 'Founder, Service Business',
    quote:
      'Khan Studio helped us explain our offer clearly and gave customers a much easier way to contact us.',
  },
  {
    name: 'Replace with client name',
    role: 'SaaS Operator',
    quote:
      'The landing page felt premium, loaded quickly, and made our product easier to understand.',
  },
  {
    name: 'Replace with client name',
    role: 'Creator',
    quote:
      'The process was direct, organized, and focused on what my customers needed to see before buying.',
  },
]

const packages = [
  {
    name: 'Launch',
    description: 'Perfect for startups and personal brands.',
    items: ['Single landing page', 'Responsive build', 'Core SEO setup'],
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses.',
    items: ['Conversion-focused structure', 'Premium visual polish', 'Form and launch support'],
    featured: true,
  },
  {
    name: 'Scale',
    description: 'Premium solution for established companies.',
    items: ['Advanced page system', 'Stronger trust sections', 'Optimization review'],
  },
]

const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'Most focused landing pages take a few days to a couple of weeks depending on scope, content readiness, and revisions.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Yes. Existing pages can be redesigned around clearer messaging, stronger layout, better speed, and improved conversion flow.',
  },
  {
    question: 'Do you provide SEO?',
    answer:
      'Every build includes SEO basics such as semantic structure, metadata, responsive layout, and fast-loading implementation.',
  },
  {
    question: 'Can I update the website myself?',
    answer:
      'Yes. The code is kept clean and maintainable, and the best update workflow can be discussed before launch.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Support can be arranged for content updates, small improvements, bug fixes, and post-launch adjustments.',
  },
]

function SectionIntro({ label, title, description, centered = false }) {
  return (
    <div className={`home-section-intro${centered ? ' centered' : ''}`}>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy reveal">
            <div className="home-badge">
              <span className="home-badge-dot" />
              Premium landing pages for growing businesses
            </div>

            <h1>Your Website Should Turn Visitors Into Clients.</h1>

            <p>
              We design and develop fast, modern, conversion-focused landing
              pages that help your business build trust, generate more leads,
              and grow with confidence.
            </p>

            <div className="home-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get a Free Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-large">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="home-premium-visual reveal" aria-label="Website preview mockup">
            <div className="mockup-browser">
              <div className="mockup-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-hero-line" />
              <div className="mockup-copy-line short" />
              <div className="mockup-copy-line" />
              <div className="mockup-grid">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="mockup-phone">
              <div />
              <span />
              <span />
            </div>
            <div className="floating-card floating-card-top">
              <strong>90+</strong>
              <span>Performance</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <strong>More Leads</strong>
              <span>Clear CTA flow</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Trust"
            title="Trusted by Businesses That Want to Grow"
            description="Every project is built to create a strong first impression and help your business convert more visitors into customers."
            centered
          />
          <div className="trust-grid">
            {trustStats.map(({ value, label, detail }) => (
              <article key={label} className="metric-card">
                <div className="metric-icon" aria-hidden="true">
                  {value.slice(0, 2)}
                </div>
                <strong>{value}</strong>
                <span>{label}</span>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container two-column-section">
          <SectionIntro
            label="Problem"
            title="Why Most Business Websites Fail"
            description="Many websites look attractive, but they fail to generate customers. Slow loading, poor messaging, confusing layouts, and weak calls-to-action quietly cost businesses valuable opportunities every day."
          />
          <div className="problem-grid">
            {problems.map(({ title, text }, index) => (
              <article key={title} className="insight-card">
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="What You Get"
            title="How This Landing Page Helps Your Business"
            description="A clear path from a stronger first impression to more meaningful inquiries—built to help your business grow with confidence."
            centered
          />
          <div className="benefit-flow">
            {solutions.map(({ title, label }, index) => (
              <article key={title} className="solution-card">
                <span className="solution-number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <small>{label}</small>
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="benefit-cta">
            <p>Ready for a website that earns trust and turns interest into action?</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Projects"
            title="Selected Projects"
            description="Every project is designed with a business goal, not just visual appeal."
            centered
          />
          <div className="featured-project-grid">
            {projects.map(({ type, goal, solution, final }) => (
              <article key={type} className="featured-project-card">
                <div className="project-screenshot">
                  <div className="project-window">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="project-preview-lines">
                    <strong>{type}</strong>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="project-card-body">
                  <h3>{type}</h3>
                  <p>
                    <strong>Business Goal</strong>
                    {goal}
                  </p>
                  <p>
                    <strong>Our Solution</strong>
                    {solution}
                  </p>
                  <p>
                    <strong>Final Website</strong>
                    {final}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Why Khan Studio"
            title="Why Businesses Choose Khan Studio"
            description="Your landing page should feel premium, load fast, and make the next step obvious."
            centered
          />
          <div className="reason-grid">
            {reasons.map(({ title, text }) => (
              <article key={title} className="reason-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Process"
            title="Simple Process. Clear Results."
            description="A focused workflow keeps the project moving and makes every decision easier."
            centered
          />
          <div className="process-row">
            {processSteps.map(({ step, title, text }) => (
              <article key={title} className="process-card">
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Testimonials"
            title="What Clients Say"
            description="Replace these placeholders with real client feedback as your proof grows."
            centered
          />
          <div className="testimonial-grid">
            {testimonials.map(({ name, role, quote }) => (
              <article key={role} className="testimonial-card">
                <p>{quote}</p>
                <div>
                  <span aria-hidden="true">{name.charAt(0)}</span>
                  <div>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container">
          <SectionIntro
            label="Pricing"
            title="Choose the Right Package"
            description="Start with the level of support your business needs now, then scale when you are ready."
            centered
          />
          <div className="pricing-grid">
            {packages.map(({ name, description, items, featured }) => (
              <article key={name} className={`pricing-card${featured ? ' featured' : ''}`}>
                {featured && <span className="pricing-badge">Most Popular</span>}
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className={featured ? 'btn btn-primary' : 'btn btn-outline'}>
                  Start With {name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band reveal">
        <div className="container faq-container">
          <SectionIntro
            label="FAQ"
            title="Questions Before We Start?"
            description="A few answers that help your business understand the project before booking a consultation."
          />
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="faq-item">
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta reveal">
        <div className="container">
          <div className="final-cta-panel">
            <span className="section-label">Start Today</span>
            <h2>Ready to Grow Your Business?</h2>
            <p>
              Let&apos;s build a landing page that helps your business stand
              out, earn trust, and convert more visitors into customers.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
