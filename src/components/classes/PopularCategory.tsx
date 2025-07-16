import * as React from 'react';
import useDisplay from '../../hooks/use-display'

const PopularCategory: React.FC<{ fileUrl: string, name: string }> = ({ fileUrl, name }) => {
    const display = useDisplay()
    return(
        <div className={`ap-overflow-hidden ap-flex ap-items-center ap-rounded-lg ap-relative ${display.mdAndDown ? 'ap-max-h-24' : 'ap-max-h-48'}`}>
            <img className={`ap-w-full ${display.mdAndDown ? '' : 'ap-w-full'}`} alt="image" src={fileUrl} />
            <div className="ap-absolute ap-ml-2 ap-bottom-3 ap-flex ap-w-full ap-justify-center">
                <span className={`ap-bg-secondary ap-border-2 ap-border-black ap-py-1  ap-rounded-3xl ap-flex ap-items-center ap-justify-center ap-gap-2 ${display.mdAndDown ? ' ap-text-sm ap-px-5' : ' ap-text-md ap-px-5 '}`}>
                    {name}
                </span>
            </div>
        </div>
    )
}
export default PopularCategory
