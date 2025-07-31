import React from 'react';
import styles from './Portfolio.module.css';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 88, color: "from-orange-500 to-orange-600" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-cyan-600" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87, color: "from-green-500 to-green-600" },
        { name: "Python", level: 82, color: "from-blue-500 to-blue-600" },
        { name: "Express.js", level: 85, color: "from-gray-500 to-gray-600" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-800" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 65, color: "from-orange-500 to-orange-600" },
        { name: "Figma", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed a comprehensive skill set through years of hands-on experience 
            and continuous learning in modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${styles.skillBar}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Additional Skills & Competencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Responsive Design", "RESTful APIs", "GraphQL", "Redux", 
              "Next.js", "Testing (Jest)", "CI/CD", "Agile/Scrum",
              "Performance Optimization", "SEO", "Accessibility", "Security Best Practices"
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023",
                icon: "☁️"
              },
              {
                title: "React Developer Certification",
                issuer: "Meta",
                year: "2023",
                icon: "⚛️"
              },
              {
                title: "Google Cloud Professional",
                issuer: "Google",
                year: "2022",
                icon: "🔧"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-600 font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 