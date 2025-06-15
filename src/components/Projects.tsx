import { useEffect, useRef, useState } from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  const projects = [
    {
      title: "Grandvoyage",
      description: "The perfect travel guide. Thanks to an application that can also be used offline, you can stay up to date with everything you should do at your destination.",
      technologies: ["Flutter", "Django","SQL", "MapBoxSDK"],
      image: "src/assets/GrandVoyage.png",
      github: "https://github.com/yourusername/grandvoyage",
      live: "https://grandvoyage.com",
      isPaidWork: true,
      playStore: "https://play.google.com/store/apps/details?id=com.grandvoyage.app",
      appStore: "https://apps.apple.com/app/grandvoyage/id123456789"
    },
    {
      title: "Streamly",
      description: "Streaming application that uses neural networks and SVD models to recommend movies, as well as an advanced search feature and chatbots trained with AI and NLP.",
      technologies: ["Flutter", "FastApi","Laravel", "TensorFlow", "Neural Networks", "NLP", "SQL", "Pandas"],
      image: "src/assets/streamly.jpg",
      github: "https://github.com/Miguelstucom/streamly",
      live: "https://aitaskmanager.com"
    },
    {
      title: "SmartMarket",
      description: "Web Marketplace using Recommendations models as SVD and MBA, with a recommendation system based on the user's purchase history.",
      technologies: ["Django", "SQL", "Pandas", "SVM", "MBA"],
      image: "src/assets/smartmarket.png",
      github: "https://github.com/Miguelstucom/Instacartp4",
      live: "https://aitaskmanager.com"
    },
    {
      title: "HealthAI",
      description: "Application with AI that analyzes CSV data and images using XGBoost and neural networks.",
      technologies: ["Django","SQL", "Pandas", "XGBoost", "TensorFlow"],
      image: "src/assets/cancer.png",
      github: "https://github.com/Miguelstucom/canceranalisis",
      live: "https://aitaskmanager.com"
    },
    {
      title: "FoodieGuard",
      description: "A mobile application designed to book tables at various restaurants, with a unique feature: it constantly takes customers' allergies into account.",
      technologies: ["Kotlin", "Spring Boot", "SQL"],
      image: "src/assets/FoodieGuard.png",
      github: "https://github.com/SJRobayo/FoodieGuard",
      live: "https://aitaskmanager.com"
    },
    {
      title: "IADelivery",
      description:  "A web application built using different algorithms, such as Dijkstra, to optimize product distribution across the capitals of the Iberian Peninsula, considering storage and expiration dates.",
      technologies: ["Django", "SQL", "Pandas", "Dijkstra"],
      image: "src/assets/IADelivery.png",
      github: "https://github.com/Miguelstucom/Route_Generator",
      live: "https://aitaskmanager.com"
    },
    {
      title: "WeatherAI",
      description: "A weather prediction system on a web page that uses an SVM model to determine future weather based on stored variables.",
      technologies: ["Django", "SVM", "Pandas"],
      image: "src/assets/image.png",
      github: "https://github.com/albertoma95/Proyecto3/tree/main",
      live: "https://aitaskmanager.com"
    },
    {
      title: "Worxinn",
      description: "A mobile application for booking coworking spaces, currently available only in Ireland.",
      technologies: ["Flutter", "Django", "Google Maps API", "SQL", "Firebase",],
      image: "src/assets/Worxinn.png",
      github: "https://github.com/yourusername/cork-guide",
      live: "https://corkguide.com"
    },
  ]

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Get all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort()

  const toggleTechnology = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  // Filter projects based on selected technologies
  const filteredProjects = selectedTechs.length === 0
    ? projects
    : projects.filter(project => 
        selectedTechs.every(tech => project.technologies.includes(tech))
      )

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Personal Projects & Professional Work</h2>
        
        {/* Technology Filter */}
        <div className="tech-filter">
          <div className="tech-filter-container">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                className={`tech-filter-btn ${selectedTechs.includes(tech) ? 'active' : ''}`}
                onClick={() => toggleTechnology(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={project.title === 'WeatherAI' || project.title === 'SmartMarket' ? 'project-img-wide' : ''}
                />
              </div>
              <div className="project-links project-links-below-image">
                {project.title === 'Grandvoyage' ? (
                  <>
                    <a href="https://play.google.com/store/apps/details?id=com.grandvoyage.grandvoyage&hl=en" target="_blank" rel="noopener noreferrer" className="btn">
                      Play Store
                    </a>
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="btn">
                      App Store
                    </a>
                  </>
                ) : project.title !== 'Worxinn' && (
                  <a href="https://apps.apple.com/es/app/grandvoyage/id1579028108" target="_blank" rel="noopener noreferrer" className="btn">
                    GitHub
                  </a>
                )}
              </div>
              <div className="project-content">
                <h3>
                  {project.title}
                  {project.isPaidWork && (
                    <span className="paid-work-badge">Paid Work</span>
                  )}
                </h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 