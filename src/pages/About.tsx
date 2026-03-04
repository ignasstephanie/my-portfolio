import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Label from '../components/Label';
import academics from '../data/academic.json';
import jobs from '../data/jobexperience.json';
import certifications from '../data/certifications.json';
import techstack from '../data/techstack.json';
import React from 'react';

function About()
{
    return (
        <>
        <div className="main">
            <Navbar />
            <div className="content-container">
                <div className="text-left paragraph-container">
                    <h1 className="heading-intro medium-text" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        Hello there! I am
                        <span className="gradient-text name-gradient"> Stephanie Lorraine Ignas</span>
                    </h1>
                    <p className='description-container' data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" data-aos-delay="200">
                        With a keen eye for design and a mastery of code, I work seamlessly as a 
                        <span className="gradient-text"> web designer</span>,
                        <span className="gradient-text"> web developer</span>, and a 
                        <span className="gradient-text"> graphic designer</span>. 
                        With 4 years of experience, I developed a strong understanding of user-centered 
                        design principles and is able to bring websites and applications to life with a blend 
                        of design thinking and technical expertise.
                    </p>
                </div>
                <div className="text-left paragraph-container h-flex">
                    <div className="v-flex">
                        <h3 className="subheading" data-aos="fade-right" data-aos-delay="400">Academic <span className="gradient-text">Qualifications</span></h3>
                        <div className="timeline-list-flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                            <div className="timeline-list timeline-gap">
                                {academics.map((academic, index) => (
                                <React.Fragment key={index}>
                                    <Timeline {...academic} />
                                    {index < academics.length - 1 && (
                                    <div className="line-connector longer-line"></div>
                                    )}
                                </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="v-flex">
                        <h3 className="subheading" data-aos="fade-right" data-aos-delay="400">Job <span className="gradient-text">Experiences</span></h3>
                        <div className="timeline-list-flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                            <div className="timeline-list">
                                {jobs.map((job, index) => (
                                <React.Fragment key={index}>
                                    <Timeline {...job} />
                                    {index < jobs.length - 1 && (
                                    <div className="line-connector"></div>
                                    )}
                                </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="v-flex text-left paragraph-container">
                    <h3 className="subheading" data-aos="fade-right">Licenses & <span className="gradient-text">Certifications</span></h3>
                    <div className="timeline-list-flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                        <div className="timeline-list">
                            {certifications.map((certification, index) => (
                            <React.Fragment key={index}>
                                <Timeline {...certification} />
                                {index < certifications.length - 1 && (
                                <div className="line-connector"></div>
                                )}
                            </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <h2 className="heading margin-top-gap" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">My Tech <span className="gradient-text">Stack</span></h2>
                <div className="padding-large">
                    <div className="v-flex width-70" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                        <h4>Frontend</h4>
                        <div className="wrap-container">
                            {techstack
                                .filter(t => t.type === 'frontend')
                                .map((techstack, index) => (
                                    <Label key={index} {...techstack} />
                            ))}
                        </div>
                    </div>
                    <div className="v-flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                        <h4>Backend</h4>
                        <div className="wrap-container">
                            {techstack
                                .filter(t => t.type === 'backend')
                                .map((techstack, index) => (
                                    <Label key={index} {...techstack} />
                            ))}
                        </div>
                    </div>
                <div className="paragraph-container h-flex gap-medium width-70">
                    <div className="v-flex width-half" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                        <h4>UI Design</h4>
                        <div className="wrap-container">
                            {techstack
                                .filter(t => t.type === 'uidesign')
                                .map((techstack, index) => (
                                    <Label key={index} {...techstack} />
                            ))}
                        </div>
                    </div>
                    <div className="v-flex width-half" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700">
                        <h4>Graphic Design</h4>
                        <div className="wrap-container">
                            {techstack
                                .filter(t => t.type === 'graphicdesign')
                                .map((techstack, index) => (
                                    <Label key={index} {...techstack} />
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default About