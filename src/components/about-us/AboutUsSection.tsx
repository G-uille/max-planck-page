import * as React from 'react'
import useDisplay from '../../hooks/use-display'
import circulo from '../../assets/png/circulo.png'
import aboutUs from '../../pages/store/data/about_us'
import SectionFadeIn from '../common/SectionFadeIn'

const AboutUsSection: React.FC = () => {
    const display = useDisplay()
    return (
        <SectionFadeIn className={` ap-pb-0 ap-flex ap-flex-col ap-gap-2 ${display.mdAndDown ? 'ap-px-0 ap-pt-0' : 'ap-px-32'}`}>
            <div className={` ap-py-7 ${display.mdAndDown ? 'ap-px-4' : 'ap-px-[8vw] ap-pt-0'}`}>
                <div className={`ap-container ap-flex ap-flex-col  ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-3'}`}>
                    <div>
                        <span className={`ap-text-white ${display.mdAndDown ? 'ap-text-sm' : 'ap-text-sm'}`}>Quiénes somos</span>
                        <h1 className={`ap-font-semibold ap-text-primary ${display.mdAndDown ? 'ap-text-lg' : 'ap-text-xl'}`}>
                            Sobre <span className='ap-text-white'>nosotros</span>
                        </h1>
                    </div>
                    <div className={`ap-flex ap-items-center ${display.mdAndDown ? 'ap-flex-col' : 'ap-gap-6'}`}
                        style={{
                            backgroundImage: `url(${circulo})`,
                            backgroundSize: '50%',
                            backgroundRepeat: 'repeat',
                            backgroundPosition: '0% 50%',
                        }}
                    >
                        <div className={`ap-flex ap-items-start ap-justify-start ${display.mdAndDown ? '' : 'ap-w-full'}`}>
                            <img src={aboutUs.fileUrl} alt='Sobre nosotros' className={`${display.mdAndDown ? 'ap-mt-4' : 'ap-w-full'}`} />
                        </div>
                        <span className={`ap-text-white ${display.mdAndDown ? 'ap-text-sm/6 ap-mt-6 ' : 'ap-w-full'}`}>
                            {aboutUs.text}
                        </span>
                    </div>
                </div>
            </div>
        </SectionFadeIn>
    )
}
export default AboutUsSection;
