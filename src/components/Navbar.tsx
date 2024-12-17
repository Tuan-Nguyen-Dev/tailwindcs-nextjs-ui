import { logo, menu, user } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const itemNavLink= [
        { name:"Features"},
        { name:"Pricing"},
        { name:"Enterprise"},
        { name:"Careers"}
    ]
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true); // Đổi màu khi cuộn quá 50px
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Dọn dẹp sự kiện khi component unmount
        };
    }, []);


//     className = {`sticky top-0 z-50 flex w-full items-center justify-between py-4 px-5 ${scrolling ? "bg-[#d3d8de] shadow-lg" : "bg-transparent"
//         }`
// }
    return (
        <>
            <nav className={`sticky top-0 z-50 flex w-full items-center justify-between py-4 px-5 lg:mx-auto lg:px-20 ${scrolling ? "bg-[#f3f5f8] shadow-lg" : "bg-transparent"
                }`}
>
                <div className="flex items-center">
                    <Image src={logo} alt="logo" />

                    <div className="hidden lg:flex pl-[74px] gap-x-14">
                    {
                        itemNavLink.map((item,index)=>(
                            <>
                            <div key={index}>
                                <p className="text-[#36485C] font-medium">{item.name}</p>
                            </div>
                            </>
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
