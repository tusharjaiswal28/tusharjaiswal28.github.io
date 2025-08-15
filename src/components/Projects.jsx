export default function Projects() {
  const projects = [
    {
      title: 'CollabNest - Community Collaboration Platform',
      desc: 'Interactive platform enabling users to post ideas and request assistance. Includes like/dislike and responsive UI.',
      tech: [
        { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
        { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
        { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
      ],
      github: 'https://github.com/hrishi2108/code_crafters.git',
      live: 'https://peppy-parfait-010778.netlify.app/',
      image: 'projects/collabnest.png'
    },
    {
      title: 'SmartInventory – Inventory Management System',
      desc: 'SmartInventory is a React and Firebase-based system that streamlines inventory management by tracking stock levels, sending alerts for low or expiring items, and generating detailed reports for efficient decision-making.',
      tech: [
        { name: 'React', img: 'https://img.icons8.com/office/512/react.png' },
        { name: 'Firebase', img: 'https://images.seeklogo.com/logo-png/61/1/firebase-icon-logo-png_seeklogo-615938.png' }
      ],
      github: 'https://github.com/tusharjaiswal28/SmartInventory.git',
      live: 'https://classy-piroshki-675c9b.netlify.app/',
      image: '/projects/smartinventory.png'
    },
    {
      title: '8 Puzzle Game — Full Stack Web App',
      desc: 'Tile sliding puzzle with authentication, scoreboard, and protected routes.',
      tech: [
        { name: 'React', img: 'https://img.icons8.com/office/512/react.png' },
        { name: 'Node.js', img: 'https://img.icons8.com/fluency/512/node-js.png' },
        { name: 'Express', img: 'https://img.icons8.com/fluency/512/express-js.png' },
        { name: 'MongoDB', img: 'https://img.icons8.com/color/512/mongodb.png' },
        
      ],
      github: 'https://github.com/tusharjaiswal28/puzzle.git',
      live: 'https://magnificent-marigold-2b20d2.netlify.app/',
      image: '/projects/8puzzle.png'
    },
    {
      title: 'Anti-Resume Job Platform',
      desc: 'A hiring platform that replaces traditional resumes with skill-based challenges and ensuring fair, bias-free recruitment. Features blind initial screening, transparent salary data, and post-hire feedback to continuously improve matches.',
      tech: [
        { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
        { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
        { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
      ],
      github: 'https://github.com/tusharjaiswal28/FT-FT-SD-40-Team-83-67f7f221',
      live: 'https://profound-pastelito-045f53.netlify.app/',
      image: '/projects/Anti-Resume.png'
    }
  ];

  return (
    <section id="projects" className="container" data-reveal="fade-up">
      <h2 className="section-title">Featured Projects</h2>
      {projects.map((p, index) => (
        <div
          key={p.title}
          className="project-row"
          style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
          data-reveal="fade-up"
        >
          {/* Image */}
          <div style={{ flex: '1 1 45%' }}>
            <img
              src={p.image}
              alt={p.title}
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* Description */}
          <div style={{ flex: '1 1 45%' }}>
            <h3>{p.title}</h3>
            <div style={{ display: 'flex', gap: '8px', margin: '8px 0' }}>
              {p.tech.map((t) => (
                <img
                  key={t.name}
                  src={t.img}
                  alt={t.name}
                  title={t.name}
                  style={{ width: '35px', height: '35px' }}
                />
              ))}
            </div>
            <p>{p.desc}</p>
            <div style={{ marginTop: '12px' }}>
              <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Check it out!</a>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer" style={{ marginLeft: '8px' }}>GitHub Link</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
