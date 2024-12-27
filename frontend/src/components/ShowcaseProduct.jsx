import Image from "next/image";
import React from "react";
import Link from "next/link";

const images = [
  { src: "/projectShowcase.png", className: "hidden md:block mt-10 md:mt-8 lg:mt-16", alt: "Project Showcase Desktop" },
  { src: "/projectShowcaseMobile.png", className: "md:hidden mt-4", alt: "Project Showcase Mobile" },
];

const SectionHeading = ({ children, className }) => (
  <h2 className={`font-bold text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 lg:mt-8 ${className}`}>
    {children}
  </h2>
);

const ShowcaseProduct = () => {
  return (
    <div id="Projects" className="container mx-auto max-w-full px-4 pr-4">
      <div className="pt-20 md:pt-16 lg:pt-24">
        <h1 className="font-poppins text-[#51B504] text-sm md:text-lg lg:text-xl font-medium lg:font-semibold">
          OUR PRODUCTS
        </h1>

        <SectionHeading className="hidden md:block">
          We provide the Perfect Solution to your business growth
        </SectionHeading>

        <SectionHeading className="md:hidden">
          We provide the Perfect solution to your business growth
        </SectionHeading>

        {images.map((img, index) => (
          <div key={index} className={`${img.className} w-full`}>
            <Image
              src={img.src}
              layout="responsive"
              objectFit="cover"
              width={1240} 
              height={600}
              alt={img.alt}
            />
          </div>
        ))}

        <SectionHeading className="hidden md:block">
          Lost Your Car, Bike, or any Valuable Items? What If You Could Find Them Faster?
        </SectionHeading>

        <p className="md:hidden text-sm mt-2 lg:mt-8 leading-normal max-w-prose">
          QuickFind is an innovative app designed to make life stress-free and connected...
          <Link href="/quickfind" className="text-[#51B504] underline">
            Know More
          </Link>
        </p>

        <p className="hidden md:block text-base md:text-lg lg:text-xl mt-6 md:mt-8 font-poppins leading-normal">
          QuickFind is an innovative app designed to make life stress-free and connected...
          <Link href="/quickfind" className="text-[#51B504] underline">
            Know More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ShowcaseProduct;
