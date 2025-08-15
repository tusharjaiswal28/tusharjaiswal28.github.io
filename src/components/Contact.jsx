import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="container" data-reveal="fade-up" style={{ textAlign: 'center' }}>
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--muted-text-color)' }}>
        I’m currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a
        href="mailto:tusharjaiswal8090@gmail.com"
        className="btn primary"
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '1.1rem',
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)'
        }}
      >
        SAY HELLO
      </a>

     <div style={{
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  color: '#1a1a1a', // Dark text for light background
}}>
  <a href="https://github.com/tusharjaiswal28" target="_blank" rel="noreferrer" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1a1a1a',
    fontWeight: '500'
  }}>
    <FaGithub size={22} /> TusharJaiswal28
  </a>
  <a href="https://linkedin.com/in/tushar-jaiswal28" target="_blank" rel="noreferrer" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1a1a1a',
    fontWeight: '500'
  }}>
    <FaLinkedin size={22} /> Tushar Jaiswal
  </a>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1a1a1a',
    fontWeight: '500'
  }}>
    <FaPhoneAlt size={20} /> +91-8303416224
  </div>
  <a href="mailto:tusharjaiswal8090@gmail.com" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1a1a1a',
    fontWeight: '500'
  }}>
    <HiOutlineMail size={22} /> tusharjaiswal8090@gmail.com
  </a>
</div>

    </section>
  );
}
