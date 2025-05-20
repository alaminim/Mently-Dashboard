import Card from './../common/Card';
import icon from './../../public/file-icon.png'
import Image from 'next/image';
import Link from 'next/link';


const HelpCard = () => {
  return (
    <Card size='small' className='!bg-violet-900 opacity-70  mr-8 '>
        <Image src={icon} alt='need-help' height={50} width={50} />
        <h3 className="font-bold">Got some questions, enquires or need help</h3>
<Link href='' className='text-amber-300 underline' >Visit Mently Help Desk Here</Link>
      
    </Card>
  )
}

export default HelpCard
