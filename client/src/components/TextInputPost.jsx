import React from 'react';



const TextInputPost = React.forwardRef(
    (
        { type, placeholder, styles, label, labelStyles, register, name, error },
        ref

    ) => {
        return (
            <div className='w-full text-ascent-1 flex  flex-col '>
                {label && (
                    <p className={`text-ascent-1 text-sm medit mb-2 ${labelStyles}`}>{label}</p>
)}
                <div>
                    <input type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    ref={ref}
                        className={`bg-secondary rounded border-2 border-grey ml-3 reg mr-3 outline-none text-sm text-bg2 placeholder:text-ascent-4${styles}`}
                        {...register}
                        aria-invalid={error ? "true" : "false"}
                    
                    

                    
                    />
                </div>
                {error && (
                <span className= 'text-xs reg ml-5 mt-2'>{error}</span>
                )}
            </div>
        )
    });


export default TextInputPost;
