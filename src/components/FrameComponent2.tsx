import { FunctionComponent } from "react";
import Search from "./Search";
import styles from "./FrameComponent2.module.css";
import Searchbar from "./Searchbar";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContentWrapper, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h1 className={styles.insightsAndInnovations}>
            Insights and Innovations
          </h1>
          <div className={styles.discoverTheLatest}>
            Discover the latest trends, strategies, and innovations across
            various industries. From expert opinions to in-depth articles and
            case studies, explore valuable insights that can help you stay
            informed, adapt to changes, and drive success in today's competitive
            landscape.
          </div>
        </div>
        {/* <Search /> */}
      </div>
      <Searchbar/>
    </section>
  );
};

export default FrameComponent2;
