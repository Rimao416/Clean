// import React from 'react'
import { useState } from "react";
import Clean from "../../src/assets/clean.png";
import Brush from "../../src/assets/brush.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Multi from "../../src/assets/multi.png";
import Wallet from "../../src/assets/wallet.png";
import Star_16 from "../../src/assets/star_16.png";
import Woman from "../../src/assets/home_3.png";
import Woman_2 from "../../src/assets/home_4.png";
import Woman_5 from "../../src/assets/home_5.png";
import Woman_6 from "../../src/assets/woman_6.jpg";
import Woman_7 from "../../src/assets/woman_7.jpg";
import Woman_8 from "../../src/assets/woman_8.jpg";
import Woman_9 from "../../src/assets/woman_9.jpg";
import Woman_10 from "../../src/assets/woman_10.jpg";
import Button from "../components/Button";
import Details from "../components/Details";
import { IoClose } from "react-icons/io5";
import HomeGerms from "../components/HomeGerms";
import Title from "../components/Title";
function Home() {
  const [active, setActive] = useState(false);
  const infiniteText = [
    "Nettoyage de la maison",
    "Nettoyage de bureaux",
    "Nettoyage de la cuisine",
    "Nettoyage de meubles",
    "Nettoyage des vitres",
  ];
  const topPositions = [
    10, 20, 30, 40, 50, 60, 15, 25, 35, 45, 55, 65, 5, 25, 35, 45, 55,
  ];
  const leftPositions = [
    50, 70, 30, 80, 60, 20, 100, 90, 120, 40, 110, 130, 140, 150, 60, 70, 0,
  ];
  const xPositions = [
    20, 30, 40, 50, 60, 70, 15, 25, 35, 45, 55, 65, 5, 25, 35, 45, 55,
  ];
  const yPositions = [
    60, 80, 40, 90, 70, 30, 110, 100, 130, 50, 120, 140, 150, 160, 70, 80, 10,
  ];
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Services", link: "#" },
    { label: "Projets", link: "#" },
    { label: "Blog", link: "#" },
    { label: "À Propos", link: "#" },
    { label: "Nous contacter", link: "#" },
  ];
  interface TrustProps{
    text:string,
    description:string
  }
  const Trust:React.FC<TrustProps>=({text,description})=>{
    return (
      <div className="about__trust">
        <h1 className="about__trust--number">{text}</h1>
        <p className="about__trust--description">{description}</p>
      </div>
    )
  }
  return (
    <div className="app">
      <section className="navigation">
        <div className="navigation__wrapper">
          <img src={Clean} alt="" />
        </div>
        <ul
          className={`navigation__wrapper navigation__wrapper--${
            active ? "active" : "inactive"
          }`}
        >
          {menuItems.map((item, index) => (
            <li className="navigation__wrapper--list" key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="navigation__right">
          <div
            className={`navigation__wrapper navigation__wrapper--${
              active ? "active" : "inactive"
            }`}
          >
            <Button content="Voir plus" />
          </div>
          <span className="navigation__icon" onClick={() => setActive(!active)}>
            <RxHamburgerMenu />
          </span>
        </div>
        <div
          className={`navigation__responsive navigation__responsive--${
            active ? "active" : "inactive"
          }`}
        >
          <div className="navigation__wrapper">
            <img src={Clean} alt="" />
            <span className="navigation__icon" onClick={() => setActive(false)}>
              <IoClose />
            </span>
          </div>
          <ul
            className={`navigation__wrapper"
            }`}
          >
            {menuItems.map((item, index) => (
              <li className="navigation__wrapper--list" key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="home">
        <div className="home__wrapper">
          <Details
            content="La meilleure solution de nettoyage"
            color="gray"
            icon={Brush}
          />
          {/* <div className="home__header">
            <img src={Brush} alt="" />
            <p>La meilleure solution de nettoyage</p>ùùùùùùùùùùùùùù
          </div> */}
          <h1 className="home__title">
            Fournisseur de services de nettoyage{" "}
            <span className="home__title--secondary">Professionnels</span>
          </h1>
          <p className="home__content">
            Découvrez une sélection unique de vêtements et d'accessoires de
            seconde main, contribuant à un style durable et responsable.
            Explorez, achetez et vendez vos articles préférés, tout en
            rejoignant une communauté engagée pour un avenir de la mode plus
            écologique.
          </p>
          <div className="home__footer">
            <Button content="Voir plus" />
            <button className="home__services">Voir tous nos services</button>
          </div>
        </div>
        <div className="home__wrapper">
          <div className="home__wrapper--details">
            <img src={Woman} alt="" />
            <div className="home__wrapper--team">
              <Details
                content="Equipes profesionnelles"
                color="green"
                icon={Multi}
              />
            </div>
            <div className="home__wrapper--price">
              <Details content="Prix comparables" color="green" icon={Wallet} />
            </div>
          </div>
          <img src={Woman_2} alt="" />
        </div>
        <HomeGerms
          topPositions={topPositions}
          leftPositions={leftPositions}
          axisX={"50%"}
          axisY={0}
        />
        <HomeGerms
          topPositions={xPositions}
          leftPositions={yPositions}
          axisX={"20%"}
          axisY={"80%"}
        />
      </section>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <section className="about">
<div className="about__wrapper">
  <img src={Woman_6} alt={Woman_6}  className="about__wrapper--image"/>
  <img src={Woman_7} alt={Woman_7}  className="about__wrapper--image"/>
  <img src={Woman_8} alt={Woman_8}  className="about__wrapper--image"/>
  <img src={Woman_9} alt={Woman_9}  className="about__wrapper--image"/>
  <img src={Woman_10} alt={Woman_10}  className="about__wrapper--image"/>
</div>
<div className="about__wrapper"><Title title="À Propos" color="black"/>
<h1 className="about__title"><span className="about__title--font">Votre meilleur choix</span> pour les services de nettoyage</h1>

<p className="about__description">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi perspiciatis deleniti dolorum aliquid sit? Veniam at reprehenderit dolore nesciunt sequi perferendis eaque natus ipsum sit. Ullam a repellendus quod.
</p>
<div className="about__number">
  <Trust text="6500+" description="Projet Completé"/>
  <Trust text="60+" description="Expert en nettoyage"/>
  <Trust text="99%" description="Client Satisfait"/>
</div>
</div>
      </section>
      <div className={`overlay overlay--${active ? "active" : ""}`}></div>
    </div>
  );
}

export default Home;
