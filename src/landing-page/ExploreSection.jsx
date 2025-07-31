import React from 'react';
import ChallengeCard from './ChallengeCard';

function ExploreSection() {
  const challenges = [
    {
      status: "past",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      category: "Design",
      subcategory: "Video Editing",
      title: "Create an animated logo reveal and brand intro with music & motion graphics.",
      date: "12 June - 22 June",
      marginTop: "mt-28"
    },
    {
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Code",
      subcategory: "React.js",
      title: "With React or Vue + localStorage. Bonus: add dark mode, streak counter.",
      date: "26 June - 8 Aug",
      marginTop: ""
    },
    {
      status: "Incoming",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Design",
      subcategory: "UI/UX Design",
      title: "Mental Health / Climate / Gender Equality. Deliverables: poster + Instagram post",
      date: "11 Aug - 20 Aug",
      marginTop: "mt-28"
    }
  ];

  const categories = [
    {
      icon: "🎨",
      title: "Design & UI/UX",
      description: "Craft beautiful interfaces, learn Figma, and work on real-world design problems.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "💻",
      title: "Coding & Tech",
      description: "Build cool websites, learn JavaScript or Python, and join dev-based challenges.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "🎬",
      title: "Video Editing & Content Creation",
      description: "Create reels, edit promos, learn storytelling, and showcase your editing style.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "📈",
      title: "Marketing & Strategy",
      description: "Run creative ad campaigns, build personal brands, and pitch to real clients.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🎤",
      title: "Public Speaking & Communication",
      description: "Master the mic, present your ideas with confidence, and build your on-stage persona.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="explore" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="gradient-text">Skills</span>, Challenges & Creators
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a coder, designer, marketer, or creator — discover hands-on challenges, 
            mini-courses, and real projects to level up your skills.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            🌟 Explore by Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl mb-4">{category.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            🚀 Featured Challenges
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className={`${challenge.marginTop}`}>
                <ChallengeCard challenge={challenge} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Explore All Challenges
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
