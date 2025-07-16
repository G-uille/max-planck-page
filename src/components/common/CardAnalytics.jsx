import React from 'react';
import { numberFormat } from '../../utils/validator';


const CardAnalytics = ({ title, amount }) =>{
  return (
    <div className="ts-shadow-none ts-flex ts-flex-col ts-items-center ts-p-4 ts-min-h-40 ts-justify-center ts-rounded-xl ts-bg-slate-200">
      <h2 className="ts-text-xl ts-font-bold">
        { title }
      </h2>
      <span className="ts-text-4xl ts-mt-3 ts-text-black">{ numberFormat(amount) }</span>
    </div>
  )
}

export default CardAnalytics;
