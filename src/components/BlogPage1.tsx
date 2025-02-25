import { FunctionComponent } from "react";
import HEADER from "../components/HEADER";
import Badge from "../components/Badge";
import Pricing1 from "../components/Pricing1";
import styles from "./BlogPage1.module.css";
// import HorizontalTabs from "./ HorizontalTabs";
import BenefitImages from "./BenefitImages";
import PlatformBenefits1 from "./PlatformBenefits1";

const BlogPage1: FunctionComponent = () => {
    return (
        <div className={styles.blogPage}>
            <HEADER tagline={true} />
            <div className={styles.horizontalTabsParent}>
                {/* <HorizontalTabs /> */}
                <div className={styles.platformBenefits}>

                    <PlatformBenefits1 title="Recommended Articles" padding="0px" />
                </div>
            </div>

        </div>
    );
};

export default BlogPage1;
