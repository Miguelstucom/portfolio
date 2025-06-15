import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../styles/Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          {/* Social Vertical Icons */}
          <div className="social-vertical">
            <a href="https://github.com/Miguelstucom" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-v%C3%A1zquez-7b6260185/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:miguel.stucom@gmail.com" className="social-icon" aria-label="Email"><FaEnvelope /></a>
            <div className="social-divider"></div>
            <span className="follow-me">Follow Me</span>
          </div>

          {/* Center Content */}
          <div className="hero-text">
            <h1 className="fade-in">Hi, I'm <span className="highlight">Miguel Angel</span></h1>
            <h2 className="fade-in">Mobile Developer</h2>
            <p className="fade-in">
              I create high-quality mobile applications with a focus on user experience
              and modern design principles.
            </p>
            <div className="hero-buttons fade-in">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-image">
            <img src="assets/perfil.png" alt="Your Name" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 