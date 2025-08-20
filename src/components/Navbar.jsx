import { useState } from 'react'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">Tushar <span>Jaiswal</span></div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="resume-btn" href="https://drive.google.com/file/d/1TFDKyuOZBKBqNv1dy47BTB_AhI_Fb_to/view?usp=sharing" target="_blank"
            rel="noreferrer" download>Resume</a>
        </nav>
        <div className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</div>
      </div>
      {open && (
        <div className="container mobile-menu">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          <a onClick={() => setOpen(false)} className="resume-btn" href="https://drive.google.com/file/d/1TFDKyuOZBKBqNv1dy47BTB_AhI_Fb_to/view?usp=sharing" download>Resume</a>
        </div>
      )}
    </header>
  )
}
