import React, { useState } from 'react';

const PersonalInfo = () => {
  // Mock user data - in a real app, this would come from props or context
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1998-04-12',
    gender: 'Male',
    address: '123 Tech Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    university: 'New York University',
    major: 'Computer Science',
    graduationYear: '2024',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'UI/UX Design'],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Intermediate' },
      { name: 'French', proficiency: 'Basic' }
    ],
    socialLinks: {
      github: 'https://github.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
      portfolio: 'https://janedoe.dev'
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // In a real app, you would send the updated data to the server here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset any unsaved changes
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
        {isEditing ? (
          <div className="space-x-2">
            <button 
              onClick={handleSave}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Save Changes
            </button>
            <button 
              onClick={handleCancel}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button 
            onClick={handleEdit}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Edit Information
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.lastName}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-gray-900">{userData.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-gray-900">{userData.phone}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={userData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{new Date(userData.dateOfBirth).toLocaleDateString()}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                {isEditing ? (
                  <select
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userData.gender}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Address */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-gray-900">{userData.address}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.city}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={userData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.state}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="zipCode"
                    value={userData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.zipCode}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={userData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.country}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University/College</label>
              {isEditing ? (
                <input
                  type="text"
                  name="university"
                  value={userData.university}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-gray-900">{userData.university}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Major/Field of Study</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="major"
                    value={userData.major}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.major}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="graduationYear"
                    value={userData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-gray-900">{userData.graduationYear}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
              {isEditing ? (
                <input
                  type="url"
                  name="github"
                  value={userData.socialLinks.github}
                  onChange={(e) => setUserData(prev => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      github: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  {userData.socialLinks.github}
                </a>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
              {isEditing ? (
                <input
                  type="url"
                  name="linkedin"
                  value={userData.socialLinks.linkedin}
                  onChange={(e) => setUserData(prev => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      linkedin: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  {userData.socialLinks.linkedin}
                </a>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
              {isEditing ? (
                <input
                  type="url"
                  name="twitter"
                  value={userData.socialLinks.twitter}
                  onChange={(e) => setUserData(prev => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      twitter: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  {userData.socialLinks.twitter}
                </a>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Website</label>
              {isEditing ? (
                <input
                  type="url"
                  name="portfolio"
                  value={userData.socialLinks.portfolio}
                  onChange={(e) => setUserData(prev => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      portfolio: e.target.value
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <a href={userData.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  {userData.socialLinks.portfolio}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills & Languages */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
          
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {isEditing && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Add Skill</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter a skill"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors duration-200"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Languages */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
          
          <div className="space-y-3">
            {userData.languages.map((language, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-900">{language.name}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {language.proficiency}
                </span>
              </div>
            ))}
          </div>
          
          {isEditing && (
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Add Language</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Language name"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select proficiency</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
              <button 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 mt-2"
              >
                Add Language
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;