import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';
import SectionWrapper from '@/components/SectionWrapper';
import profileFr from '@/data/profile.json';
import profileEn from '@/data/profile_en.json';

const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            projects: 'Voir mes projets',
            contact: 'Me contacter',
            download: 'Télécharger mon CV',
            cvFile: 'remi_staelen_cv_fr.pdf'
        },
        skills: {
            title: 'Compétences Techniques'
        },
        experience: {
            title: 'Expérience Professionnelle'
        },
        education: {
            title: 'Parcours Académique'
        },
        projects: {
            title: 'Projets Récents',
            code: 'Code',
            fallback: 'Les projets seront ajoutés bientôt, voici mon',
            github: 'GitHub'
        },
        interests: {
            title: 'Centres d\'Intérêt'
        },
        contact: {
            title: 'Me Contacter',
            email: 'Email',
            phone: 'Téléphone',
            location: 'Localisation',
            socials: 'Réseaux Sociaux',
            form: {
                name: 'Nom',
                email: 'Email',
                message: 'Message',
                send: 'Envoyer le message',
                sending: 'Envoi en cours...',
                success: 'Message envoyé !',
                successDesc: 'Merci de m\'avoir contacté. Je vous répondrai dans les plus brefs délais.',
                another: 'Envoyer un autre message',
                error: 'Une erreur est survenue lors de l\'envoi.',
                errorDesc: 'Il est possible que le quota de messages soit atteint.',
                emailFallback: 'Cliquez ici pour m\'envoyer un email directement.',
                placeholderName: 'Votre nom',
                placeholderEmail: 'votre@email.com',
                placeholderMessage: 'Votre message...'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            projects: 'View my projects',
            contact: 'Contact me',
            download: 'Download my CV',
            cvFile: 'remi_staelen_cv_en.pdf'
        },
        skills: {
            title: 'Technical Skills'
        },
        experience: {
            title: 'Professional Experience'
        },
        education: {
            title: 'Academic Background'
        },
        projects: {
            title: 'Recent Projects',
            code: 'Code',
            fallback: 'Projects will be added soon, here is my',
            github: 'GitHub'
        },
        interests: {
            title: 'Interests'
        },
        contact: {
            title: 'Contact Me',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            socials: 'Social Networks',
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message Sent!',
                successDesc: 'Thank you for contacting me. I will get back to you as soon as possible.',
                another: 'Send another message',
                error: 'An error occurred while sending.',
                errorDesc: 'The message quota may have been reached.',
                emailFallback: 'Click here to send me an email directly.',
                placeholderName: 'Your name',
                placeholderEmail: 'your@email.com',
                placeholderMessage: 'Your message...'
            }
        }
    }
};

function App() {
    const [language, setLanguage] = useState('fr');
    const profile = language === 'fr' ? profileFr : profileEn;
    const t = translations[language];

    return (
        <Layout language={language} setLanguage={setLanguage} t={t} profile={profile}>
            <Hero profile={profile} t={t} />

            <SectionWrapper id="skills" side="left">
                <Skills skills={profile.skills} t={t} />
            </SectionWrapper>

            <SectionWrapper id="experience" side="right">
                <Experience experience={profile.experience} t={t} />
            </SectionWrapper>

            <SectionWrapper id="education" side="left">
                <Education education={profile.education} t={t} />
            </SectionWrapper>

            <SectionWrapper id="projects" side="right">
                <Projects projects={profile.projects} t={t} />
            </SectionWrapper>

            <SectionWrapper id="interests" side="left">
                <Interests interests={profile.interests} t={t} />
            </SectionWrapper>

            <SectionWrapper id="contact" side="right">
                <Contact profile={profile} t={t} />
            </SectionWrapper>
        </Layout>
    );
}

export default App;
