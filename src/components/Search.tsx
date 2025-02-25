import { FunctionComponent } from "react";
import styles from "./Search.module.css";

export type SearchType = {
  className?: string;
};

const Search: FunctionComponent<SearchType> = ({ className = "" }) => {
  return (
    <div className={[styles.search, className].join(" ")}>
      <div className={styles.inputField}>
        <div className={styles.inputFieldBase}>
          <div className={styles.inputFieldBase}>
            <div className={styles.label}>Email</div>
            <div className={styles.input}>
              <div className={styles.content}>
                <img
                  className={styles.inputPlaceholderIcon}
                  alt=""
                  src="/input-placeholder.svg"
                />
                <div className={styles.text}>Search</div>
              </div>
              <img className={styles.helpIcon} alt="" src="/help-icon1.svg" />
            </div>
          </div>
          <div className={styles.hintText}>
            This is a hint text to help user.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
