import React from "react";
import Image from "next/image";
import btk from "../../public/assets/btk.jpg";
import { MdOutlineWavingHand } from "react-icons/md";
import Link from "next/link";

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
            Sistemleri Bölümü'nü kazandım ve birinci sınıftan itibaren yazılım
            dünyasında aktif olarak yer almaya başladım. Şu an bir şirkette
            Front-end Developer olarak staj yapıyorum. Kullanıcı dostu ve
            performans odaklı arayüzler geliştirme konusunda deneyim kazanırken,
            yazılımın sadece ön yüzüyle değil, tüm süreçleriyle ilgileniyorum.
          </p>
          <p className="text-lg md:text-xl px-2 md:px-0">
            Kariyer hedefim Full Stack Developer olarak yazılım geliştirme
            süreçlerinin her aşamasında aktif rol almak. Bu doğrultuda kendimi
            sürekli geliştirmeye, yeni teknolojileri öğrenmeye ve en iyi
            uygulama yöntemlerini keşfetmeye odaklanıyorum.
          </p>

          <Link
            className="text-lg font-semibold text-gray-700 hover:underline self-end mt-2"
            href="https://github.com/fatmanurkarsatar"
            target="blank"
          >
            Github sayfamı incelemek için tıklayınız.
          </Link>
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
