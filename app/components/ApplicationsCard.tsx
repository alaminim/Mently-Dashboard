import React from 'react'
import Toolkit from './Toolkit'
import UserProfiles from './UserProfiles'

const ApplicationsCard = () => {
  return (
    <div className='bg-white w-1/3 shadow-md rounded mt-4'>
        <Toolkit>
          <h2>Applications</h2>
          </Toolkit>
        <div className="mentors mb-4">
            <h4 className="text-gray-600 text-base p-2">Mentors</h4>
        <UserProfiles name={'Max Jonathan'} email={'maxjonathan@well.com'} />
        </div>
        <hr className="text-gray-200 w-full p-4"  />
        <div className="mentors mb-4">
            <h4 className="text-gray-600 text-base p-2">Students</h4>
        <UserProfiles name={'John Doe'} email={'doe-john@does.com'} />
        <UserProfiles name={'Ast Pinns'} email={'asstpinss@mit.com'} />
        <UserProfiles name={'Hopkins Jenin'} email={'jenhopkins@eu.com'} />
        <UserProfiles name={'Kingz Jenbo'} email={'jenhopkins@eu.com'} />
        </div>
    </div>
  )
}

export default ApplicationsCard
