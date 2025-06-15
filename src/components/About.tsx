import { useEffect, useRef } from 'react'
import '../styles/About.css'

const education = [
  {
    date: 'SEP 2022 - MAY 2024',
    title: 'Crossplatform App Development',
    details: [
      'Creation of desktop, web, and mobile applications',
      'Development of APIs with relational and non-relational databases',
      'Use of version control such as Github',
    ],
  },
  {
    date: 'OCT 2024 - MAY 2025',
    title: 'Master in Artificial Intelligence & Big Data',
    details: [
      'Learning different AI models and their implementation in real projects',
      'Creating web apps for using models like Dijkstra, SVM, XG Boost',
      'Deepening knowledge in programming languages like Python and R',
    ],
  },
]

const experience = [
  {
    date: 'MAY 2023 - SEPT 2023',
    title: 'Mobile App Developer Internship',
    details: [
      'Development in Node.js and use of Firebase',
      'Frontend design of the webpage',
      'Production release to Play Store and App Store Console',
    ],
  },
  {
    date: 'SEP 2023 - Present',
    title: 'Mobile App Developer',
    details: [
      'Leading the development of the company Mobile App from scratch',
      'Research and development of useful APIs/SDKs (Mapbox, etc.)',
      'Deployment to production and use of Google Play Console and App Store Console',
    ],
  },
]

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Who I Am</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p className="fade-in">
              I'm a passionate Mobile Developer with over 2 years of experience in mobile development
              and a proven track record in project leadership. My expertise lies in creating
              high-quality mobile applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="about-timeline-grid">
            {/* Education */}
            <div className="timeline-column">
              <h2 className="timeline-title">Education</h2>
              <div className="timeline-vertical">
                {education.map((item, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    <div className="timeline-card timeline-card-bordered">
                      <div className="timeline-date">{item.date}</div>
                      <div className="timeline-card-title">{item.title}</div>
                      <ul className="timeline-details">
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Experience */}
            <div className="timeline-column">
              <h2 className="timeline-title">Experience</h2>
              <div className="timeline-vertical">
                {experience.map((item, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    <div className="timeline-card timeline-card-bordered">
                      <div className="timeline-date">{item.date}</div>
                      <div className="timeline-card-title">{item.title}</div>
                      <ul className="timeline-details">
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 