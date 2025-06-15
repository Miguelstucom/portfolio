import { useState, useEffect, useRef } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content" ref={contactRef}>
          <div className="contact-info">
            <h3 className="fade-in">Let's Connect</h3>
            <p className="fade-in">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="social-links">
              <a href="mailto:miguel.stucom@gmail.com" className="social-link fade-in">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
              <a href="https://github.com/Miguelstucom" target="_blank" rel="noopener noreferrer" className="social-link fade-in">
                <i className="fab fa-github"></i>
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-v%C3%A1zquez-7b6260185/" target="_blank" rel="noopener noreferrer" className="social-link fade-in">
                <i className="fab fa-linkedin"></i>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 