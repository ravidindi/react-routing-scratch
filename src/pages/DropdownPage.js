import { useState } from 'react';
import Dropdown from '../components/Dropdown';
function DropdownPage(){

  const options=[
    { label:'Red' , value:'red'},
    { label:'Blue' , value:'blue'},
    { label:'Green' , value:'green'}
  ]

  const [selected,setSelected]=useState(null);

  const handleSelected=(option)=>{setSelected(option)}
   
   return <Dropdown options={options} value={selected} onChange={handleSelected}/>
}
 export default DropdownPage;