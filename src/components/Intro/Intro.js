import { useEffect } from "react";

import "./Intro.scss";

export const Intro = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;

    document.getElementsByClassName("intro__video__web")[0].style.bottom =
      -scrollY / 3 + "px";
  };

  return (
    <section className="intro" id="mint">
      <div className="intro__video">
        <video autoPlay loop muted className="intro__video__web">
          <source
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/web+main+page.webm"
            type="video/mp4"
          />
        </video>

        <video autoPlay loop muted className="intro__video__mobile">
          <source
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/phone+first+page.webm"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="intro__mintBtn">
        <button>MINT</button>
      </div>

      <div className="intro__bottom">
        <img
          alt="pic"
          src="https://buffdoge.blob.core.windows.net/storage/introBottom.svg"
        ></img>
      </div>
    </section>
  );
};

export default Intro;
