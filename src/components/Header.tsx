"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";

import { useTheme } from "next-themes";
import Link from "next/link";
import Login from "@/app/login/page";


// const Button = () => {
//     const { systemTheme, theme, setTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;

//     return (
//         <button
//             onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
//             className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
//             Toggle Mode
//         </button>
//     )
// }



const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    // const theme = document.documentElement.classList.contains("dark") ? 'dark' : 'light';
    // const currentTheme = document.documentElement.classList.contains("dark") ? 'dark' : 'light';

    function light()  {
        // localStorage.theme = 'light'
        setTheme('light')
        document.documentElement.classList.remove('dark')
        // console.log(localStorage.theme);
    }
    
    function dark()  {
        setTheme("dark")
        document.documentElement.classList.add('dark')
        // console.log(localStorage.theme);
      }

    const [menuIsOpen, setMenuIsOpen] = React.useState(false)
    const { status, data } = useSession();
    const handleLoginClick = () => signIn();
    const handleLogoutClick = () => {
        setMenuIsOpen(false)
        signOut()
    };
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

    return (
        <div className='p-5 py-0 h-[93px] mx-auto flex justify-between items-center shadow-2xl dark:bg-zinc-800'>
            <div className="flex items-center justify-start h-full w-full">
                <Link href="/" className="inline-flex items-center justify-between">
                    <Image
                        src="/Logo_3.0_roxo.png"
                        width={50}
                        height={50}
                        alt="Mr. Fix It" />
                    <div className="relative left-5 text-black dark:text-white">
                        <h1 className="font-semibold text-3xl tracking-[0.4375rem]">Mr. Fix</h1>
                        <span className=" text-base tracking-[0.1875rem]">it</span>
                        <span className="text-xl tracking-[-0.025rem] pl-1">——————</span>
                    </div>
                </Link>
            </div>

            {/* {theme == 'light' ? <div className="bg-white">gfdsgdf</div> : <div className="bg-amber-300">fsgfdgsd</div>} */}

            <div className="flex items-center justify-end gap-5">
                {status === "unauthenticated" && (
                    <button
                        className="flex items-center justify-center py-1 px-3 gap-2 text-lg bg-transparent font-semibold border-[0.125rem] border-solid border-gray-400 rounded-md hover:text-white hover:border-transparent hover:bg-gray-400/40 transition-all duration-[0.2s] ease-[ease-in-out] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out]"
                        onClick={handleLoginClick}>
                        <FiLogIn />
                        Entre
                    </button>
                )}

                {status === "unauthenticated" && (
                    <Link
                        href="/login"
                        className="flex items-center justify-center py-1 px-3 gap-2 w-32 text-lg bg-primary font-semibold border-[0.125rem] border-solid border-primary rounded-md text-white hover:border-transparent hover:bg-primaryDarker transition-all duration-[0.2s] ease-[ease-in-out] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out]">
                        Cadastre-se
                    </Link>
                )}
            </div>

            {status === "authenticated" && data.user &&(
                <div className="flex items-center gap-3 border-grayLighter border border-solid p-2 px-3 rounded-full relative">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer"/>

                    {/* {theme == 'light' ? <BiSolidMoon size={16} onClick={() => currentTheme == "dark"? document.documentElement.classList.remove('dark'): document.documentElement.classList.add('dark')} className="cursor-pointer "/> : <BsSunFill size={16} onClick={() => currentTheme == "dark"? document.documentElement.classList.remove('dark'): document.documentElement.classList.add('dark')} className="cursor-pointer "/>} */}
                    {/* {theme == 'light' ? <BiSolidMoon size={16} onClick={() => currentTheme == "dark"? setTheme('light'): setTheme("dark")} className="cursor-pointer "/> : <BsSunFill size={16} onClick={() => currentTheme == "dark"? setTheme('light'): setTheme("dark")} className="cursor-pointer "/>} */}
                    {theme == 'light' ? <BiSolidMoon size={16} onClick={() => currentTheme == "dark"? light(): dark()} className="cursor-pointer "/> : <BsSunFill size={16} onClick={() => currentTheme == "dark"? light(): dark()} className="cursor-pointer "/>}
                    {/* {localStorage.theme == 'light' ? <BiSolidMoon size={16} onClick={() => dark()} className="cursor-pointer text-black dark:text-white"/> : <BsSunFill size={16} onClick={() => light()} className="cursor-pointer text-black dark:text-white"/>} */}
                    {/* {theme == 'dark' ? <BsSunFill size={16} onClick={() => theme == 'dark' ? <BsSunFill size={16} onClick={() => light()} className="cursor-pointer text-black dark:text-white"/> : <BsSunFill size={16} onClick={() => light()} className="cursor-pointer text-black dark:text-white light"/> } className="cursor-pointer text-black dark:text-white light"/> : <BiSolidMoon size={16} onClick={() => theme == 'light' ? <BiSolidMoon size={16} onClick={() => dark()} className="cursor-pointer text-black dark:text-white"/> : <BiSolidMoon size={16} onClick={() => light()} className="cursor-pointer text-black dark:text-white"/>} className="cursor-pointer text-black dark:text-white"/>} */}
                    {/* {document.documentElement.classList.contains("dark") ? light() : dark()} */}
                    

                    <Image height={35} width={35} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md"/>

                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center dark:bg-zinc-800">
                            <button className="text-primary text-sm font-semibold" onClick={() => handleLogoutClick()}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            )}
        </div>
    )
}

export default Header;