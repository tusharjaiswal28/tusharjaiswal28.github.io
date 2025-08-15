import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div data-reveal="fade-right">
        <h1>
          Hi, I'm <span className="accent" style={{color:'var(--primary-color)'}}>Tushar Jaiswal</span>
        </h1>

        {/* Typewriter Effect Starts Here */}
        <div style={{ fontSize: '2rem', marginTop: '8px', minHeight: '40px' }}>
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 30,
              loop: true,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString('I am <strong>Full Stack Developer</strong>')
                .pauseFor(1000)
                .deleteChars(25)
                .typeString('I build things for <strong>Front-End</strong>')
                .pauseFor(300)
                .deleteChars(9)
                .typeString('<strong>Back-End</strong>')
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        {/* Typewriter Effect Ends Here */}

        <p style={{maxWidth:'60ch'}}>
          As a Full Stack Developer, I build robust web applications from concept to deployment. My passion lies in creating seamless user experiences while ensuring performance and maintainability behind the scenes.
        </p>

        <div style={{marginTop: '16px'}}>
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" style={{marginLeft: '10px'}} href="/Tushar-Jaiswal-Resume.pdf" download>Download Resume</a>
        </div>
      </div>

      <div data-reveal="fade-left" style={{display:'flex', justifyContent:'center'}}>
        <img src="/profile.jpg" alt="Tushar Jaiswal" />
      </div>
    </section>
  );
}
