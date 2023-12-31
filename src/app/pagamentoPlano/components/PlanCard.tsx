import React from 'react'
import Link from 'next/link';

import Button from '@/components/Button'
import PricingItems from './PricingItems'

interface ProfessionalInfoProps {
  valor: string;
  tipo_plano: string;
  texto: string;
  corFundo1: string;
  corFundo2: string;
  corTexto: string;
  corSubTexto: string;
  item1: any;
  item2: any;
  item3: any;
  className: string;
  children: React.ReactNode;
}

const PlanCard = ({ valor, tipo_plano, texto, corFundo1, corFundo2, corTexto, corSubTexto, item1, item2, item3, className, children }: ProfessionalInfoProps) => {
  return (
    <>
      <div className={className}>
        <div
          className={`flex flex-col bg-gradient-to-b ${corFundo1} ${corFundo2} p-10 rounded-md h-[580px] scale-[0.9] 2sm:scale-100 w-[320px] 3xl:w-96 gap-2`}
        >

          <div className='text-left flex flex-row items-baseline gap-2'>
            <h1 className={`font-bold ${corTexto} text-5xl -mt-2`}>{valor}</h1>
            <span className={`${corTexto} text-lg font-medium -tracking-wider`}>{tipo_plano}</span>
          </div>

          <p className={`text-sm ${corSubTexto} font-medium -tracking-wider pb-8 border-b-2 border-solid border-gray-300/30`}>{texto}</p>

          <div className='relative flex flex-col h-full'>
            <div className={`flex flex-col pt-5 ${corSubTexto} -tracking-wide font-semibold gap-4`}>
              {item1}
              {item2}
              {item3}
            </div>

            {children}
          </div>

        </div>
      </div>
    </>
  )
}

export default PlanCard