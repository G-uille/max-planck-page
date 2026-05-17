import * as React from 'react';

import HeroSection from '../../components/hero/HeroSection';
import TeachSection from '../../components/teach/TeachSection';
import ModesSection from '../../components/modes/ModesSection';
import AboutUsSection from '../../components/about-us/AboutUsSection';
import SentenceSection from '../../components/sentence/SentenceSection';
import NewFaceSection from '../../components/new-face/NewFaceSection';
import FAQSection from '../../components/faq/FAQSection';
import ContactUsSection from '../../components/contact-us/ContactUsSection';
import Footer from '../../components/footer/Footer';

const Store: React.FC = () => {
    return (
        <main className="ap-overflow-hidden ap-bg-[#F7F1E5]">

            <HeroSection />

            <TeachSection />

            <section id="modes">
                <ModesSection />
            </section>

            <section id="about">
                <AboutUsSection />
            </section>

            <SentenceSection />

            <NewFaceSection />

            <section id="faq">
                <FAQSection />
            </section>

            <section id="contact">
                {/* <ContactUsSection /> */}
            </section>

        </main>
    );
};

export default Store;