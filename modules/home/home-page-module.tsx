import StarSvg from "@/components/star-svg";
import Image from "next/image";
import React from "react";
import mainImg from "@assets/images/aish1.png";
import EggText from "@/components/home/egg-text";

export default function HomePageModule() {
  return (
    <main>
      <div className="top-part">
        <h2>lee yui yee</h2>
        <p>portfolio 2023-2024</p>
      </div>
      <div className="main-stuff-container">
        <div className="main-star-container mstr-one">
          <StarSvg className="star" />
        </div>
        <div className="main-star-container mstr-two">
          <StarSvg className="star" isNotFilled strokeWidth={10} />
        </div>
        <div className="main-img-wrapper">
          <div className="star-container str-cont-one">
            <StarSvg className="star" />
          </div>
          <div className="star-container str-cont-two">
            <StarSvg className="star" />
          </div>
          <div className="main-img img-container">
            <Image src={mainImg} alt="Aishwarya Tewari" fill sizes="100%" />
          </div>
        </div>
        <h1 className="heading">
          Port
          <br />
          folio
        </h1>
        <EggText text="Geek X Web Developer" />
      </div>
    </main>
  );
}
