import '../styles/Skills.css'
import { SiFlutter, SiDart, SiDjango, SiPython, SiSpring, SiKotlin, SiMysql, SiHtml5, SiCss3, SiPostman, SiFirebase } from 'react-icons/si'
import { DiFirebase, DiJava } from 'react-icons/di'

const skills = [
  { name: 'Flutter', color: '#02569B', icon: <SiFlutter />, url: 'https://flutter.dev' },
  { name: 'Dart', color: '#0175C2', icon: <SiDart />, url: 'https://dart.dev' },
  { name: 'Django', color: '#092E20', icon: <SiDjango />, url: 'https://www.djangoproject.com' },
  { name: 'Python', color: '#3776AB', icon: <SiPython />, url: 'https://www.python.org' },
  { name: 'Spring', color: '#6DB33F', icon: <SiSpring />, url: 'https://spring.io' },
  { name: 'Kotlin', color: '#7F52FF', icon: <SiKotlin />, url: 'https://kotlinlang.org' },
  { name: 'Java', color: '#007396', icon: <DiJava />, url: 'https://www.java.com' },
  { name: 'SQL', color: '#4479A1', icon: <SiMysql />, url: 'https://www.mysql.com' },
  { name: 'CSS', color: '#1572B6', icon: <SiFirebase />, url: 'https://firebase.google.com/?hl=es-419' },
  { name: 'HTML', color: '#E34F26', icon: <SiPostman />, url: 'https://www.postman.com/' },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-scroll-container">
          <div className="skills-scroll">
            {skills.map((skill, idx) => (
              <a 
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-icon-card"
                key={idx}
                title={skill.name}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 