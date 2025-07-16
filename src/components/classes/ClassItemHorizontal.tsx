import * as React from "react";
import {Classes, Fee} from "../../models/Classes.model";
import Rating from "../common/Rating";
import {numberFormatGuaranies} from "../../utils/numberFormat";

const ClassItemHorizontal: React.FC<Partial<Classes>> = ({ name, teacher, rating, fee, mode, price, fileUrl, shortDescription }) => {
    return(
        <div>
            <div className="ap-py-4 ap-flex ap-gap-5 ap-w-full ap-cursor-pointer ap-border-b ap-border-gray-300">
                <div className="ap-w-full ap-max-h-36 ap-max-w-56 ap-overflow-hidden ap-rounded-lg ap-flex ap-relative ap-items-center">
                    <img className="ap-w-full" src={fileUrl} alt="image" />
                </div>
                <div className="ap-min-h-36 ap-w-full ap-flex ap-justify-between ap-items-start">
                    <div className="ap-flex ap-flex-col ap-justify-around ap-h-full ">
                        <h1 className="ap-font-semibold ap-uppercase ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">
                            {name}
                        </h1>
                        <span className="ap-font-normal ap-mt-1 ap-mb-2 ">{shortDescription}</span>
                        <span className="ap-font-extralight ap-underline ap-text-sm ">{teacher.name}</span>
                        <Rating />
                    </div>
                    <div className="ap-w-5/12 ap-flex ap-items-end ap-justify-end">
                        <div className="ap-flex ap-gap-2 ap-items-center">
                            <span className="ap-text-xl ap-justify-end ap-font-semibold">{numberFormatGuaranies(price)}</span>
                            { fee === Fee.CLASE && <span className="ap-text-[12px] ap-font-light">por clase</span>}
                            { fee === Fee.HORA && <span className="ap-text-[12px] ap-font-light">por hora</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClassItemHorizontal;
