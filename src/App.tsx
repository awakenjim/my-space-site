import React from 'react';
import { Particles } from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import { motion } from 'framer-motion';
import './App.css';

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.2 },
            move: { enable: true, speed: 0.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      <section className="section hero parallax">
        <div className="parallax-layer"></div> {/* Pour effet parallax simple */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <div className="black-hole"></div>
          <h1>Bienvenue dans l'Univers de [Ton Nom]</h1>
          <p>Explorateur de l'espace digital, passionné par les trous noirs et le web3.</p>
        </motion.div>
      </section>

      <section className="section about">
        <motion.h2 initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>
          À Propos de Moi
        </motion.h2>
        <p>
          [Ta bio ici : Parle de ta personnalité, tes passions pour l'espace, les trous noirs, l'innovation tech. Ex. : "Je suis un dev front-end obsédé par les mystères cosmiques, créant des expériences web qui défient la gravité."]
        </p>
      </section>

      <section className="section projects">
        <motion.h2 initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>
          Mes Projets
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Projet 1 : [Nom du projet]</h3>
            <p>[Description : Ex. Un simulateur de trou noir en JS.]</p>
            <a href="[Lien]" target="_blank" rel="noopener noreferrer">Voir plus</a>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Projet 2 : [Nom du projet]</h3>
            <p>[Description]</p>
            <a href="[Lien]" target="_blank" rel="noopener noreferrer">Voir plus</a>
          </motion.div>
          {/* Ajoute plus de cartes selon tes projets */}
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>Envie de discuter trous noirs ou collab web3 ? [Ajoute email, LinkedIn, etc.]</p>
      </section>
    </div>
  );
};

export default App;