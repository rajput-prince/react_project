import React,{useState} from "react";
function DataBinding(){
    const[data, setData]=useState({
        name:"Mohan",
        age:23
    })
    const handleChange=(event)=>{
        let value=event.target.value;
        setData({
            ...data,name:value
        });
    }
    return(
        <div>
            <h2>Data Binding</h2>
            <h4>
                One Way Binding: {data.name}-{data.age}
                
            </h4>
            <input type="text" value={data.name} onChange={handleChange}/>
        </div>
    )
}
export default DataBinding;