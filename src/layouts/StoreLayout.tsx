import * as React from 'react';
import StoreHeader from "../components/header/StoreHeader";
import Footer from "../components/footer/Footer";

const StoreLayout: React.FC<{ children: any }> = ({ children }) => {
    return(
        <div>
            <StoreHeader />
            <div> {children} </div>
            <Footer/>
        </div>
    )
};
export default StoreLayout;
