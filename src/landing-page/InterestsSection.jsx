import React from 'react';

function InterestsSection() {
  const interests = [
    {
      icon: "🎨",
      title: "Design & Creativity",
      description: "Unleash your creative potential with design tools and visual storytelling.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Learn Figma, Adobe Creative Suite",
        "Create stunning UI/UX designs",
        "Master visual storytelling",
        "Build a design portfolio"
      ]
    },
    {
      icon: "💻",
      title: "Programming & Tech",
      description: "Build the future with coding skills and technology expertise.",
      color: "from-blue-500 to-indigo-500",
      features: [
        "Master JavaScript, Python, React",
        "Build real-world projects",
        "Learn web development",
        "Contribute to open source"
      ]
    },
    {
      icon: "🎬",
      title: "Content Creation",
      description: "Create engaging content that captivates and inspires audiences.",
      color: "from-green-500 to-teal-500",
      features: [
        "Video editing and animation",
        "Social media content creation",
        "Storytelling and narrative",
        "Brand building strategies"
      ]
    },
    {
      icon: "📈",
      title: "Business & Marketing",
      description: "Develop business acumen and marketing strategies for success.",
      color: "from-orange-500 to-red-500",
      features: [
        "Digital marketing strategies",
        "Brand development",
        "Analytics and data insights",
        "Entrepreneurial skills"
      ]
    },
    {
      icon: "🎤",
      title: "Communication",
      description: "Master the art of effective communication and public speaking.",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Public speaking confidence",
        "Presentation skills",
        "Storytelling techniques",
        "Leadership communication"
      ]
    },
    {
      icon: "🚀",
      title: "Innovation & Problem Solving",
      description: "Develop critical thinking and innovative problem-solving skills.",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Design thinking methodology",
        "Creative problem solving",
        "Innovation strategies",
        "Project management"
      ]
    }
  ];

  return (
    <section id="interests" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Your <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover learning paths tailored to your interests and career goals. 
            Choose from diverse skill areas and start your journey today.
          </p>
        </div>

        {/* Interest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {interest.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {interest.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base font-medium py-3 px-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Not sure where to start?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Take our quick assessment to discover the perfect learning path for your goals.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Take Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterestsSection;
