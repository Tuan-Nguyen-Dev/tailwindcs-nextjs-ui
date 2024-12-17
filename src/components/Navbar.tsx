import { logo, menu, user } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const itemNavLink= [
        { id:1, name:"Features"},
        {id:2, name:"Pricing"},
        { id:3,name:"Enterprise"},
        {id:4, name:"Careers"}
    ]
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true); 
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, []);


    return (
        <>
            <nav className={`sticky top-0 z-50 flex w-full items-center justify-between py-4 px-5 lg:mx-auto lg:px-20 ${scrolling ? "bg-[#fafbfc] shadow-lg" : "bg-transparent"
                }`}
>
                <div className="flex items-center">
                    <Image src={logo} alt="logo" />

                    <div className="hidden lg:flex pl-[74px] gap-x-14" >
                    {
                        itemNavLink.map((item, index)=>(
                                <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
                        ))
                    }
                    </div>

                </div>

                <div className="flex items-center gap-x-5">
                    <p className="hidden lg:block font-medium text-[#36485C] p-3 pr-3">Open an Account</p>
                    <div className="flex items-center gap-x-2">
                        <Image src={user} alt="User Profile" />
                        <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
                    </div>

                    <Image src={menu} alt="menu" className="lg:hidden"/>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
