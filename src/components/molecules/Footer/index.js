import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Contact with me{' '}
        <span className="Footer__Heart">&hearts;</span>{' '}
        <a
          href="https://www.linkedin.com/in/hoangfinn/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Finn Wee
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://youtu.be/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="https://github.com/HoangNhat629/sorting_algorithms_visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
