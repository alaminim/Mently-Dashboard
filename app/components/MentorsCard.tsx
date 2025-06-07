import React from 'react'
import Card from '../common/Card'
import Toolkit, { Title } from './Toolkit'
import UserProfile from './UserProfile'
import Image from 'next/image'
import avatar from './../../public/avatar2.png';

const MentorsCard = () => {
  return (
    <>
    <Card size='medium' className='mt-4 !rounded'>
      <Toolkit>
        <Title>Mentors</Title>
        </Toolkit>
      <UserProfile>
  <Image src={avatar} alt="" className="w-8 h-8" />
  <span className="flex flex-col">
    <h2 className="font-bold text-sm text-black">John Doe</h2>
    <p className="text-gray-500 text-xs">Developer</p>
  </span>
</UserProfile>
<UserProfile>
  <Image src={avatar} alt="" className="w-8 h-8" />
  <span className="flex flex-col">
    <h2 className="font-bold text-sm text-black">John Doe</h2>
    <p className="text-gray-500 text-xs">Developer</p>
  </span>
</UserProfile>
    </Card>
    </>
  )
}

export default MentorsCard