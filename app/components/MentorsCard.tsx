import React from 'react'
import Card from '../common/Card'
import Toolkit from './Toolkit'
import { CirclePlus } from 'lucide-react'
import UserProfile from './UserProfile'

const MentorsCard = () => {
  return (
    <>
    <Card size='medium' className='mt-4 !rounded'>
      <Toolkit title={'Mentors'}>
        <CirclePlus className='w-5 h-5 text-violet-800' />
        </Toolkit>
      <UserProfile name={'Maxwell Smith'} title={'Product Designer'}/>
      <UserProfile name={'Adeati Samuel'} title={'Product Designer'}/>
    </Card>
    </>
  )
}

export default MentorsCard