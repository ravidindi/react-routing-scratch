import Button from "../components/Button";
import { GoAlertFill,GoEye } from "react-icons/go";
function ButtonPage(){

    const handleClick=()=>{
        console.log("click!!")
    }
    return <div>
        <div>
            <Button primary rounded outlined onClick={handleClick}>
                <GoEye/>
                Get Items</Button>
        </div>
        <div>
            <Button secondary >Delete Items</Button>
        </div>
        <div>
            <Button success rounded>Set Items</Button>
        </div>
        <div>
            <Button danger  outlined>
                <GoAlertFill/>
                Click Items
                </Button>
        </div>
        <div>
            <Button warning>Sample Items</Button>
        </div>
    </div>
}
 export default ButtonPage;