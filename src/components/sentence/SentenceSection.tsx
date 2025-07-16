import * as React from 'react'
import useDisplay from '../../hooks/use-display'
import circulo from '../../assets/png/circulo.png'
import comillas from '../../assets/svg/comillas.svg'

const SentenceSection: React.FC = () => {
    const display = useDisplay()
    return (
        <div className={`ap-bg-[#FFE7A5] ap-pb-0 ap-flex ap-flex-col ap-gap-2 ${display.mdAndDown ? 'ap-px-0 ap-pt-0' : 'ap-px-32'}`}
            style={{ 
            backgroundImage: `url(${circulo})`,
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            }}
        >
            <div className={` ${display.mdAndDown ? 'ap-px-4 ap-py-12' : 'ap-px-[8vw] ap-py-28'}`}>
                <div className={`ap-container ap-flex ap-flex-col   ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-3'} `}>
                    <div className={`ap-flex ap-flex-col ap-justify-center ap-items-center  ${display.mdAndDown ? 'ap-gap-4' : 'ap-gap-6'}`}
                    >    
                        <img src={comillas} alt='Sobre nosotros' className={`${display.mdAndDown ? '' : ''}`} />
                        <span className={`ap-text-[#A89A78] ap-text-center ap-text-lg ${display.mdAndDown ? 'ap-text-sm/6' : 'ap-w-full'}`}>
                            En Max Planck creemos que la educación transforma la forma en que miramos el mundo. Como decía nuestro referente:
                        </span>
                        <span className={`ap-text-black ap-text-center ap-text-lg ${display.mdAndDown ? 'ap-text-sm/6' : 'ap-w-full'}`}>
                            “Cuando cambias la forma en que miras las cosas, las cosas que miras cambian.”
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SentenceSection;