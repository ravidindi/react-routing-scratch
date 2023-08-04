import classNames from "classnames";
function Panel({className,children,...rest}){
const finalisedClassnames= classNames(
    "border rounded p-3 shadow bg-white w-full",
    className)

    return <div className={finalisedClassnames} {...rest}>{children}</div>
}

export default Panel;