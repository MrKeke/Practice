import React from "react";
import _ from 'lodash'

export const NavGen = ({navLinks}) => {

  return(
    <>
    {navLinks.map(({name, icon}) => {
        const id = _.uniqueId()
        return(
          <React.Fragment key={id}>
            <div className='bg-white w-32 h-24 text-center rounded-xl'>
              <img src={icon} alt={"#"} className='mx-auto mt-4 h-10 w-10'/>
              <p className='font-bold'>{name}</p>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
