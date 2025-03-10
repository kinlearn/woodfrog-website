import { FunctionComponent, useState } from "react";
import Items2 from "./Items2";
import styles from "./PlatformBenefits1.module.css";

export type PlatformBenefits1Type = {
  className?: string;
  title?: string;
  padding?: string
};


const PlatformBenefits1: FunctionComponent<PlatformBenefits1Type> = ({
  className = "", title = "Our Latest Work", padding = ""
}) => {
  const [isDark, setDark] = useState(true);
  window.addEventListener('themeChanged', (e) => {
    if (isDark) {
      setDark(false);
    } else {
      setDark(true);
    }
  })
  return (
    <section className={[styles.platformBenefits, className].join(" ")} >
      <h1 className={styles.latestInsights}>{title}</h1>
      <div className={styles.slider}>

        <Items2 image="/image@2x.png" name="gas-turbine"
          text="Gas Turbines" />
        <Items2 image="/image-1@2x.png" text="Predictive Maintenance " name="predictive-maintenance" />
        <Items2 image="/image-2@2x.png" text="Smart Manufacturing" name="smart-manufacturing" />
        <Items2 image="/image-2@2x.png" text="Demand Forecasting" name="demand-forecasting" />
        <Items2 image="/image-2@2x.png" text="Customer Churn" name="customer-churn" />

        <Items2 image="/image-2@2x.png" text="TVAC Score Prediction" name="tvac-score" />

        <Items2 image="/image-2@2x.png" text="Suspect Engine" name="suspect-engine" />

        <Items2 image="/image-2@2x.png" text="Insurance Policy" name="insurance-policy" />

        <Items2 image="/image-2@2x.png" text="STB Predictive Maintenance" name="stb-predictive" />
        <Items2 image="/image-2@2x.png" text="Fact Finder" name="fact-finder" />
        <Items2 image="/see_more.png" text="See More" name="blog" />



      </div>
      {/* <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.button1} />
      </div> */}
    </section>
  );
};

export default PlatformBenefits1;
