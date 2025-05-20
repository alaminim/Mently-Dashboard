import React from 'react'
import Image from 'next/image'
import bg from './../../public/bgImage1.jpg'
import EventCard from '../common/EventCard'
import { Calendar, Clock, CircleUser, ForwardIcon } from 'lucide-react'
import Button from '../common/Button'
import Toolkit from '../components/Toolkit'

const GroupCalls = () => (
  <div className='flex flex-col bg-white mt-2 w-3/4 rounded'>
    <Toolkit title={'Group Calls'}/>
    <div className="flex justify-around scrollable">
    <EventCard size='large' className='flex flex-col justify-between'>
    <Image src={bg} alt={''} width={100} height={100} className='w-full h-1/3 rounded mb-1' />
      <span className="w-1/4 bg-green-200 text-green-800 rounded p-1 text-sm">Ongoing</span>
      <p className="font-medium">Weekly Meeting - Product Demo Review with Testers</p>
      <hr className="mb-2 bg-gray-500" />
      <div className="Timers flex justify-between ">
        <p className="text-sm text-gray-500 flex">
          <Calendar className='w-4 h-4'/>
          Mon. Jul 30, 2024
        </p>
        <p className="text-sm text-gray-500 flex">
          <Clock className='w-4 h-4'/>
          9:00 - 11:00AM
        </p>
      </div>
      <div className="study_group flex justify-between">
        <p className="text-sm text-gray-500 flex">
          <CircleUser className='w-5 h-5'/>
          UX strategy Study Group
        </p>
        
        <p className="text-sm text-gray-500">
          Members here
          <CircleUser className='w-4 h-4'/>
        </p>
        
      </div>
      <div className="flex justify-between">
        <Button children={"View Participants"} className={''} size='medium' variant='secondary' />
        <Button className=''>Join Now
          <ForwardIcon className='w-4 h-4'/>
        </Button>
      </div>
      </EventCard>
      <EventCard size='large' className='flex flex-col justify-between'>
    <Image src={bg} alt={''} width={100} height={100} className='w-full h-1/3 rounded mb-1' />
      <span className="w-1/4 bg-green-200 text-green-800 rounded p-1 text-sm">Ongoing</span>
      <p className="font-medium">Weekly Meeting - Product Demo Review with Testers</p>
      <hr className="mb-2 bg-gray-500" />
      <div className="Timers flex justify-between ">
        <p className="text-sm text-gray-500 flex">
          <Calendar className='w-4 h-4'/>
          Mon. Jul 30, 2024
        </p>
        <p className="text-sm text-gray-500 flex">
          <Clock className='w-4 h-4'/>
          9:00 - 11:00AM
        </p>
      </div>
      <div className="study_group flex justify-between">
        <p className="text-sm text-gray-500 flex">
          <CircleUser className='w-5 h-5'/>
          UX strategy Study Group
        </p>
        
        <p className="text-sm text-gray-500">
          Members here
          <CircleUser className='w-4 h-4'/>
        </p>
        
      </div>
      <div className="flex justify-between">
        <Button children={"View Participants"} className={''} size='medium' variant='secondary' />
        <Button className='' disabled={true}>Join Now
          <ForwardIcon className='w-4 h-4'/>
        </Button>
      </div>
      </EventCard>
      <EventCard size='large' className='flex flex-col justify-between'>
    <Image src={bg} alt={''} width={100} height={100} className='w-full h-1/3 rounded mb-1' />
      <span className="w-1/4 bg-green-200 text-green-800 rounded p-1 text-sm">Ongoing</span>
      <p className="font-medium">Weekly Meeting - Product Demo Review with Testers</p>
      <hr className="mb-2 bg-gray-500" />
      <div className="Timers flex justify-between ">
        <p className="text-sm text-gray-500 flex">
          <Calendar className='w-4 h-4'/>
          Mon. Jul 30, 2024
        </p>
        <p className="text-sm text-gray-500 flex">
          <Clock className='w-4 h-4'/>
          9:00 - 11:00AM
        </p>
      </div>
      <div className="study_group flex justify-between">
        <p className="text-sm text-gray-500 flex">
          <CircleUser className='w-5 h-5'/>
          UX strategy Study Group
        </p>
        
        <p className="text-sm text-gray-500">
          Members here
          <CircleUser className='w-4 h-4'/>
        </p>
        
      </div>
      <div className="flex justify-between">
        <Button children={"View Participants"} className={''} size='medium' variant='secondary' />
        <Button className=''>Join Now
          <ForwardIcon className='w-4 h-4'/>
        </Button>
      </div>
      </EventCard>
      </div>
  </div>
)

export default GroupCalls
