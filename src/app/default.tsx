import './background.css'
import {Roboto} from "next/font/google";
import React from "react";
import Image from "next/image";
import Logo from '../../public/Joker.gif'


const roboto = Roboto({
    subsets: ['latin'],
    weight: '700'
});


export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className={roboto.className}>
                <Image src={Logo} alt="Joker"/>
                <h1 className="text-center text-5xl rub">Welcome , I am Joker.</h1>
            </div>
        </div>
    );
}
