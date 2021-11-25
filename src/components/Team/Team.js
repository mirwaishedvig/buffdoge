import "./Team.scss";


export const Team = () => {
  const info = [
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/1_optimized_vxu129.png",
      name: "alpha",
      role: "graphic & motion designer",
      link: "https://twitter.com/1Alpha00",
    },
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/2_optimized_xxh6ma.png",
      name: "samer",
      role: "community manager",
      link: "https://twitter.com/BuffSamer",
    },
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/3_optimized_hp6emp.png",
      name: "rashid",
      role: "marketing expert",
      link: "https://twitter.com/RashidBuff",
    },
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/4_optimized_naxhnu.png",
      name: "dagmus",
      role: "art director",
      link: "https://twitter.com/BuffDagmus",
    },
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/5_optimized_fhxvbj.png",
      name: "naji",
      role: "designer",
      link: "https://twitter.com/BuffNaji",
    },
    {
      image:
        "https://res.cloudinary.com/privatebuff/image/upload/c_scale,w_350/v1637614417/imgs/team/6_optimized_ikwmef.png",
      name: "monir",
      role: "designer",
      link: "https://twitter.com/BuffMonir",
    },
  ];

  return (
    <section className="team" id="team">
      <div className="team__title">
        <div className="team__title__anim">
          <img
            src="https://buffdoge.blob.core.windows.net/storage/team_logo.gif"
            alt="pic"
          ></img>
        </div>

        <div className="team__title__text">
          <span>team</span>
        </div>
      </div>

      <div className="team__members container">
        {info.map((item, index) => (
          <div className="team__members__item" key={index}>
            <div className="team__members__item__pic">
              <img alt="pic" src={item.image}></img>
            </div>

            <div className="team__members__item__desc">
              <div className="team__members__item__desc__name">{item.name}</div>
              <div className="team__members__item__desc__role">{item.role}</div>
              <div className="team__members__item__desc__link">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    className="white"
                    alt="pic"
                    src="https://buffdoge.blob.core.windows.net/storage/bird.svg"
                  ></img>
                  <img
                    className="blue"
                    alt="pic"
                    src="https://buffdoge.blob.core.windows.net/storage/bird_blue.svg"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
