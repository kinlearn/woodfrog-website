import { FunctionComponent, useEffect, useState, useRef } from "react";
import styles from "./ServicesContent.module.css";
import Lottie from "lottie-react";
import analyticsAnimation from "./BlogsPage/Dataa.json";
import gsap from "gsap";
import { useTheme } from "../ThemeContext";

export type ServicesContentType = {
  className?: string;
};

const ServicesContent: FunctionComponent<ServicesContentType> = ({
  className = "",
}) => {
  // const [isDark, setDark] = useState(false);
  const coreServicesRef = useRef<HTMLHeadingElement>(null);

  const { isDarkTheme, toggleTheme } = useTheme()
  // window.addEventListener('themeChanged', (e) => {
  //   // if(isDark) {
  //   //   setDark(!isDark);
  //   // }  else{
  //   //   setDark(!isDark);
  //   // }
  //   setDark(!isDark);
  // })

  useEffect(()=> {
    if (coreServicesRef.current) {
      gsap.from(coreServicesRef.current, {
        scrollTrigger: {
          trigger: coreServicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, [])

  return (
    <section className={[styles.servicesContent, className].join(" ")}>
    <h1 ref={coreServicesRef} className={[styles.coreServices].join(' ')}>Core Services</h1>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div className="mb-4">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> Data Engineering</h4>
              <img src={isDarkTheme ? './arrow-dark.svg' : './arrow-light.svg'} className={[styles.imageMarginBottom, "img-fluid"].join(' ')} alt="" />
              <div className={styles.efficientlyManageAnd}>
                Efficiently manage and transform your data pipelines, ensuring
                data is clean, organized, and ready for advanced analytics.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> Machine Learning</h4>
              <br />
              <div className={styles.efficientlyManageAnd}>
                Implement machine learning models that automate tasks and uncover patterns for predictive business insights.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> MLOps</h4>
              <br />
              <div className={styles.efficientlyManageAnd} style={{marginBottom: '60px'}}>
                Optimize machine learning model lifecycles with efficient workflows, ensuring seamless deployment, monitoring, and scalability.
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="mb-4">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> Analytics</h4>
              <img src={isDarkTheme ? './analytics-dark.svg' : './analytics-light.svg'} className={[styles.imageMarginBottom, "img-fluid"].join(' ')} alt="" />
              <div className={styles.efficientlyManageAnd}>
                Gain actionable insights through data-driven analytics that empower smarter, faster business decisions.
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> LLMOps (Large Language Model Operations)</h4>
              <img src={isDarkTheme ? './LLM-dark.svg' : './LLM-light.svg'} style={{height: isDarkTheme ? '': '192px'}} className={[styles.imageMarginBottom, "img-fluid"].join(' ')} alt="" />
              <div className={styles.efficientlyManageAnd}>
                Manage and operationalize large language models efficiently, ensuring seamless integration and performance across applications.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <div className="mb-3">
          <div className={['card', styles.cardBack].join(' ')}>
            <div className="bg-image hover-overlay ripple">
              <a href="#!">
                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15);" }}></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className={['card-title', 'font-weight-bold', styles.textColor].join(' ')}> LLM (Large Language Models)</h4>
              <img src={isDarkTheme ? './LLM-model-dark.svg' : './LLM-light.svg'} style={{height: isDarkTheme ? '640px': '640px', width: '400px'}} className={[styles.imageMarginBottom, "img-fluid"].join(' ')} alt="" />
              <div className={styles.efficientlyManageAnd}>
                Manage and operationalize large language models efficiently, ensuring seamless integration and performance across applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServicesContent;