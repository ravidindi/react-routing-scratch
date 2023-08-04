import { useState,useEffect,useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";
function Dropdown({options,value,onChange}){

    const [isOpen,setIsOpen]=useState(true);

    

    const handleOpen=()=>setIsOpen(value=>!value)

    const handleOption=(option)=>{
        if(!option){
            return;
        }
        handleOpen();
        onChange(option?.value);

    }

    const closeDropdown=(event)=>{
        if(!elRef?.current?.contains(event.target)){
            setIsOpen(false);
        }
    }

    const elRef=useRef();

    useEffect(
        ()=>{
            console.log("effect executed")
            document.addEventListener("click",closeDropdown,true);
            return ()=>{document.removeEventListener("click",closeDropdown)}
        },[]
    )

    const renderedItems=options.map((option)=><div className="hover:bg-sky-100 rouded cursor-pointer p-1" onClick={()=>handleOption(option)} key={option.value}>{option.label}</div>)
return <div  ref={elRef} className="w-48 relative">
<Panel onClick={handleOpen} className="flex items-center justify-between cursor-pointer">
    {value ||"Select..."}
    <GoChevronDown className="text-lg"/>
    </Panel>
{isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
</div>
}

export default Dropdown;