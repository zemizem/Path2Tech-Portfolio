import { NavLink } from 'react-router-dom';
import AboutMe from '../assets/AboutMe.jpg';

// Replace these variables with your information
const firstName = 'ZemZem';
const jobTitle = 'Engagement Specialist';
const company = 'Somatus';
const mainDuty = 'engaging members into the Somatus program and scheduling visits for Nurse Practioners';
const jobLocation = 'the DMV area, but I work remotely.';
const briefJobDescription = 'As an Engagement Specialist, my primary responsibility was to make outbound calls to members, informing them of the services available through their insurance and enrolling them in the program. Approximately a year ago, I was promoted to NP Scheduler. In this role, I coordinate nurse practitioner visits with Somatus members.';
const careerObjective = 'Ultimately, I plan to create a software application that enhances the prescribing and dispensing of medication for both patients and healthcare providers. In the meantime, after completing my technical training, I aim to work in an entry-level or junior position to refine my coding skills and gain valuable experience.';
const personalLife = 'I am the middle child in a family of four brothers and one sister, but as the eldest daughter, I am the backbone of our family. I am also a proud mother to the cutest baby girl and three adorable cats.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={AboutMe} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for {company}. My role consists of  {mainDuty}. I am  located in {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;