import React from 'react';



const TextInputregister = React.forwardRef(
    (
        { type, placeholder, styles, label, labelStyles, register, name, error },
        ref

    ) => {
        return (
            <div className='w-full text-ascent-bg flex  flex-col mt-3'>
                {label && (
                    <p className={`text-ascent-bg text-sm med mb-2 font-semibold${labelStyles}`}>{label}</p>
)}
                <div>
                    <input type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    ref={ref}
                        className={`bg-bg2 border-rounded border-2 border-bg hover:bg- reg border-dashed-custom outline-none text-sm text-ascent-3 px-4 py-3 placeholder:text-ascent-4 ${styles}`}
                        {...register}
                        aria-invalid={error ? "true" : "false"}
                    
                    
                    
                    
                    
                    />
                </div>
                {error && (
                <span className= 'text-xs reg text-ascent-3 mt-2'>{error}</span>
                )}
            </div>
        )
    });


export default TextInputregister;
