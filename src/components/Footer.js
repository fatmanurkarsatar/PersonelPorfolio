"use client";

import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
return (
    <div id="footer" className="w-full bg-slate-600 p-4 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/">
                <div className="flex items-center justify-center md:justify-start w-full md:w-auto cursor-pointer">
                    <span className="text-3xl text-white ml-3">FATMA NUR KARSATAR</span>
                </div>
            </Link>
            <div className="flex flex-row gap-4 items-center md:items-start w-full md:w-auto">
                <Link href="/">
                    <p className="text-lg text-green-300">Ana Sayfa</p>
                </Link>

                <Link href="/contact-form">
                    <p className="text-lg text-green-300">İletişim</p>
                </Link>
            </div>

            {/* İletişim kısmı */}
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                <p className="text-lg text-green-300">İletişim</p>
                <a href="mailto:nurkarsatar@gmail.com" className="text-white block">
                    <AiOutlineMail className="inline-block icon" />
                    <span className="ps-2">nurkarsatar@gmail.com</span>
                </a>
                <p className="text-white">
                    <FiPhone className="inline-block icon" />
                    <span className="ps-2">0539 880 59 92</span>
                </p>
            </div>
        </div>

        <hr className="my-4 border-white" />

        {/* Sosyal medya ikonları */}
        <div className="container mx-auto flex justify-center items-center text-center gap-4">
            <Link href="https://www.instagram.com/nur_karsatar/">
                <div className="bg-pink-500 p-2 rounded-full">
                    <FaInstagram className="icon text-white cursor-pointer" />
                </div>
            </Link>

            <Link href="https://github.com/fatmanurkarsatar">
                <div className="bg-black p-2 rounded-full">
                    <FaGithub className="icon text-white cursor-pointer" />
                </div>
            </Link>

            <Link href="https://www.linkedin.com/in/fatmanurkarsatar/">
                <div className="bg-blue-700 p-2 rounded-full">
                    <FaLinkedinIn className="icon text-white cursor-pointer" />
                </div>
            </Link>
        </div>
    </div>
);
};

export default Footer;
