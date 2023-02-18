import React from 'react'
import { useDispatch, useSelector } from "react-redux"

export const AllData = () => {

  const data = useSelector((state)=> state.productHandler.filtered)
  console.log(data)
  return (
    <div><h2>All Data</h2>
      {data? data.map((ele, id) => {
                return (
                    <div key={id}>
                        <h2>{id}</h2>
                        <p>capsule_serial- {ele.capsule_serial}</p>
                        <p>capsule_id -{ele.capsule_id}</p>
                        <p>status- {ele.status}</p>
                        <p>details -{ele.details}</p>
                        <p>original_launch -{ele.original_launch}</p>
                        <br />
                    </div>
                )
            }) : "lodding"}
    </div>
  )
}
