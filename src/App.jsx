import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';
import profile from '@/data/profile.json';

function App() {
    return (
        <Layout>
            <Hero profile={profile} />
            <Skills skills={profile.skills} />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <Projects projects={profile.projects} />
            <Interests interests={profile.interests} />
            <Contact profile={profile} />
        </Layout>
    );
}

export default App;
