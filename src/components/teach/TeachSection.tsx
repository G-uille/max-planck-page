import * as React from 'react'
import ClassItem from "../../components/classes/ClassItem";
import useDisplay from '../../hooks/use-display'
import Carousel from "react-multi-carousel";
import classesData from '../../pages/store/data/classesData';
import useInView from '../../hooks/use-inView'
import SectionFadeIn from '../../components/common/SectionFadeIn';

const TeachSection: React.FC = () => {
    const display = useDisplay()
    const { ref, isVisible } = useInView()
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1700 },
            items: 4,
            slidesToSlide: 1
        },
        desktop2: {
            breakpoint: { max: 1700, min: 1300 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1300, min: 1000 },
            items: 3,
            slidesToSlide: 3
        },
        tablet2: {
            breakpoint: { max: 1000, min: 700 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <SectionFadeIn className={`ap-py-12 ap-pb-0 ap-flex ap-flex-col  ${display.mdAndDown ? 'ap-px-0 ap-pt-4' : 'ap-px-32 ap-gap-2 ap-pt-3'}`}>
            <div className={`  ${display.mdAndDown ? 'ap-px-4' : 'ap-px-[8vw] ap-pt-3'}`}>
                <div className={` ap-container ap-flex ap-flex-col  ${display.mdAndDown ? 'ap-gap-2' : 'ap-gap-5'}`}>
                    <div>
                        <h1 className={`ap-font-semibold ap-text-white ${display.mdAndDown ? 'ap-text-lg ap-mb-0' : 'ap-text-xl ap-mb-1'}`}>Conocé nuestras <span className='ap-text-primary'>áreas de enseñanza</span></h1>
                        <p className={`ap-text-white ${display.mdAndDown && 'ap-hidden' } ${display.mdAndDown ? 'ap-text-sm ap-mb-2' : 'ap-text-sm'}`}>Descubrí todo lo que podés aprender con nosotros.</p>
                    </div>
                    <div className="ap-w-full ap-py-0">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            { classesData.map((item, index) =>
                                <div key={index} className="ap-w-full ap-h-full ap-p-1">
                                    <ClassItem
                                        name={item.name}
                                        fileUrl={item.fileUrl}
                                        mode={item.mode}
                                        currentClass={item}
                                        shortDescription={item.shortDescription}
                                    />
                                </div>)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
    </SectionFadeIn>    
)
}
export default TeachSection;