import React from "react";
import logo1 from "../../Assets/logoAsi.jpeg";
import logo2 from "../../Assets/logo-axiom-groupe.png";
import logo3 from "../../Assets/LogoUqam.jpeg";
import logo4 from "../../Assets/Logo_IUT_Lannion.png";

// Fonction pour parser le texte avec mise en forme
function parseDescription(text) {
  return text;
}

// Données d'exemple pour les expériences
const experiencesData = [
  {
    id: 1,
    title: "Stage de 1ère année de Master informatique",
    subtitle: "Maintenance logiciel",
    period: "Mars 2025 - Août 2025",
    description: `Dans le cadre de mon stage de 1ère année de master, j'ai évolué chez <b class="purple">ASI</b>, qui cherchait un développeur pour assurer la maintenance d'un logiciel existant. 

J'ai travaillé sur le projet <b class="purple">Cybèle</b>, le logiciel utilisé par <b class="purple">Brittany Ferries</b> pour la gestion des traversées de bateau, la planification des traversées, la gestion de stock et des passagers.  Mes missions consistaient à corriger des <b class="purple">bugs</b>, faire évoluer le logiciel et assurer la maintenance technologique de l'application. Les technologies utilisées dans ce projet étaient <b class="purple">Spring</b>, <b class="purple">Java</b>, <b class="purple">AngularJS</b> et <b class="purple">Vue.js</b>.  J'ai effectué des corrections de bugs, comme des incohérences de données, et des évolutions, comme l'ajout d'un filtre de recherche pour les données.

J'ai par exemple réalisé la <b class="purple">migration</b> d'<b class="purple">AngularJS</b> vers <b class="purple">Vue.js</b> pour améliorer la maintenabilité de l'application. Cela m'a permis de travailler mon adaptation, car je ne connaissais pas AngularJS, et j'ai dû m'adapter et apprendre rapidement. J'ai aussi appris l'importance du travail en équipe en <b class="purple">méthode agile</b>, avec les réunions daily, les rétrospectives, etc. Ce stage m'a permis de travailler mon adaptation à des technologies que je ne connaissais pas et m'a appris l'importance de la méthode agile sur un grand projet, surtout pour la communication afin d'éviter de rester bloqué sur un problème.`,
    tags: ["Java", "Spring", "Vue.js", "Docker", "AngularJS"],
    logo: logo1,
    logoAlt: "Logo ASI"
  },
  {
    id: 2,
    title: "Alternance de 3ème année de BUT",
    subtitle: "Développement logiciel interne",
    period: "Septembre 2023 - Août 2024",
    description: `Pour ma 3ème année de BUT informatique, je l'ai effectuée chez <b class="purple">Axiom Groupe</b>, une entreprise de transport logistique. 

J'étais développeur de logiciels internes en <b class="purple">VB.Net</b> et <b class="purple">ASP.Net</b>. J'ai eu quelques difficultés à démarrer sur le développement logiciel car je ne connaissais pas le langage de programmation, mais après un certain temps je me suis habitué grâce à la ressemblance avec le langage <b class="purple">Java</b>. 
<b class="purple">Axiom</b> souhaitait que je développe de nouvelles applications internes à l'entreprise. J'ai travaillé seul sur les logiciels pour le développement, mais j'étais quand même encadré par un autre développeur pour les questions techniques.

J'ai développé tout au long de l'alternance <b class="purple">4 logiciels de bureau</b> et <b class="purple">1 site web</b>. Les fonctions allaient de la gestion de sinistres, à un logiciel de gestion de stock, ou encore à un site de suivi kilométrique.
J'ai appris l'importance de l'organisation de projet, surtout l'<b class="purple">avant-projet</b> pour bien déterminer les objectifs et les besoins du logiciel. Aussi la rigueur lors du développement, encore plus quand on est seul.`,
    tags: ["VB.Net", "ASP.Net", "SQL", "Git", "Autonomie", "Adaptation"],
    logo: logo2,
    logoAlt: "Logo Axiom Groupe"
  },
  {
    id: 3,
    title: "Stage de 2ème année de BUT",
    subtitle: "Stage en recherche scientifique sur l'IA",
    period: "Mars 2023 - Juillet 2023",
    description: `J'ai effectué un stage de 3 mois à <b class="purple">Montréal</b>, à l'<b class="purple">UQAM</b> (Université du Québec à Montréal), dans le cadre de ma deuxième année de BUT. 

Le sujet du stage consistait à implémenter des <b class="purple">algorithmes d'IA</b> capables d'analyser l'activité du cerveau pendant une partie de jeu. J'ai travaillé en duo sur le projet, encadré par un professeur qui nous a transmis des articles scientifiques présentant des algorithmes d'IA intéressants à implémenter.
Les défis étaient nombreux : je ne connaissais rien au monde de la <b class="purple">recherche</b> et le sujet était complexe. En <b class="purple">Python</b>, j'ai intégré les algorithmes pour obtenir des graphiques de résultats de données qui se ressemblaient. Le problème était que nous ne savions pas toujours si les résultats étaient réellement cohérents. J'ai même proposé de combiner plusieurs algorithmes afin d'obtenir d'autres résultats.

Nos implémentations ont permis de produire des <b class="purple">graphiques</b> intéressants, mais comme les données n'étaient pas propres, il n'a pas été possible d'en tirer des analyses plus approfondies.
Grâce à ce stage, j'ai découvert le monde de la recherche, que je trouve passionnant, même si je ne souhaite pas y poursuivre ma carrière professionnelle. Cela m'a également permis de développer ma <b class="purple">curiosité</b> et de ne pas hésiter à proposer des solutions en programmation.`,
    tags: ["Recherche", "Autonomie", "IA", "Python"],
    logo: logo3,
    logoAlt: "Logo UQAM"
  },
  {
    id: 4,
    title: "Projet universitaire de 3ème année — Cayden Quest",
    subtitle: "Développement d'une application web inspirée d'un livre dont vous êtes le héros",
    period: "Mai 2024 - Mars 2024",
    description: `Dans le cadre de ma 3ème année, j'ai réalisé un projet universitaire où j'ai développé un site web qui adapte un livre « où vous êtes le héros ». 

Dans ce projet, il fallait justifier les technologies utilisées, réaliser l'application, s'adapter aux demandes des professeurs qui ont changé les priorités, et faire la présentation. Le travail a été réalisé en <b class="purple">groupe de 5 personnes</b>. Les technologies utilisées ont été <b class="purple">React</b>, <b class="purple">Node.js</b>, <b class="purple">SQL</b> et <b class="purple">Docker</b> pour le déploiement.
Pour la réalisation, nous devions découper l'application en <b class="purple">3 conteneurs Docker</b> : un pour la base de données, un pour l'<b class="purple">API</b> et un pour l'application front.

Dans ce projet, j'ai réalisé le <b class="purple">schéma de la base de données</b>, créé les 3 images Docker, puis réalisé des scripts de déploiement avec <b class="purple">Docker Compose</b>. Ce projet m'a permis de découvrir la réalisation d'une application avec une API, le <b class="purple">travail d'équipe</b> et surtout l'adaptation lorsque les professeurs ont changé les priorités, afin de toujours proposer les fonctionnalités souhaitées.`,
    tags: ["React", "Docker", "NodeJS", "Git", "SQL", "Travail en équipe"],
    logo: logo4,
    logoAlt: "Logo IUT Lannion"
  },
];

