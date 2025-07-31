import React from 'react';

const AchievementSection = () => {
  // Mock achievements data - in a real app, this would come from props or context
  const achievements = [
    {
      id: 1,
      title: 'Hackathon Winner',
      description: 'First place in the University Tech Hackathon 2023',
      date: '2023-05-15',
      badge: '🏆 Winner',
      category: 'competition',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Machine Learning Certification',
      description: 'Completed advanced certification in Machine Learning and AI',
      date: '2023-03-10',
      badge: '🎓 Certified',
      category: 'certification',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Research Paper Published',
      description: 'Co-authored a research paper on "Neural Networks in Education" published in the International Journal of Computer Science',
      date: '2022-11-28',
      badge: '📝 Published',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      description: 'Recognized as a top contributor to the React Native project with over 50 merged pull requests',
      date: '2022-09-05',
      badge: '💻 Contributor',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 5,
      title: 'Dean\'s List',
      description: 'Recognized for academic excellence by being named to the Dean\'s List for 3 consecutive semesters',
      date: '2022-06-30',
      badge: '🌟 Excellence',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
      id: 6,
      title: 'Web Development Workshop',
      description: 'Conducted a workshop on Modern Web Development with React and Node.js for 100+ students',
      date: '2022-04-12',
      badge: '👨‍🏫 Instructor',
      category: 'teaching',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'competition':
        return 'bg-yellow-100 text-yellow-800';
      case 'certification':
        return 'bg-green-100 text-green-800';
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'development':
        return 'bg-purple-100 text-purple-800';
      case 'teaching':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Achievements & Certifications</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
          Add Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="h-40 overflow-hidden">
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                  {achievement.badge}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{formatDate(achievement.date)}</span>
                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;