import React from 'react';



const TextInput = React.forwardRef(
    (
        { type, placeholder, styles, label, labelStyles, register, name, error },
        ref

    ) => {
        return (
            <div className='w-full text-ascent-1 flex  flex-col mt-3'>
                {label && (
                    <p className={`text-ascent-1 text-sm med mb-2 ${labelStyles}`}>{label}</p>
)}
                <div>
                    <input type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    ref={ref}
                        className={`bg-secondary rounded border-2 border-ascent-1 reg border-dashed-custom outline-none text-sm text-bg2 px-4 py-3 placeholder:text-ascent-4  ${styles}`}
                        {...register}
                        aria-invalid={error ? "true" : "false"}
                    
                    

                    
                    />
                </div>
                {error && (
                <span className= 'text-xs reg mt-2'>{error}</span>
                )}
            </div>
        )
    });


export default TextInput;
