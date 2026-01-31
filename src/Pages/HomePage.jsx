import React from 'react';
import Logos from '../components/HomePageComponents/Logos';
import Courses from '../components/HomePageComponents/Courses';
import Footer from '../components/common/Footer';
import coursesData from '../data/coursesData.json';
import CTA from '../components/HomePageComponents/CTA';
import NavBar from '../components/common/Navbar';
import Features from '../components/HomePageComponents/Features';
import Hero from '../components/HomePageComponents/Hero';
import Testimonials from '../components/HomePageComponents/Testimonials';

export default function HomePage() {


    return (
        <div>
            <NavBar />
            <Hero stats={stats} />
            <Logos />
            <Courses courses={courses} />
            <Features />
            <Testimonials testimonials={testimonials} />
            <CTA />
            <Footer />
        </div>
    );
}