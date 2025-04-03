
function Button({step, text, border, hover, background, others}) {
    return (
        <button className={`flex items-center px-4 py-2 text-lg ${text} 
                            ${border} ${hover} ${background} ${others}
                            `} >  
        <button/>
            {step}
        </button>
    ) 
}

export default Button; 
