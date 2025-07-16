import * as React from "react";
import useDisplay from '../../hooks/use-display'

const Rating : React.FC<{ count: number, isDark?: boolean }> = ({ count, isDark = false }) =>{
    const display = useDisplay()

    return (
        <div className="ap-flex ap-items-center">
            <span className={`ap-font-semibold ${isDark ? 'ap-text-white' : ''} ${display.smAndDown ? 'ap-text-sm' : 'ap-text-sm'}`}>4.6</span>
            <svg className="ap-w-4 ap-h-4 ap-text-yellow-300 ap-ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="ap-w-4 ap-h-4 ap-text-yellow-300 ap-ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="ap-w-4 ap-h-4 ap-text-yellow-300 ap-ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="ap-w-4 ap-h-4 ap-text-yellow-300 ap-ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="ap-w-4 ap-h-4 ap-ms-1 ap-text-gray-300 ap-dark:text-gray-500" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span className={`ap-ml-2 ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ${isDark ? 'ap-text-white' : ''} ${display.smAndDown ? 'ap-text-[12px]' : 'ap-text-[12px]'}`}>(200) opiniones</span>
        </div>
    )
}

export default Rating;
