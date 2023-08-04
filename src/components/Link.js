import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

function Link({to,children,className,activatedClassName}){

    const {navigate,currentPath}=useNavigation();

    const classes=classNames("text-blue-500",className,currentPath===to && activatedClassName)

    const handleChange=(event)=>{

        if(event.metaKey || event.ctrlKey)
        return 
        event.preventDefault();
        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleChange}>{children}</a>

}

export default Link;