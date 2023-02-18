import React, { useEffect } from 'react'
// import { AllData } from './AllData';
import { useDispatch, useSelector } from "react-redux"
import { STOR } from "../redux/action/action"

export const DataGrid = () => {
    // https://api.spacexdata.com/v3/capsules
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true)
    // const [err, setErr] = useState(null);

    // const proData = useSelector((state) => state.productHandler.products)
    const proData = useSelector((state) => state.productHandler.filtered)
    console.log("pro", proData)

    const dispatch = useDispatch()
    const fetchData = async () => {
        const resp = await fetch('https://api.spacexdata.com/v3/capsules')
        const capData = await resp.json();
        dispatch(STOR(capData))
    }


    useEffect(() => {
        if (proData.length <= 0) {
            fetchData()
        }
    }, [])


    return (
        <div id='dataSection'>
            <h2>this is capcules</h2>
            <div className="cartCont">
                {proData ? proData.map((ele, id) => {
                    return (
                        <div key={id}>
                            <h2>{id}</h2>
                            <p>capsule_serial- {ele.capsule_serial}</p>
                            <p>capsule_id -{ele.capsule_id}</p>
                            <p>status- {ele.status}</p>
                            <p>details -{ele.details}</p>
                            <p>original_launch -{ele.original_launch}</p>
                            <p>original_launch -{ele.type}</p>
                            <br />
                        </div>
                    )
                }) : "lodding"}
            </div>

        </div>
        //   <div className='datagrid'>
        //       <div className="container">
        //           {console.log(data.length)} 
        //           <h2>This Capsule data page..</h2>
        //           {data.map((items, index) => {
        //               <> 
        //                  {/* <AllData key={index} cdata={items} /> */}
        //               </>

        //           })}

        //           <AllData/>     

        //       </div>

        // </div>
    )
}
