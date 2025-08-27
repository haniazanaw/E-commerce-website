interface ButtonProps{
    buttonText: string,
    variant: string,
    onclickHandler: () => void;
    icon?: React.ReactNode
}
const Button = ({buttonText, variant, onclickHandler, icon}: ButtonProps)=>{
    const buttonVariants=()=>{
        switch(variant){
            case "primary":
                return 'bg-black text-white p-2  '
            case "secondary":
                return 'bg-pink-700 text-white border p-3 w-full border-green-500'
            case "newBtn":
                    return 'bg-pink-700  text-white p-2  '
            case "google":
                return 'bg-white text-black outline p-2 w-full relative';
            default:
                return'  text-white p-2 rounded-sm w-full'
        }
    }
    const variantStyles = buttonVariants();
    return(
        <button className={`${variantStyles} px-[12px] cursor-pointer rounded-md border-none`}
       
        onClick = {onclickHandler}>
            {icon && <span>{icon}</span>}
            {buttonText}
        </button>
    )
}
export default Button;
