// import React from 'react'
import { useState } from "react";
import Clean from "../../src/assets/clean.png";
import { MdArrowOutward } from "react-icons/md";
import Brush from "../../src/assets/brush.png";
import { MdEmail } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Multi from "../../src/assets/multi.png";
import Wallet from "../../src/assets/wallet.png";
import List from "../../src/assets/to-do-list.png";
import Team from "../../src/assets/team.png";
import Mop from "../../src/assets/mop.png";
import Happiness from "../../src/assets/happiness.png";
import Choose_4 from "../../src/assets/choose_4.jpg";
import Choose_1 from "../../src/assets/choose_1.jpg";
import Choose_2 from "../../src/assets/choose_2.jpg";
import Choose_3 from "../../src/assets/choose_3.jpg";
import Choose_5 from "../../src/assets/choose_5.jpg";
// import Choose from "../../src/assets/choose_1.png";

import Star_8 from "../../src/assets/star_8.png";
import Woman from "../../src/assets/home_3.png";
import Woman_2 from "../../src/assets/home_4.png";
import Facebook from "../../src/assets/facebook.png";
import Twitter from "../../src/assets/twitter-sign.png";
import Instagram from "../../src/assets/instagram.png";
import Youtube from "../../src/assets/youtube.png";
import Pinterest from "../../src/assets/pinterest.png";

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
import { ProductsData } from "../constants/ProductsData";
import Products from "../components/Products";
import { chooseData } from "../constants/ChooseData";
import ChooseCard from "../components/Choose";
import { ProjetsData } from "../constants/ProjetData";
import Projet from "../components/Projet";
import { TestimonialsData } from "../constants/Testimonials";
import Testimonials from "../components/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { pricingData } from "../constants/Pricing";
import { blogs } from "../constants/Blogs";
import { FaqData } from "../constants/FaqData";

