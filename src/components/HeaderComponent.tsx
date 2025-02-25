import { FunctionComponent, useState } from "react";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import styles from "./HeaderComponent.module.css";
import ContactForm from "./ContactUs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BsList } from "react-icons/bs";
import { useTheme } from "../ThemeContext";


export type FrameComponentType = {
  className?: string;
};

const HeaderComponet: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isDarkTheme } = useTheme();
  const [show, setShow] = useState(false);

  const handleMobileNavigation = (url: string) => {
    navigate(url);
    setShow(false); // Close the menu after navigation
  };

  const toggleEvent = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={[styles.frameParent, className].join(" ")}>
        <header className={styles.logoContainerWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <BsList
                size="25px"
                color={isDarkTheme ? "white" : "black"}
                className="d-block d-sm-none"
                style={{ margin: '10px' }}
                onClick={toggleEvent}
              />
              <Logo />
            </div>
            <nav className={styles.menu}>
              <a href="/blog" className={styles.ourSolutions} onClick={() => handleMobileNavigation('/blog')}>Blogs</a>
              <a href="/offering" className={styles.ourSolutions} onClick={() => handleMobileNavigation('/offering')}>Offering</a>
              <a href="/about-us" className={styles.ourSolutions} onClick={() => handleMobileNavigation('/about-us')}>About Us</a>
            </nav>
            <ModeToggle />
          </div>
        </header>
      </div>
      {show && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <div className="row m-0">
              <div className="col-1">
                <div className={styles.close} onClick={toggleEvent}>
                  <img src={'/close_menu-dark.svg'} alt="" />
                </div>
              </div>
              <div className="col-8">
                <Logo />
              </div>
              <div className="col-2 justify-content-center">
                <div style={{ position: 'absolute', right: '20px', top: '12px' }}>
                  <ModeToggle />
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-12 p-0">
                <ul className={styles.menus}>
                  <li onClick={() => handleMobileNavigation('/blog')}>Blogs</li>
                  <li onClick={() => handleMobileNavigation('/offering')}>Offering</li>
                  <li onClick={() => handleMobileNavigation('/about-us')}>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <ContactForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
};

export default HeaderComponet;
