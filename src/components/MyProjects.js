"use client";
import React from "react";
import Image from "next/image";
import todoList from "../../public/assets/todoList.png";
import calculator from "../../public/assets/calculator.png";
import quiz from "../../public/assets/quiz.png";
import movie from "../../public/assets/movie.png";
import Link from "next/link";

function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "To Do List Uygulaması",
      src: todoList,
      description:
        "Hem React hem de vanilla js ile geliştirmiş olduğum yapılacaklar listesi uygulamasıdır. Bu uygulama, kullanıcıların görevlerini ekleyip düzenlemelerine olanak tanır. Ayrıca, görevlerin tamamlandığında işaretlenmesi ve silinmesi gibi temel işlevleri içerir.",
      link: <Link href="https://github.com/fatmanurkarsatar/To-do-List" target="blank">Kodları Görmek İçin Tıklayınız</Link>
    },
    {
      id: 2,
      title: "Hesap Makinesi Uygulaması",
      src: calculator,
      description:
        "React ile geliştirdiğim bu uygulama, temel matematiksel işlemleri pratik bir şekilde yapabilmenizi sağlar. Toplama, çıkarma, çarpma ve bölme işlemlerini hızlıca gerçekleştirebilirsiniz.",
        link: <Link href="https://github.com/fatmanurkarsatar/basic-Calculator" target="blank">Kodları Görmek İçin Tıklayınız</Link>
    },
    {
      id: 3,
      title: "Quiz Uygulaması",
      src: quiz,
      description:
        "JSON formatında oluşturduğum soru havuzundan rastgele seçilen sorularla her seviyeye uygun şekilde dinamik bir deneyim sunan interaktif bir quiz uygulamasıdır.",
        link: <Link href="https://github.com/fatmanurkarsatar/Quizz_App" target="blank">Kodları Görmek İçin Tıklayınız</Link>
    },
    {
      id: 4,
      title: "Film Kaydetme Uygulaması",
      src: movie,
      description:
        "Vanilla js ile javascript eğitimi sırasında yazmış olduğum, kullancının izlediği filmleri listeleyebileceği bir uygulamadır.",
      link: <Link href="https://github.com/fatmanurkarsatar/Film-Project" target="blank">Kodları Görmek İçin Tıklayınız</Link>
    },
  ];

  return (
    <div className="w-full px-4 p-4 mt-5">
      <div className="relative mb-8 flex flex-col items-center md:flex-row md:justify-between">
        <h4 className="text-center text-3xl font-bold text-[#0f0052] mb-4 md:mb-0">
          Projelerim
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((proje) => (
          <div
            key={proje.id}
            className="border border-[#e0e0e0] rounded-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-[210px]">
              <Image
                src={proje.src}
                alt={proje.title}
                layout="responsive"
                width={500}
                height={261}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <h6 className="text-xl font-semibold text-[#4f4f4f] mb-2">
                {proje.title}
              </h6>
              <p className="text-m text-[#828282]">{proje.description}</p>
              <br />
              <div className="absolute bottom-2 right-2 text-green-700 hover:underline">
                {proje.link}
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
