import React from "react";
import _ from "lodash"

export const NavGen = ({navLinks}) => {

  return(
    <>
<<<<<<< HEAD
      {navLinks.map(({name, icon,ref}) => {
        console.log(ref)
        const handleClick = () => {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
=======
    {navLinks.map(({name, icon,ref}) => { 
      const handleClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
>>>>>>> ead90d0 (some change)
        const id = _.uniqueId()
        return(
          <React.Fragment key={id}>
            <div onClick={handleClick}  className='bg-white w-32 h-24 text-center rounded-xl border-[1px] hover:cursor-pointer'>
              <img src={icon} alt="#" className='mx-auto mt-4 h-10 w-10 '/>
              <p className='font-bold'>{name}</p>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}