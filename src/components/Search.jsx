import React from 'react'
import "./SearchStyles.css"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { LUNCH, STATUS, TYPE } from '../redux/action/action'

export const Search = () => {
  const[In_value, setIn_Value]= useState({
    type:"",
    lunch:"",
    statuse:""
  })

  const dispatch = useDispatch()

  const change = (e)=>{
    const{value, name}= e.target;
    setIn_Value({
      ...In_value,[name]:value
    })
  }
console.log(In_value)

  const filter= ()=>{
    const{statuse, type, lunch}= In_value
    if(statuse.length>0){
      dispatch(STATUS(statuse))
    }else if(lunch.length>0){
      dispatch(LUNCH(lunch))
    }else{
      dispatch(TYPE(type))
    }
  }
  return (
    <div className='search'>
      <div className="container">
        <h2>Search By Status / Type/ Original Launch </h2>
          {/* <form> */}
            <div className="first-row">
              <input type="text" name='statuse' value={In_value.statuse} onChange={change} placeholder='Search by status' />
            <input type="text" name='lunch' value={In_value.lunch} onChange={change}  placeholder='Search by  original_launch'/>
          </div>
          <div className="last-row">
              <input type="text" name='type' value={In_value.type} onChange={change}  placeholder='Search by type'/>
              <input type="submit" onClick={()=>filter()} value = "Search"/>
          </div>
        {/* </form> */}
      </div>
    </div>
  )
}
