// import React from 'react'
import { useState } from "react";
import Clean from "../../src/assets/clean.png";
import Brush from "../../src/assets/brush.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Multi from "../../src/assets/multi.png";
import Wallet from "../../src/assets/wallet.png";
import Woman from "../../src/assets/home_3.png";
import Woman_2 from "../../src/assets/home_4.png";
import Button from "../components/Button";
import Details from "../components/Details";
import { IoClose } from "react-icons/io5";
import HomeGerms from "../components/HomeGerms";
function Home() {
  const [active, setActive] = useState(false);
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
        <div className=
        {`navigation__responsive navigation__responsive--${active ? "active" : "inactive"
        }`}>
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
      <div className={`overlay overlay--${active ? "active" : ""}`}></div>
    </div>
  );
}

export default Home;