function Home() {
  const [active, setActive] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [currentImage, setCurrentImage] = useState(Choose_4);
  const socialNewtowk = [Facebook, Twitter, Youtube, Instagram, Pinterest];
  const infiniteText = [
    "Nettoyage de la maison",
    "Nettoyage de bureaux",
    "Nettoyage de la cuisine",
    "Nettoyage de meubles",
    "Nettoyage des vitres",
  ];
  const images = [Choose_1, Choose_2, Choose_3, Choose_4, Choose_5];
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
  const [open, setOpen] = useState<number | null>(null);
  const Toggle = (i: number) => {
    // setActive(!active);
    console.log(`Toggle clicked for question index: ${i}`);
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  };
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Services", link: "#" },
    { label: "Projets", link: "#" },
    { label: "Blog", link: "#" },
    { label: "À Propos", link: "#" },
    { label: "Nous contacter", link: "#" },
  ];
  interface TrustProps {
    text: string;
    description: string;
  }
  const Trust: React.FC<TrustProps> = ({ text, description }) => {
    return (
      <div className="about__trust">
        <h1 className="about__trust--number">{text}</h1>
        <p className="about__trust--description">{description}</p>
      </div>
    );
  };
  interface ProcessPros {
    icon: string;
    number: string;
    title: string;
    description: string;
  }
  const Process: React.FC<ProcessPros> = ({
    icon,
    number,
    title,
    description,
  }) => {
    return (
      <div className="process__container">
        <div className="process__container--wrapper">
          <div className="process__container--bullet">
            <img src={icon} alt={icon} className="process__container--image" />
            <span className="process__container--number">{number}</span>
          </div>
          <div className="process__container--text">
            <h4 className="process__container--title">{title}</h4>
            <p className="process__container--description">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleMouseEnter = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage(images[index]);
      setIsFading(false);
    }, 500); // This timeout should match the duration of the CSS transition
  };

  const handleMouseLeave = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImage(Choose_4);
      setIsFading(false);
    }, 500); // This timeout should match the duration of the CSS transition
  };

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
          <img src={Woman_6} alt={Woman_6} className="about__wrapper--image" />
          <img src={Woman_7} alt={Woman_7} className="about__wrapper--image" />
          <img src={Woman_8} alt={Woman_8} className="about__wrapper--image" />
          <img src={Woman_9} alt={Woman_9} className="about__wrapper--image" />
          <img
            src={Woman_10}
            alt={Woman_10}
            className="about__wrapper--image"
          />
        </div>
        <div className="about__wrapper">
          <Title title="À Propos" color="black" traitColor="black" />
          <h1 className="about__title">
            <span className="about__title--font">Votre meilleur choix</span>{" "}
            pour les services de nettoyage
          </h1>

          <p className="about__description">
            Choisir nos services de nettoyage, c'est opter pour l'excellence et
            la tranquillité d'esprit. Nous sommes fiers de proposer une gamme
            complète de services de nettoyage adaptés à vos besoins, qu'il
            s'agisse de votre maison, de votre bureau ou de tout autre espace.
          </p>
          <div className="about__number">
            <Trust text="6500+" description="Projet Completé" />
            <Trust text="60+" description="Expert en nettoyage" />
            <Trust text="99%" description="Client Satisfait" />
          </div>
          <img
            src={Star_8}
            alt={Star_8}
            className="about__star about__star--small"
          />
          <img
            src={Star_8}
            alt={Star_8}
            className="about__star about__star--normal"
          />
          <img
            src={Star_8}
            alt={Star_8}
            className="about__star about__star--large"
          />
        </div>
      </section>
      <section className="services">
        <div className="services__header">
          <div className="services__header--wrapper">
            <Title title="Nos Services" color="white" traitColor="yellow" />
            <h1 className="services__header--title">
              Découvrez nos
              <span> services de nettoyage</span>
            </h1>
          </div>
          <div className="services__header--wrapper">
            <Button content="Voir tous nos services" />
          </div>
        </div>
        <div className="services__body">
          {ProductsData.map((product) => (
            <Products key={product.title} {...product} />
          ))}
        </div>
      </section>
      <section className="choosen">
        <div className="choosen__header">
          <div className="choosen__header--wrapper">
            <Title
              title="Pourquoi nous choisir"
              color="black"
              traitColor="black"
            />
            <h1 className="choosen__header--title">
              Pourquoi choisir
              <span> nos solutions d'énergie verte</span>
            </h1>
          </div>
          <div className="choosen__header--wrapper">
            <Button content="Obtenir un devis" />
          </div>
        </div>
        <div className="choosen__body">
          <div className="choosen__body--wrapper">
            <img
              src={currentImage}
              alt={currentImage}
              className={`choosen__body--image ${isFading ? "fade-out" : ""}`}
            />
            <ul className="choosen__body--navigation">
              {infiniteText.map((text, index) => (
                <li
                  key={index}
                  className="choosen__body--list"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="choosen__body--wrapper">
            {chooseData.map((choose) => (
              <ChooseCard key={choose.title} {...choose} />
            ))}
          </div>
        </div>
      </section>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <section className="projets">
        <div className="projets__header">
          <div className="projets__header--wrapper">
            <Title
              title="Pourquoi nous choisir"
              color="black"
              traitColor="black"
            />
            <h1 className="projets__header--title">
              <span>Découvrez notre portefeuille</span> de projets
            </h1>
          </div>
          <div className="projets__header--wrapper">
            <Button content="Voir tous nos projets" />
          </div>
        </div>
        <div className="projets__body">
          {ProjetsData.map((project) => (
            <Projet key={project.title} {...project} />
          ))}
        </div>
      </section>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <section className="process">
        <div className="process__wrapper">
          <Process
            icon={List}
            number="01"
            title="Réserver un service"
            description="Réserver un service de nettoyage avec nous est simple et rapide."
          />
          {/* <div className="process__separator"></div> */}
          <Process
            icon={Team}
            number="02"
            title="L'équipe arrive"
            description="Lorsque vous réservez un service avec nous, vous pouvez être sûr que notre équipe arrivera à l'heure convenue"
          />
          {/* <div className="process__separator"></div> */}
          <Process
            icon={Mop}
            number="03"
            title="Processus de nettoyage"
            description="Notre processus de nettoyage est conçu pour garantir des résultats exceptionnels à chaque intervention."
          />
          {/* <div className="process__separator"></div> */}
          <Process
            icon={Happiness}
            number="04"
            title="Résultat final"
            description="Notre processus de nettoyage est conçu pour garantir des résultats exceptionnels à chaque intervention."
          />
        </div>
      </section>
      <section className="book">
        <div className="book__wrapper">
          <h1 className="book__wrapper--title">
            <span>Services de livres à prix abordable :</span> Gagnez du temps
            et de l'argent avec nous !
          </h1>
        </div>
        <div className="book__wrapper">
          <Button content="Réserver un service" />
        </div>
      </section>
      <section className="contact">
        <div className="contact__wrapper">
          <Title title="Nous contacter" color="black" traitColor="green" />
          <h1 className="contact__title">
            Obtenez
            <span> un devis gratuit </span>dès aujourd'hui !
          </h1>
          <div className="contact__form">
            <div className="contact__form--wrapper">
              <label htmlFor="">Votre nom *</label>
              <input type="text" placeholder="Entrez votre nom" />
            </div>
            <div className="contact__form--wrapper">
              <label htmlFor="">Email *</label>
              <input type="text" placeholder="azertyuiop@gmail.com" />
            </div>
            <div className="contact__form--wrapper">
              <label htmlFor="">Phone *</label>
              <input type="text" placeholder="+243658965236" />
            </div>
            <div className="contact__form--wrapper">
              <label htmlFor="">Service *</label>
              <select name="" id="">
                {infiniteText.map((text) => (
                  <option value="">{text}</option>
                ))}
              </select>
            </div>
            <div className="contact__form--wrapper">
              <label htmlFor="">Votre message</label>
              <textarea name="" id="" rows={10}></textarea>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button content="Envoyer" />
          </div>
        </div>
        <div className="contact__wrapper">
          <div className="contact__container">
            <h5>Adresses</h5>
            <p>4517 Washington Ave</p>
            <p>Manchester, Kentucky</p>
          </div>
          <div className="contact__container">
            <h5>Contact</h5>
            <p>Phone: +21656609671</p>
            <p>Email: omarkayumba12345@gmail.com</p>
          </div>
          <div className="contact__container">
            <h5>Temps Ouvert</h5>
            <p>Lundi - Vendredi : 10:00 - 20:00</p>
            <p>Samedi - Dimanche : 11:00 - 18:00</p>
          </div>
          <div className="contact__container">
            <h5>Restez connecté</h5>
            <div className="contact__container--social">
              {socialNewtowk.map((reseau) => (
                <img src={reseau} alt="" className="contact__network" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <section className="testimonials">
        <div className="testimonials__header">
          <Title title="Témoignages" color="black" traitColor="green" />
          <h1 className="testimonials__title">
            Ce que nos <span>clients disent</span>{" "}
          </h1>
        </div>
        <div className="testimonials__body">
          <Swiper
            // onSwiper={(swiper) => {
            //   swiperRef.current = swiper;
            // }}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px (typical phone)
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 640px (typical tablet)
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 1024px (typical desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {TestimonialsData.map((testimonial) => (
              <SwiperSlide>
                <Testimonials key={testimonial.fullName} {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <section className="team">
        <div className="team__header">
          <Title title="Notre ecurie" color="black" traitColor="green" />
          <h1 className="team__title">
            Rencontrez notre <span>équipe professionnnelle</span>
          </h1>
        </div>
        <div className="team__body">
          {TestimonialsData.slice(3, 6).map((member) => (
            <div className="team__member" key={member.fullName}>
              <div className="team__wrapper">
                <img
                  src={member.image}
                  alt={"Image de " + member.fullName}
                  className="team__image"
                />
                <div className="team__social">
                  {socialNewtowk.map((social) => (
                    <img src={social} alt={social} />
                  ))}
                </div>
              </div>
              <div className="team__text">
                <p>{member.fullName}</p>
                <p>[{member.role}]</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pricing">
        <div className="pricing__header">
          <Title title="Tableau des prix" color="black" traitColor="green" />
          <h1 className="pricing__title">
            <span>Notre modèle </span>de tarification
          </h1>
        </div>
        <div className="pricing__body">
          {/* <div className="pricing__wrapper"></div> */}
          {pricingData.map((pricing) => (
            <div
              className={
                !pricing.isStandard
                  ? "pricing__card"
                  : "pricing__card pricing__card--active"
              }
              key={pricing.title}
            >
              <h5>{pricing.title}</h5>
              <h1>
                {pricing.price}
                <span> /service</span>
              </h1>
              <div className="pricing__card--list">
                {pricing.description.map((description) => (
                  <div className="pricing__card--description">
                    <span className={pricing.isStandard ? "standard" : ""}>
                      <IoMdCheckmark />
                    </span>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <button
                className={`${
                  pricing.isStandard
                    ? "pricing__card--button active"
                    : "pricing__card--button"
                }`}
              >
                Commencer
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="blog">
        <div className="blog__header">
          <div className="blog__header--wrapper">
            <Title
              title="Pourquoi nous choisir"
              color="black"
              traitColor="black"
            />
            <h1 className="blog__header--title">
              <span>Nos dernières</span> nouvelles et nos derniers blogs
            </h1>
          </div>
          <div className="blog__header--wrapper">
            <Button content="Voir tous les blogs" />
          </div>
        </div>
        <div className="blog__body">
          {blogs.map((blog) => (
            <div className="blog__card" key={blog.title}>
              <div className="blog__wrapper">
                <img src={blog.image} alt={blog.image} />
                <span className="blog__date">{blog.date}</span>
              </div>
              <div className="blog__text">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <div className="faq">
        <div className="faq__header">
          <Title title="Faqs" color="black" traitColor="green" />
          <h1 className="faq__title">
            Question ? <span>Regardez ici</span>
          </h1>
        </div>
        <div className="faq__body">
          {FaqData.map((faq, index) => (
            <div
            onClick={() => Toggle(index)} // Utilisez une fonction fléchée pour appeler Toggle
            className={`faq__accordeon ${open===index ? "open" : ""}`}
            >
              <div className={`faq__accordeon--title ${open===index ? "open" : ""}`}>
                <h1>{faq.question}</h1>
                <span>{<MdArrowOutward />}</span>
              </div>
              <p className={`faq__accordeon--text ${open===index ? "open" : ""}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className="marquee">
        {infiniteText.map((text) => (
          <h5 className="marquee--text">{text}</h5>
        ))}
      </section>
      <div className="newsletter">
      <div className="newsletter__header">
          <Title title="Newsletters" color="black" traitColor="green" />
          <h1 className="newsletter__title">
          Restez informé de <span>nos conseils et offres en matière de nettoyage ! </span>
          </h1>
        </div>
        <div className="newsletter__body">
          <div className="newsletter__wrapper">

          <input type="text" placeholder="Entrez votre adresse" />
          </div>
          <Button content="S'abonner"/>
        </div>
      </div>
      <section className="footer">
        <div className="footer__container">
          <div className="footer__about">
            <h3>À propos de nous</h3>
            <p>
              Nous sommes une entreprise de nettoyage dédiée à offrir les
              meilleurs services à nos clients.
            </p>
          </div>
          <div className="footer__links">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <a href="/home">Accueil</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">À propos</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h3>Contactez-nous</h3>
            <p>Email: contact@entreprisenettoyage.com</p>
            <p>Téléphone: +123 456 7890</p>
            <p>Adresse: 123 Rue de la Propreté, Ville, Pays</p>
          </div>
          <div className="footer__social">
            <h3>Suivez-nous</h3>
            <div className="footer__social-icons">
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Entreprise de Nettoyage. Tous droits réservés.</p>
        </div>
      </section>

      <div className={`overlay overlay--${active ? "active" : ""}`}></div>
    </div>
  );
}

export default Home;
