import className from "classnames"


function Button(
    {
    children,
    primary,
    secondary,
    danger,
    outlined,
    rounded,
    success,
    warning,
    ...rest
   })
{   const classes="px-12 py-1.5 border flex my-1.5 mx-1.5 items-center"

    const finalClassNames=className(classes,rest.className,
        {
            "text-green-500":outlined && success,
            "text-yellow-500":outlined && warning,
            "text-red-500":outlined && danger,
            "text-gray-500":outlined && secondary,
            "bg-blue-500 border-blue-500 ":primary,
            "bg-gray-900 border-gray-900 ":secondary,
            "bg-red-500 border-red-500 ":danger,
            "bg-yellow-500 border-yelllow-500 ":warning,
            "bg-green-500 border-green-500 ":success,
            "rounded-2xl":rounded,
            "bg-white":outlined,
            "text-white":!outlined,
            "text-blue-500":outlined && primary,
            


        }
        )

    return <button {...rest} className={finalClassNames}>{children}</button>
}

Button.propTypes={
checkVariaationValue:({primary,secondary,danger,success,warning})=>{
    const count=Number(!!primary)+
                Number(!!secondary)+
                Number(!!success)+
                Number(!!danger)+
                Number(!!warning)

    if(count>1){
        throw new Error("App can't have more than one variation set!!")
    }
}
}
export default Button;