import React from 'react';
import styles from './Portfolio.module.css';

export default function ExperienceSection() {
  const workExperience = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led a team of 5 developers to deliver 3 major projects on time",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed responsive web applications and collaborated with design team to implement user interfaces. Worked in an agile environment with rapid iteration cycles.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Reduced bundle size by 30% through code optimization",
        "Implemented accessibility features improving WCAG compliance"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Digital Solutions",
      period: "2020 - 2021",
      location: "New York, NY",
      description: "Started my professional journey working on various client projects. Learned modern web development practices and gained hands-on experience with multiple technologies.",
      achievements: [
        "Completed 15+ client projects successfully",
        "Learned 5+ new technologies and frameworks",
        "Received 'Best Newcomer' award for outstanding performance"
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2016 - 2020",
      location: "New York, NY",
      description: "Graduated with honors. Focused on software engineering, algorithms, and web development. Completed capstone project on e-commerce platform.",
      gpa: "3.8/4.0"
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      school: "CodeAcademy",
      period: "2020",
      location: "Online",
      description: "Intensive 12-week program covering full-stack web development. Built multiple projects using modern technologies and best practices.",
      gpa: "Certificate"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my expertise 
            in web development and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={job.id} className={`relative ${styles.timelineItem}`}>
                  {/* Timeline Line */}
                  {index < workExperience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                        <span className="text-sm text-blue-600 font-medium">{job.period}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-sm">{job.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{job.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className={`relative ${styles.timelineItem}`}>
                  {/* Timeline Line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                        <span className="text-sm text-purple-600 font-medium">{edu.period}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-sm">{edu.school}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{edu.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">GPA: {edu.gpa}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 