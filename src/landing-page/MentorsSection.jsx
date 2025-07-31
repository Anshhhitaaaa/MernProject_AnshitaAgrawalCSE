import React from 'react';

function MentorsSection() {
  const mentorCategories = [
    {
      icon: "🎨",
      title: "Design / UI-UX",
      color: "from-purple-500 to-pink-500",
      mentors: [
        {
          name: "Tanya Kapoor",
          role: "UI/UX Designer",
          company: "@PixelCurve",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Jay Mehta",
          role: "Product Designer",
          company: "@NeoCreate",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Aisha Bhandari",
          role: "Freelance Illustrator",
          company: "Figma Coach",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Kiran Das",
          role: "Creative Director",
          company: "@DesignCore",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ]
    },
    {
      icon: "💻",
      title: "Tech / Development",
      color: "from-blue-500 to-indigo-500",
      mentors: [
        {
          name: "Rohan Malhotra",
          role: "Full Stack Developer",
          company: "@CodeWave",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Simran Jaiswal",
          role: "Frontend Engineer",
          company: "@BrightApps",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Aditya Sinha",
          role: "Python Instructor",
          company: "Open Source Contributor",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Neha Verma",
          role: "Web Dev Mentor",
          company: "@LearnLoop",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ]
    },
    {
      icon: "🎬",
      title: "Video Editing / Content Creation",
      color: "from-green-500 to-teal-500",
      mentors: [
        {
          name: "Ira Shah",
          role: "Video Editor",
          company: "@CutCraft",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Zayan Sheikh",
          role: "Motion Graphics Artist",
          company: "@ReelGenius",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Myra Jain",
          role: "YouTube Creator",
          company: "Editing Coach",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Ankit Roy",
          role: "Short-Form Content",
          company: "Strategist",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ]
    },
    {
      icon: "📣",
      title: "Marketing & Branding",
      color: "from-orange-500 to-red-500",
      mentors: [
        {
          name: "Priya Sharma",
          role: "Digital Marketing",
          company: "@GrowthGuru",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Arjun Patel",
          role: "Brand Strategist",
          company: "@BrandBoost",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
          name: "Sneha Reddy",
          role: "Social Media Expert",
          company: "@SocialPro",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Vikram Singh",
          role: "SEO Specialist",
          company: "@SearchMaster",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
      ]
    }
  ];

  return (
    <section id="mentors" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from <span className="gradient-text">Expert Mentors</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with industry professionals who are passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>

        {/* Mentor Categories */}
        <div className="space-y-8 sm:space-y-12">
          {mentorCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className={`text-2xl sm:text-3xl mr-4 p-3 bg-gradient-to-br ${category.color} rounded-2xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.mentors.map((mentor, mentorIndex) => (
                  <div 
                    key={mentorIndex}
                    className="group relative bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors duration-300">
                          {mentor.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">{mentor.role}</p>
                        <p className="text-xs text-indigo-600 font-medium">{mentor.company}</p>
                      </div>
                    </div>
                    
                    <button className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-medium py-2 px-3 rounded-lg hover:shadow-md transform hover:-translate-y-1 transition-all duration-200">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Find Your Perfect Mentor
          </button>
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;
