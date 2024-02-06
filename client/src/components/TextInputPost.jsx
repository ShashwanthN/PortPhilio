import React, {useState} from 'react';

import { MdUploadFile } from 'react-icons/md';

const TextInputPost = React.forwardRef(
    (
        { type, placeholder, styles, label, labelStyles, register, name, error, placeholderStyles },
        ref

    ) => {
        const [file, setFile] = useState(null);
        return (
            <div className='w-full text-ascent-1 flex flex-col'>
                {label && (
                    <p className={`text-ascent-1 text-sm med mb-2 ${labelStyles}`}>{label}</p>
)}
                <div className='flex'>
                    <input type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    ref={ref}
                        className={`bg-primary border-2 flex border-grey reg outline-none text-sm text-bg2  placeholder:secondary h-12${styles}`}
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
