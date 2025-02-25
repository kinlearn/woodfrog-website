import { FunctionComponent } from "react";
import styles from "./PageDescriptionLeftTitle.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export type PageDescriptionType = {
    details?: any;
};
const PageDescriptionLeftTitle: FunctionComponent<PageDescriptionType> = (props: PageDescriptionType) => {
    return (
        <section className={[styles.PageDescriptionLeftTitle].join(' ')} >
            <div className={styles.container}>
                {props.details.title !== "" ? <div className={[styles.pageTitle, styles.open].join(' ')} >{props.details.title}</div>: null}
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.details.describe }}></div>
            </div>
        </section>
    );
};

export default PageDescriptionLeftTitle;