function ExperienceCard({ experience, index }) {
  return (
    <div className="experience-item">
      <div className="exp-content">
        <div className="exp-text">
          <h3 className="exp-title">{experience.title}</h3>
          <h4 className="exp-subtitle">{experience.subtitle}</h4>
          <div className="exp-period">{experience.period}</div>
          <div
            className="exp-description"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
          <div className="exp-tags">
            {experience.tags.map((tag, i) => (
              <b key={i} className="exp-tag">
                {tag}
              </b>
            ))}
          </div>
        </div>

        <div className="exp-image">
          <div className="exp-logo-container">
            <img 
              src={experience.logo} 
              alt={experience.logoAlt}
              className="exp-logo-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-item {
          margin-bottom: 2rem;
        }

        .exp-content {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .exp-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.15);
        }

        .exp-text {
          flex: 1;
        }

        .exp-image {
          flex: 0 0 100px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .exp-logo-container {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .exp-logo-container:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .exp-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .exp-logo-img:hover {
          transform: scale(1.02);
        }

        .exp-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
        }

        .exp-subtitle {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
        }

        .exp-period {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          display: inline-block;
          font-weight: 500;
        }

        .exp-description {
          margin: 0 0 1rem 0;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          white-space: pre-line;
          text-align: justify;
        }

        .exp-description :global(.purple) {
          color: #a855f7;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
        }

        .exp-description :global(strong) {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
          display: block;
          margin: 1rem 0 0.5rem 0;
        }

        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tag {
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .exp-tag:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .exp-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .exp-image {
            flex: none;
            margin-bottom: 1rem;
          }

          .exp-logo-container {
            width: 80px;
            height: 80px;
          }

          .exp-tags {
            justify-content: center;
          }

          .exp-description {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}

// Section Expériences pour intégration dans Home2
export function ExperiencesSection() {
  return (
    <section className="experiences-section">
      <div className="container">
        <h2 className="section-title">Mes Expériences</h2>
        <div className="experiences-grid">
          {experiencesData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .experiences-section {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .experiences-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default ExperiencesSection;