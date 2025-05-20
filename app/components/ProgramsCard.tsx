import Link from "next/link"
import Card from "../common/Card"
import Button from "../common/Button"
import Toolkit from "./Toolkit"
import Logo from './../../public/bgImage1.jpg';
import Image from "next/image";
import EventCard from "../common/EventCard";


const ProgramsCard = () => {
  return (
    <div className="flex flex-col items-center bg-white w-auto m-2 rounded h-auto">
        <Toolkit title={"Programs"} />
      
      <EventCard size="medium" className="mb-4 bg-gray-50 text-violet-800 p-5 h-auto" >
   <Image src={Logo} alt="Program Logo" width={50} height={50} className="w-full h-1/3 rounded-2xl " />
        <p className="text-xs">This program is a hands-on guide for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
<div className="flex justify-end gap-4">
   <Button size="small" variant="secondary" className="">View Details</Button>
   <Button size="small" variant="primary" className="">Analysis</Button>

</div>

        </EventCard>
        <Card size="small" className="mb-4 bg-gray-50 text-violet-800 px-auto">
        <h2 className="text-xl">Card 2</h2>
        <Image src={Logo} alt="Program Logo" width={50} height={50} />
        <p className="text-xs">This program is a hands-on guide for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
<div className="flex justify-end gap-4">
<Button size="small" variant="secondary" className="">View Details</Button>
<Button size="small" variant="primary" className="">Analysis</Button>

</div>

        </Card>
        <Card size="small" className="mb-4 bg-gray-50 text-violet-800 px-auto">
        <h2 className="text-xl">Card 3</h2>
        <Image src={Logo} alt="Program Logo" width={50} height={50} />
        <p className="text-xs">This program is a hands-on guide for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
<div className="flex justify-end gap-4">
<Button size="small" variant="secondary" className="">View Details</Button>
<Button size="small" variant="primary" className="">Analysis</Button>
</div>

        </Card>
    </div>
  )
}

export default ProgramsCard
