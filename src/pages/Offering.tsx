import { FunctionComponent } from "react";
// import styles from "./UnOrderList.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./Offering.module.css";
import HeaderComponet from "../components/HeaderComponent";
import UnOrderList from "../components/UnorderList";
import Footer from "../components/Footer";
import PageDescription from "../components/PageDescription";

const offeringPageDescription = {
    title: 'Woodfrog Services Overview',
    describe: `Woodfrog delivers a comprehensive suite of services to meet the evolving analytics needs of modern organizations. Emphasizing flexibility, efficiency, and user-friendliness, Woodfrog helps users leverage their data for meaningful insights and operational advancements.`
}
const offering = [
    {
        title: 'In-built Features & Functionalities',
        items : [
            {
                title: 'Fast & Efficient Data Management',
                describe: `Woodfrogs high-performance data management system is optimized for handling large datasets with minimal latency, enabling rapid response for both real-time and historical data analysis. This efficient data handling supports agile operations in fast-paced environments.`
            },
            {
                title: 'Analytics platform for Data Analysis & Reporting',
                describe: `Woodfrog's data analysis engine allows deep exploration of complex datasets. Custom reports featuring key metrics and KPIs provide real-time insights, supporting strategic initiatives across departments like finance, operations, marketing, and supply chain management.`
            },
            {
                title: 'Automated Data Monitoring & Rule-Based Notifications',
                describe: `Woodfrog's automated monitoring system enables users to set specific rules and thresholds for data streams, receiving real-time alerts to maintain operational efficiency. Integration with communication tools ensures timely notifications for swift responses to anomalies.`
            },
            {
                title: 'Machine Learning Workflows',
                describe: `Woodfrog simplifies model development with integrated AutoML and AutoAnalytics, empowering users to quickly build, train, and deploy machine learning models. These workflows facilitate applications such as demand forecasting, equipment failure prediction, and marketing optimization.`
            },
            {
                title: 'Mobile Access for On-the-Go Analysis',
                describe: `With a mobile app, Woodfrog allows users full access to its functionalities anytime, anywhere. The app is optimized for mobile, supporting dashboard viewing, report generation, and alert reception, ensuring decision-making is accessible in real time.`
            },
        ]
    },
    {
        title: 'Custom Solutions / Service Model',
        items: [
            {
                title: 'Custom Reporting',
                describe: `Woodfrog's custom reporting capabilities allow organizations to design reports tailored to their unique business metrics, offering diverse visualization options and filters to explore data. This flexibility suits specialized requirements across industries and departments.`
            },
            {
                title: 'Custom Applications & Workflows',
                describe: `Users can develop custom applications and workflows tailored to their specific processes, automating tasks like inventory tracking and sales pipeline management for improved operational efficiency.`
            },
            {
                title: 'Mobile Application Enhancements',
                describe: `Woodfrog provides custom mobile application enhancements, such as offline data access or role-specific dashboards. These features support critical updates, collaboration, and real-time decision-making in various business settings.`
            },
            {
                title: 'Accurate Machine Learning Solutions',
                describe: `Woodfrog's ML models are fine-tuned for specific business needs, whether for demand forecasting, supply chain optimization, or customer engagement. This accuracy provides confidence in data-driven decision-making.`
            },
            {
                title: 'Weekly Insights Reports with Actionable Recommendations',
                describe: `Weekly insights reports highlight performance metrics, inefficiencies, and areas for improvement. These reports offer actionable steps for productivity optimization and operational enhancements.`
            },
            {
                title: 'Custom Large Language Model (LLM) Solutions & Chatbot Integration',
                describe: `Woodfrog integrates LLMs for natural language querying, making data accessible for all users. The chatbot feature further enhances accessibility, providing real-time, conversational data interaction.`
            },
            {
                title: 'Custom Data Visualization Services',
                describe: `Woodfrog's visualization services enable users to create data representations tailored to audience needs, facilitating understanding and decision-making across various domains.`
            },
        ]
    }
];

const Offering: FunctionComponent = () => {
    return (
        <section className={[styles.Offering].join(' ')} >
            <HeaderComponet />
            <main  className={styles.body}>
                <PageDescription data-aos="fade-in" data-aos-duration="4000"  details={offeringPageDescription}/>
                {/* <div className={styles.devider}></div> */}
                <UnOrderList features={offering[0]} />
                <UnOrderList features={offering[1]} />
            </main>
            <Footer />
        </section>
    );
};

export default Offering;
