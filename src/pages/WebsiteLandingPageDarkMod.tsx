import { FunctionComponent, useState, useEffect } from "react";
import FrameComponent from "../components/FrameComponent";
import ServicesContent from "../components/ServicesContent";
import TrustedBy from "../components/TrustedBy";
import PlatformBenefits from "../components/PlatformBenefits";
import PlatformBenefits1 from "../components/PlatformBenefits1";
import Pricing from "../components/Pricing";
import Pricing1 from "../components/Pricing1";
import styles from "./WebsiteLandingPageDarkMod.module.css";
import { useTheme } from "../ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebsiteLandingPageDarkMod: FunctionComponent = () => {
  const { isDarkTheme } = useTheme(); // Get the current theme state
  console.log("isDarkTheme", isDarkTheme)

  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      gsap.from(img, {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, [isDarkTheme]);

  return (
    <div className={styles.websiteLandingPageDarkMod}>
      <FrameComponent />
      <img
        className={styles.image17Icon}
        // loading="lazy"
        alt=""
        src={isDarkTheme ? "/image_17.svg" : '/image_20.svg'}
      />
      <div className={styles.heroGraphic}>
        <div className={styles.heroGraphicChild} />
        <div className={styles.heroImage}></div>
      </div>
      <main className={styles.services}>
        <ServicesContent />
        <TrustedBy />
        <PlatformBenefits />
        {/* <Testimonials /> */}
        <PlatformBenefits1 />
        <Pricing />
        <Pricing1 />
      </main>
    </div>
  );
};

export default WebsiteLandingPageDarkMod;
