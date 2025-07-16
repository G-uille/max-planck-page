import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import '../../assets/css/classGallery.css';
import useDisplay from '../../hooks/use-display'
import best1 from '../../assets/jpg/best-category-1.png'
import best2 from '../../assets/jpg/best-category-2.png'
import best3 from '../../assets/jpg/best-category-3.png'
import best4 from '../../assets/jpg/best-category-4.png'
import best5 from '../../assets/jpg/best-category-5.png'
import best6 from '../../assets/jpg/fisica.jpg'

export const PhotoService = [
    { itemImageSrc: best1, thumbnailImageSrc: best1, alt: 'Description for Image 1', title: 'Title 1' },
    { itemImageSrc: best2, thumbnailImageSrc: best2, alt: 'Description for Image 2', title: 'Title 2' },
    { itemImageSrc: best3, thumbnailImageSrc: best3, alt: 'Description for Image 1', title: 'Title 1' },
    { itemImageSrc: best4, thumbnailImageSrc: best4, alt: 'Description for Image 1', title: 'Title 1' },
    { itemImageSrc: best5, thumbnailImageSrc: best5, alt: 'Description for Image 1', title: 'Title 1' },
    { itemImageSrc: best6, thumbnailImageSrc: best6, alt: 'Description for Image 6', title: 'Title 1' },
]

const BasicDemo: React.FC = () => {
    const [images, setImages] = useState(null);
    const [thumbnailsPosition, setThumbnailsPosition] = useState<'bottom' | 'left'>('bottom');
    const display = useDisplay()

    const responsiveOptions = [
        { breakpoint: '991px', numVisible: 5 },
        { breakpoint: '767px', numVisible: 5 },
        { breakpoint: '575px', numVisible: 3 }
    ];

    // Detectar ancho de pantalla y cambiar la posición de los thumbnails
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setThumbnailsPosition('left'); // Mobile
            } else {
                setThumbnailsPosition('bottom'); // Desktop
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setImages(PhotoService);
    }, []);

    const itemTemplate = (item) => {
        return (
            <div className='ap-w-auto ap-overflow-hidden ap-max-h-64 ap-flex ap-items-center ap-justify-center'>
                <img className='ap-w-full' src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
            </div>
        )
    }

    const thumbnailTemplate = (item) => {
        return (
            <div className={` ap-overflow-hidden ap-max-h-32 ap-flex ap-items-center ap-justify-center ${display.smAndDown ? 'ap-w-20 ap-px-3' :'ap-w-full'}`}>
                <img className='ap-w-full ap-flex ap-max-h-48' src={item.thumbnailImageSrc} alt={item.alt} />
            </div>
        )
    }

    return (
        <div className="ap-w-full ap-bg-[#191919] ap-flex ap-flex-col ap-justify-center ap-items-center">
            <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                style={{ width: '100%' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                thumbnailsPosition={thumbnailsPosition}
                autoPlay
                transitionInterval={2000} 
                circular
            />
        </div>
    )
}

export default BasicDemo;
