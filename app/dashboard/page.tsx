import React from "react"



const page = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        Hello This is the central page
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12"></div>
    </div>
  )
}

export default page
