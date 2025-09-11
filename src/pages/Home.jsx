import { useState } from 'react'
import "../index.css";
import Hero from "../components/Home Page/Hero";
import TestimonialCarousel from "../components/Home Page/TestimonialCarousel";
import Service from "../components/Home Page/Services";
import AboutUs01 from "../components/Home Page/AboutUs01";
import WorkingProcess from "../components/Home Page/WorkingProcess";
import AboutUs02 from "../components/Home Page/AboutUs02";
import Portfolio from "../components/Home Page/Portfolio";
import ClientLogo from "../components/Home Page/ClientLogo";
import CTA from "../components/Home Page/CTA";
import Reviews from '../components/Home Page/Reviews'
import ProfesionalsTeam from "../components/Home Page/ProfesionalsTeam";
import Pricing from "../components/Home Page/Pricing";
import ContactForm from "../components/Home Page/ContactForm";
import BlogSection from "../components/Home Page/BlogSection";
import LogoSection from "../components/Home Page/LogoSection";

export default function Home() {

  return (
    <>
      <Hero />
    <TestimonialCarousel/>
    <AboutUs01/>
    <WorkingProcess/>
    <Service/>
    <AboutUs02/>
    <Portfolio/>
    <ClientLogo/>
    <CTA/>
    <Reviews/>
    <ProfesionalsTeam/>
    <Pricing/>
    <ContactForm/>
    <BlogSection/>
    <LogoSection/>
    </>

  )
}
