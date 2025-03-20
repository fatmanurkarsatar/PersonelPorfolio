"use client";

import React from "react";
import Image from "next/image";
import bootstrap from "../../public/assets/technologies/bootstrap.png";
import css from "../../public/assets/technologies/css.png";
import figma from "../../public/assets/technologies/figma.png";
import git from "../../public/assets/technologies/git.png";
import github from "../../public/assets/technologies/github.png";
import html from "../../public/assets/technologies/html.png";
import js from "../../public/assets/technologies/js.png";
import materialUi from "../../public/assets/technologies/materialUi.png";
import nextJs from "../../public/assets/technologies/nextJs.png";
import reactJs from "../../public/assets/technologies/reactJs.png";
import shadcn from "../../public/assets/technologies/shadcn.png";
import tailwindCss from "../../public/assets/technologies/tailwindCss.png";
import vite from "../../public/assets/technologies/vite.png";
import vueJs from "../../public/assets/technologies/vueJs.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const Technologies = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 mt-5">
      <h1 className="text-3xl font-semibold text-center mb-8 text-[#0f0052]">KULLANDIĞIM TEKNOLOJİLER</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="h-100 py-8 relative"
      >
        {[
          { src: bootstrap, alt: "bootstrap" },
          { src: css, alt: "css" },
          { src: html, alt: "html" },
          { src: js, alt: "js" },
          { src: figma, alt: "figma" },
          { src: git, alt: "git" },
          { src: github, alt: "github" },
          { src: materialUi, alt: "materialUi" },
          { src: nextJs, alt: "nextjs" },
          { src: reactJs, alt: "reactJs" },
          { src: shadcn, alt: "shadcn" },
          { src: tailwindCss, alt: "tailwindCss" },
          { src: vite, alt: "vite" },
          { src: vueJs, alt: "vue" },
          
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 flex items-center justify-center rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Technologies;
