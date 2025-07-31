import React from 'react';

function ChallengeCard({ challenge }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-green-500';
      case 'incoming':
        return 'bg-blue-500';
      case 'past':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'Live Now';
      case 'incoming':
        return 'Coming Soon';
      case 'past':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(challenge.status)}`}>
          {getStatusText(challenge.status)}
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {challenge.status.toLowerCase() === 'ongoing' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
              {challenge.category}
            </span>
            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
              {challenge.subcategory}
            </span>
          </div>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 line-clamp-2">
          {challenge.title}
        </h3>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
          <span>{challenge.date}</span>
        </div>

        {challenge.status.toLowerCase() === 'ongoing' && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Progress</span>
              <span>65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        )}

        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
          {challenge.status.toLowerCase() === 'ongoing' ? 'Continue' : 'Learn More'}
        </button>
      </div>
    </div>
  );
}

export default ChallengeCard;
