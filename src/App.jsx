import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';
import SectionWrapper from '@/components/SectionWrapper';
import profile from '@/data/profile.json';

function App() {
    return (
        <Layout>
            <Hero profile={profile} />

            <SectionWrapper id="skills" side="left">
                <Skills skills={profile.skills} />
            </SectionWrapper>

            <SectionWrapper id="experience" side="right">
                <Experience experience={profile.experience} />
            </SectionWrapper>

            <SectionWrapper id="education" side="left">
                <Education education={profile.education} />
            </SectionWrapper>

            <SectionWrapper id="projects" side="right">
                <Projects projects={profile.projects} />
            </SectionWrapper>

            <SectionWrapper id="interests" side="left">
                <Interests interests={profile.interests} />
            </SectionWrapper>

            <SectionWrapper id="contact" side="right">
                <Contact profile={profile} />
            </SectionWrapper>
        </Layout>
    );
}

export default App;
