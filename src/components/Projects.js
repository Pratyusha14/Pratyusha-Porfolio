import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const Projects = (theme) => {
    return (
        <section className={`px-5 py-20 ${theme}`} id="project">
            <div className="container mx-auto pb-6">
                <div className='project-info md:text-left'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="cards container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {[
                    {
                        name: 'Portfolio Website',
                        link: 'https://github.com/Suman7h/Buzzz',
                        description: 'Built an interactive portfolio website from the scratch using React.js and Node.js to showcase skills, experience and projects effectively.',
                        tech: ['React.js', 'Tailwind CSS', 'Node.js'],
                        image: 'https://www.createwithswift.com/content/images/2024/06/createwithswift.com-preparing-your-app-icon-for-dark-and-tinted-appearance-01.png', // Replace with actual image URL
                    },
                    {
                        name: 'OneStop Website',
                        link: 'https://github.com/Suman7h/Semanticsegmentation',
                        description: 'Developed a user-friendly website from the ground for footwear shop offering types of footwear with price and quantity for a convenient shopping experience and streamlined inventory tracking by 30% through real-time data integration.',
                        tech: ['EJS', 'Bootstrap', 'NodeJS', 'Express', 'MongoDB'],
                        image: 'https://www.createwithswift.com/content/images/2024/06/createwithswift.com-preparing-your-app-icon-for-dark-and-tinted-appearance-01.png', // Replace with actual image URL
                    },
                    {
                        name: 'Credit Card Approval',
                        link: 'https://github.com/Suman7h/Creditcard_approval_system',
                        description: 'Developed a machine learning model with an improved accuracy of 8% using xgboost that aids in identifying potential defaulters.',
                        tech: ['Python', 'Machine Learning', 'Neural Networks'],
                        image: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649', // Replace with actual image URL
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className='project-card bg-white w-96 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500'
                    >
                        <div className="image-container relative">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="project-image w-full h-52 object-cover rounded-t-2xl"
                            />
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View on GitHub"
                                className="github-icon absolute top-2 right-2 text-xl text-gray-700 hover:scale-110 transition-transform"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <div className="project-content p-5">
                            <h3 className="project-name text-lg font-bold mb-2">{project.name}</h3>
                            <p className="project-description text-sm text-gray-600 mb-3">
                                {project.description}
                            </p>
                            <div className="project-tech text-xs text-gray-500">
                                <ul className="flex space-x-2">
                                    {project.tech.map((tech, i) => (
                                        <li key={i} className="tech-item">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='more flex justify-center items-center py-28'>
                <a
                    href="https://github.com/Pratyusha14"
                    className='border-2 border-teal-500 px-4 py-2 hover:bg-teal-500 hover:text-black transition-colors duration-300'
                >
                    See More
                </a>
            </div>
        </section>
    );
};

export default Projects;