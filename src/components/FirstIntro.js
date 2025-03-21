import React from "react";
import Image from "next/image";
import btk from "../../public/assets/btk.jpg";
import { MdOutlineWavingHand } from "react-icons/md";

function FirstIntro() {
  return (
    <div className="w-full px-4 p-4 mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4">
        <div className="flex-1 text-center md:text-left flex flex-col gap-4">
          <h4 className="text-3xl font-bold text-[#0f0052] mt-2 sm:mt-0 sm:ml-4 flex items-center gap-2">
            Merhaba Ben Fatma Nur <MdOutlineWavingHand />
          </h4>

          <p className="text-lg md:text-xl px-2 md:px-0">
            2021 yılında Necmettin Erbakan Üniversitesi Yönetim Bilişim
            Sistemleri Bölümü'nü kazandım. Birinci sınıftan itibaren yazılım
            alanında çalışmalarımı sürdürmekteyim. Şu an 4. sınıfım ve bir
            şirkette Front-end developer olarak staj yapmaktayım. Kariyerimi
            full stack developer olarak sürdürmek istiyorum. Bu alanda kendimi
            geliştirmek için sürekli öğrenmeye ve yeni teknolojileri takip etmeye
            çalışıyorum.
          </p>
        </div>

        <div className="relative w-full md:w-[350px] aspect-[4/3] flex justify-center items-center">
          <Image
            src={btk}
            alt="Fatma Nur Karsatar"
            className="rounded-md object-cover"
            priority={true}
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default FirstIntro;
