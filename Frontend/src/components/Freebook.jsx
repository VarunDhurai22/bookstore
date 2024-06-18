import React from 'react'
import list from "../../public/list.json"
function Freebook() {
   const filterData=list.filter((data)=>data.category==="Free");
   console.log(filterData)
  return (
  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
       <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste nam id vero odit nostrum repellat assumenda, pariatur harum quia earum consequatur quisquam consectetur laboriosam natus necessitatibus. Aut, molestias similique.</p>
    </div>
  </>
  )
}

export default Freebook