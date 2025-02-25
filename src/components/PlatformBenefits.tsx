import { FunctionComponent, useEffect, useRef, useState } from "react";
// import Items from "./Items";
import styles from "./PlatformBenefits.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import CountUp from 'react-countup';
import gsap from 'gsap';

export type PlatformBenefitsType = {
  className?: string;
};

const PlatformBenefits: FunctionComponent<PlatformBenefitsType> = ({
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const sectionRef = useRef(null);
  const ourStrengthsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCountdown(true);
          const timer = setTimeout(() => {
            setCountdown(false);
          }, 1800);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (ourStrengthsRef.current) {
      gsap.from(ourStrengthsRef.current, {
        scrollTrigger: {
          trigger: ourStrengthsRef.current,
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
  }, []);

  return (
    <section ref={sectionRef} className={[styles.platformBenefitsContainer].join(" ")}>
      <div className="row">
        <div className="col-12 p-0">
          <h1 ref={ourStrengthsRef} className={styles.platformBenefitsTitle}>Our Strengths</h1>
        </div>
      </div>
      <div className="row">
        <div className={['col-12 col-sm-12 col-md-4 p-0'].join(' ')}>
          <div className={styles.platformBenefitsDescription}>
            <p> Experience the Speed, Accuracy, and Impact of Eagle
              Eagle sets a new standard in data processing with unmatched
              speed and accuracy, empowering your organization to perform
              analytics in record time. By delivering precise insights with
              lightning-fast results, our platform enables you to stay ahead
              of the competition. Whether you're streamlining operations or
              optimizing decision-making, Eagle helps you reduce operational
              costs, improve efficiency, and drive tangible business outcomes.
              Experience a seamless, data-driven transformation with a
              platform built for performance and measurable success.</p>
          </div>
        </div>
        <div className="col-0 col-sm-1 col-md-1"></div>
        <div className={['col-12 col-sm-7 p-0 ', 'd-none d-md-block'].join(' ')}>
          <div className="row m-0">
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 '].join(" ")}>
              <div className={[styles.box, styles.borderRight].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={10} duration={3} suffix="x" />
                  ) : "10x"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Faster Data Processing & Analytics</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 '].join(" ")}>
              <div className={[styles.box, styles.borderBottom].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={30} duration={3} prefix=">" suffix="%" />
                  ) : ">30%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Reduce Infrastructure Costs</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 '].join(" ")}>
              <div className={[styles.box, styles.borderTop].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={90} duration={3} prefix="+" suffix="%" />
                  ) : "+90%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Improvement in Decision-Making Speed</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 '].join(" ")}>
              <div className={[styles.box, styles.borderLeft].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={99.9} duration={3} prefix="+" suffix="%" decimals={1} />
                  ) : "+99.9%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Achieve near-perfect data Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className={['col-12 col-sm-12 col-md-8 col-lg-8 mt-4 mb-4', 'd-block d-sm-none '].join(' ')}>
          <div className="row m-0">
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0'].join(" ")}>
              <div className={[styles.smallBox].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={10} duration={3} suffix="x" />
                  ) : "10x"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Faster Data Processing & Analytics</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0'].join(" ")}>
              <div className={[styles.smallBox].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={30} duration={3} prefix=">" suffix="%" />
                  ) : ">30%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Reduce Infrastructure Costs</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0'].join(" ")}>
              <div className={[styles.smallBox].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={90} duration={3} prefix="+" suffix="%" />
                  ) : "+90%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Improvement in Decision-Making Speed</div>
              </div>
            </div>
            <div className={['col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0'].join(" ")}>
              <div className={[styles.smallBox].join(' ')}>
                <div className={[styles.boxTitle].join(' ')}>
                  {isVisible && countdown ? (
                    <CountUp end={99.9} duration={3} prefix="+" suffix="%" decimals={1} />
                  ) : "+99.9%"}
                </div>
                <div className={[styles.boxContent].join(' ')}>Achieve near-perfect data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PlatformBenefits;
