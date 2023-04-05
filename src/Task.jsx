import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserTask } from './redux/taskSlice';
export default function Task() {
const [checkCompleted,setComplated]=useState()
 const dispatch = useDispatch()
 const {data} =useSelector(state=>state.allTask)
 console.log(data);
 const customStyles = {
  head: {
    style: {
      fontSize: "0.8rem",
      fontWeight: "bold",
      
    },
  },
  headCells: {
    style: {
      backgroundColor: "#eeeeee",
      fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 600,
fontSize: '15px',
lineHeight: '18px',
/* identical to box height */


color: '#232323'
    },
  },
  rows: {
    style: {
      // marginTop: "6px",
      backgroundColor: "#ffffff",
    },
  },
  cells: {
    style: {
      color: "#212324",
    },
  },
};
  const columns = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'completed',
        selector: row => <div>
          {/* {  setComplated(row.completed)} */}
          {/* {row.completed===true?"true":"false"} */}
          <input type="checkbox" defaultChecked={row.completed} onChange={(e)=>handleChange(e.target.checked,row.id)} className='ms-2 pt-3' />
        </div>

        ,
    },
];

const handleChange=(value,id)=>{
  console.log(value,id);
  // dispatch(fetchUserTask({completed:value,id:id}))
}
useEffect(()=>{
    dispatch(fetchUserTask())
},[])
  return (
    <div style={{margin:"0% 20%"}}>
        <DataTable
         customStyles={customStyles}
         highlightOnHover
         pointerOnHover
         theme="solarized"
            columns={columns}
            data={data}
        /> 
    </div>
  )
}
