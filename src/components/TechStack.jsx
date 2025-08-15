export default function TechStack() {
  const skills = [
    { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
    { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
    { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
    { name: 'React', img: 'https://img.icons8.com/office/512/react.png' },
    { name: 'Node JS', img: 'https://img.icons8.com/fluency/512/node-js.png' },
    { name: 'Express JS', img: 'https://img.icons8.com/ios/512/express-js.png' },
    { name: 'MongoDB', img: 'https://img.icons8.com/color/512/mongodb.png' },
    { name: 'GitHub', img: 'https://img.icons8.com/glyph-neue/512/github.png' },
    {name: 'VS Code', img:'https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000'},
    {name:'Git', img: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'}
  ];

  return (
    <section id="skills" className="container" data-reveal="fade-up">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name} data-reveal="fade-up">
            <img src={s.img} alt={s.name} className="skill-icon" />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
