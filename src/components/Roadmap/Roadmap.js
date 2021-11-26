import { useEffect, useRef, useState } from "react";

import "./Roadmap.scss";

export const Roadmap = () => {
  const videoWrapperRef = useRef(false);

  const videoRef1 = useRef(false);
  const videoRef2 = useRef(false);
  const videoRef3 = useRef(false);
  const videoRef4 = useRef(false);
  const videoRef5 = useRef(false);
  const videoRefArray = [videoRef1, videoRef2, videoRef3, videoRef4, videoRef5];
  const videoArray = [
    "https://buffdogestorage.s3.eu-central-1.amazonaws.com/10.webm",
    "https://buffdogestorage.s3.eu-central-1.amazonaws.com/25.webm",
    "https://buffdogestorage.s3.eu-central-1.amazonaws.com/50.webm",
    "https://buffdogestorage.s3.eu-central-1.amazonaws.com/75.webm",
    "https://buffdogestorage.s3.eu-central-1.amazonaws.com/100new.webm",
  ];

  const [currentOffset, setCurrentOffset] = useState(0);
  const [rocketActive, setRocketActive] = useState("");

  const positionInfo = [
    {
      topPercent: 0.175,
    },
    {
      topPercent: 0.31,
    },
    {
      topPercent: 0.45,
    },
    {
      topPercent: 0.595,
    },
    {
      topPercent: 0.7,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const videoHeight = videoWrapperRef.current.clientHeight;

    const currentScrollY = window.scrollY;
    const videoScrollY =
      window.pageYOffset + videoWrapperRef.current.getBoundingClientRect().top;

    const offset = currentScrollY + window.innerHeight / 2 - videoScrollY;

    const maxOffset =
      videoHeight * (positionInfo[positionInfo.length - 1].topPercent + 0.05);

    if (offset > maxOffset && rocketActive === "") {
      setRocketActive("active");

      setTimeout(() => {
        setRocketActive("active toBottom");
      }, 1000);
    }

    setCurrentOffset(
      offset > maxOffset
        ? maxOffset
        : offset < currentOffset
        ? currentOffset
        : offset < 0
        ? 0
        : offset
    );

    const temp = [...positionInfo];

    temp.reverse().forEach((item, index) => {
      if (offset > item.topPercent * videoHeight) {
        if (
          videoRefArray[positionInfo.length - index - 1].current.currentTime ===
          0
        )
          videoRefArray[positionInfo.length - index - 1].current.play();
      }
    });
  };

  return (
    <section className="roadmap" id="roadmap">
      <div className="roadmap__title">
        <span>phase 1</span>
      </div>

      <div className="roadmap__subtitle">
        <span>roadmap</span>
      </div>

      <div className="roadmap__video" ref={videoWrapperRef}>
        <div className="container">
          {videoArray.map((item, index) => (
            <div
              className={`roadmap__video__item ${
                index % 2 === 0 ? "left" : "right"
              } ${index === 4 ? "width100" : "width50"}`}
              key={index}
            >
              <video
                src={item}
                muted
                playsInline
                ref={videoRefArray[index]}
              ></video>
            </div>
          ))}
        </div>

        <div className="roadmap__video__timeline container">
          <div className="roadmap__video__timeline__baseline"></div>
          {positionInfo.map((item, index) => (
            <div
              className="roadmap__video__timeline__circle"
              key={index}
              style={{ top: `${item.topPercent * 100}%` }}
            ></div>
          ))}

          <div className="roadmap__video__timeline__base">
            <img
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Base0.5x.png"
            ></img>
          </div>

          <div
            className={`roadmap__video__timeline__rocket ${rocketActive}`}
            style={{ top: currentOffset }}
          >
            <img
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Rocket0.5x.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="roadmap__pictures">
        <div className="roadmap__pictures__pic">
          <img
            alt="pic"
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/10_0.75x.png"
          ></img>
        </div>
        <div className="roadmap__pictures__pic">
          <img
            alt="pic"
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/50_0.75x.png"
          ></img>
        </div>
        <div className="roadmap__pictures__pic">
          <img
            alt="pic"
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/50_0.75x.png"
          ></img>
        </div>
        <div className="roadmap__pictures__pic">
          <img
            alt="pic"
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/50_0.75x.png"
          ></img>
        </div>
        <div className="roadmap__pictures__pic">
          <img
            alt="pic"
            src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/50_0.75x.png"
          ></img>
        </div>
      </div>

      <div className="roadmap__content container">
        <div className="roadmap__content__item">
          <span>PHASE 2</span>
          <p className="title">Game development</p>
          <p>
            -Start with game development Play to earn. <br />
            -All 4 characters are in one game. <br />
            -Multiple games, one place.
          </p>
          <div className="roadmap__content__item__sidePic right">
          <video
              muted
              autoPlay
              playsInline
              loop
              height="250px"
              width="250px"
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Game.webm"
            ></video>
          </div>
        </div>
        <div className="roadmap__content__item">
          <span>Phase 3</span>
          <p className="title">
            Releasing of buff- Pussies, owls, and myths 30 000 soldiers
          </p>
          <p>
            Free minting for Buff Doge owners.
            <br />
            Buff Doge owners will only be able to free mint two of each buff
            category.
          </p>

          <div className="roadmap__content__item__sidePic top phase3">
          <video
              muted
              autoPlay
              playsInline
              loop
              height="250px"
              width="250px"
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Eth.webm"
            ></video>
          </div>

          <div className="roadmap__content__item__photos">
            <div>
              <img
                alt="pic"
                src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Owl.png"
              ></img>
            </div>

            <div>
              <img
                alt="pic"
                src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Cat.png"
              ></img>
            </div>

            <div>
              <img
                alt="pic"
                src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Unicorn.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="roadmap__content__item">
          <span>phase 4</span>
          <p className="title">Building Buff Doge talent seeker organization</p>
          <p>
            Help talented people to reach their dreams.
            <br />
            50% of profits will be given away to community-voted charities.
          </p>

          <div className="roadmap__content__item__sidePic right">
          <video
              muted
              autoPlay
              playsInline
              loop
              height="250px"
              width="250px"
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Brain.webm"
            ></video>
          </div>
        </div>
        <div className="roadmap__content__item">
          <span>phase 5</span>
          <p className="title">Game release</p>
          <p>Release Date: TBD…</p>

          <div className="roadmap__content__item__sidePic">
          <video
              muted
              autoPlay
              playsInline
              loop
              height="250px"
              width="250px"
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/vr-man.webm"
            ></video>
          </div>
        </div>
        <div className="roadmap__content__item">
          <span>phase 6</span>
          <p className="title">TBD...</p>
          <p>Future steps will be decided together with our community</p>

          <div className="roadmap__content__item__sidePic right">
          <video
              muted
              autoPlay
              playsInline
              loop
              height="250px"
              width="250px"
              alt="pic"
              src="https://buffdogestorage.s3.eu-central-1.amazonaws.com/Compass.webm"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
