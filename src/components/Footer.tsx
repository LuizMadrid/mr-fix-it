import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-whiteBG h-[80px] p-3 justify-center flex flex-col items-center dark:bg-darkBG'>
            <Image src="/Logo_3.0_roxo.png" width={30} height={23} alt='Fix It'/>
            <p className='text-sm font-medium mt-1 text-primaryDarker dark:text-white'>Todos os direitos reservados.</p>
        </div>
    )
};

export default Footer;