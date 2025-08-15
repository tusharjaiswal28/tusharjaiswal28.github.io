export default function GithubStats({ username = 'tusharjaiswal28' }) {
  return (
    <section className="container" data-reveal="fade-up">
      <h2 className="section-title">GitHub Statistics & Calendar</h2>
      <div style={{display:'grid', gap:'16px', justifyItems:'center'}}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true`}
          alt="GitHub stats"
          style={{maxWidth:'100%'}}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true`}
          alt="Top languages"
          style={{maxWidth:'100%'}}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&hide_border=true`}
          alt="GitHub streak"
          style={{maxWidth:'100%'}}
        />
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=fff8f3&color=1f2937&line=ff7b54&point=1f2937&area=true&hide_border=true`}
          alt="GitHub activity graph"
          style={{maxWidth:'100%'}}
        />
      </div>
    </section>
  )
}
