import { FunctionComponent } from "react";
// import FeaturedCards from "./FeaturedCards";
import FeaturedCards1 from "./FeaturedCards1";
import styles from "./FeaturedContent.module.css";
import Items2 from "./Items2";

export type FeaturedContentType = {
  className?: string;
};

const FeaturedContent: FunctionComponent<FeaturedContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featuredContent, "container", className].join(" ")}>
      <div className="row">
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image=" /image-1@2x.png"
            text="Smart Monitoring: Machine Learning for Early Fault Detection in Gas Turbines
"
            name="gas-turbine"
            title="Gas Turbines"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image@2x.png"
            text="Predictive Maintenance for Downtime Reduction in Aluminium Casting"
            name="predictive-maintenance"
            title="Predictive Maintenance"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Smart Manufacturing"
            name="smart-manufacturing"
            title="Smart Manufacturing"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Demand Forecasting"
            name="demand-forecasting"
            title="Demand Forecasting"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="TVAC Score Prediction"
            name="tvac-score"
            title="TVAC Score Prediction"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Customer Churn"
            name="customer-churn"
            title="Customer Churn"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Suspect Engine"
            name="suspect-engine"
            title="Suspect Engine"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Insurance Policy"
            name="insurance-policy"
            title="Insurance Policy"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="STB Predictive Maintenance"
            name="stb-predictive"
            title="STB Predictive Maintenance"
          />
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-4">
          <FeaturedCards1
            image="/image-2@2x.png"
            text="Fact Finder"
            name="fact-finder"
            title="Fact Finder"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
