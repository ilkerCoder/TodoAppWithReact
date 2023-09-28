import React ,{useState} from 'react'

export default function Filter ({setFilterText}) {
    const[filterInput , setFilterInput]=useState("")  
    
    let onChangeHandler=(e)=>{
        setFilterInput(e.target.value)
        setFilterText(e.target.value)
    }
    return (
    <div><input
    class="new-todo" 
    placeholder="FİLTER TASK"
    value={filterInput}
 
    onChange={onChangeHandler}
                    
     /></div>
  )
}

