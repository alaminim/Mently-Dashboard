import React from 'react'
import Card from '../common/Card'
import Toolkit from './Toolkit'
import Activities from './Activities'

const ActivityCard = () => {
  return (
    <>
    <Card size='medium' className='mt-4 !rounded h-auto'>
      <Toolkit title={'Recent Activities'}/>
      <Activities name={'KYC verification'} title={'45 new persons just signed up on mently'} timer={'45 minutes ago'}/>
      <Activities name={'New User Sign Up'} title={'15 new persons completed their profile on mently'} timer={'55 minutes ago'}/>
      <Activities name={'Withdrawal Request'} title={'Zoho Admin Requested for widthrawal from wallet'} timer={'1 hour ago'}/>
    </Card>
    </>
  )
}

export default ActivityCard