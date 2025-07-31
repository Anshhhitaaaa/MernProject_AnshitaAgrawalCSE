import React from 'react';

const ProfileHeader = () => {
  // Mock user data - in a real app, this would come from props or context
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    role: 'Computer Science Student',
    location: 'New York, USA',
    bio: 'Passionate about web development, AI, and creating innovative solutions. Currently pursuing a degree in Computer Science with a focus on machine learning.',
    followers: 245,
    following: 118,
    joined: 'January 2022',
    coverPhoto: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/79731568097599.5b50bca477735.jpg',
    profilePhoto: 'https://static.vecteezy.com/system/resources/previews/051/270/245/non_2x/cartoon-people-avatar-minimalist-human-avatar-versatile-icon-for-online-projects-an-avatar-for-the-profile-picture-of-someone-vector.jpg'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      {/* Cover Photo */}
      <div className="h-48 sm:h-64 w-full relative">
        <img 
          src={user.coverPhoto} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Profile Info */}
      <div className="relative px-4 sm:px-6 pb-6">
        {/* Profile Photo */}
        <div className="absolute -top-16 left-4 sm:left-6">
          <img 
            src={user.profilePhoto} 
            alt={user.name} 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 mr-2">
            Edit Profile
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Share Profile
          </button>
        </div>
        
        {/* User Info */}
        <div className="mt-8 sm:mt-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500">{user.username}</p>
          
          <div className="mt-2 flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {user.role}
            </span>
            
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {user.location}
            </span>
            
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Joined {user.joined}
            </span>
          </div>
          
          <p className="mt-4 text-gray-700">{user.bio}</p>
          
          <div className="mt-6 flex space-x-6">
            <div>
              <span className="font-semibold text-gray-900">{user.followers}</span>
              <span className="text-gray-600 ml-1">Followers</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">{user.following}</span>
              <span className="text-gray-600 ml-1">Following</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;