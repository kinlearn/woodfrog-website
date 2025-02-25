import { FunctionComponent } from "react";
// import styles from "./UnOrderList.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./OfferingPage.module.css";
import HeaderComponet from "../components/HeaderComponent";
// import UnOrderList from "../components/UnorderList";
import Footer from "../components/Footer";
import PageDescription from "../components/PageDescription";
import UnOrderListOffering from "../components/UnOrderListOffering";
import PageDescriptionLeftTitle from "../components/PageDescriptionLeftTitle";

const offeringPageDescription = {
    title: 'Woodfrog Offering',
    describe: ' '
    // describe: `At Woodfrog Tech, we believe in empowering businesses to thrive. 
    // We combine industry expertise with cutting-edge data science and AI capabilities to deliver tailored solutions that drive growth and competitiveness. 
    // Through collaborative innovation, we help clients uncover new opportunities, optimize their data landscape, and make informed decisions. 
    // Our goal is to enable self-sufficiency, putting the power of data-driven intelligence in your hands, so you can navigate the future with confidence.`
}

const dataScienceDescribe = {
    title: 'Data Science',
    describe: `At Woodfrog Tech, we believe in empowering businesses to thrive.
     We combine industry expertise with cutting-edge data science and AI capabilities to deliver tailored solutions that drive growth and competitiveness.
     Through collaborative innovation, we help clients uncover new opportunities, optimize their data landscape, and make informed decisions.
     Our goal is to enable self-sufficiency, putting the power of data-driven intelligence in your hands, so you can navigate the future with confidence.`
}

const dataScience = {
    title: '',
    describe: ``,
    items: [
        `AI &ML Based Strategy Development: Woodfrog Tech's AI & ML Based Strategy Development service combines business acumen with technical expertise to
         drive transformative growth. Our team conducts thorough assessments of your business processes, pain points, cost leakages, and technology landscape.
         We then develop a customized AI/ML strategy, complete with a clear roadmap, to address your unique challenges, optimize operations, 
         and unlock innovative opportunities.
        `,
        `AI & ML Based Product Development: Unlock the transformative power of Artificial Intelligence and Machine Learning with Woodfrog.
         We craft cutting-edge products that drive business growth, enhance customer experiences, and solve complex problems.
         Leveraging the latest AI/ML technologies, we design, develop, and deploy intelligent solutions that learn, adapt, and evolve with your organization.
         From predictive analytics and natural language processing to computer vision and automation, we apply AI/ML expertise to help you stay ahead of the curve.
         Partner with us to create innovative, user-centric products that streamline operations, foster engagement, and propel your business forward.`,
        `Enterprise Data Management: Transform your data landscape with Woodfrog.
         We assess, strategize, and optimize your enterprise data to unlock its full potential.
         We ensure seamless data democratization, conduct user persona analysis, reduce data management costs, implement automation, and align data with business priorities.
         Partnering with Woodfrog empowers your organization to make informed decisions, streamline operations, and drive growth - all while maintaining control over your valuable data assets.
        `,
        `Data Analytics Services: Woodfrog's data analytics services empower your organization to make informed decisions, drive business growth, and optimize performance.
         We provide comprehensive data analysis, transforming complex data into actionable insights.
         Our services include data visualization, predictive analytics, data mining, and business intelligence solutions, helping you identify trends, patterns, and opportunities.
         From data strategy development to implementation and ongoing support, we ensure seamless integration and maximum ROI.
         With Woodfrog, harness the power of data-driven decision-making to propel your business forward, enhance customer experiences, and stay ahead of the competition.
         `,
        `Data Visualization Services: Unlock the power of your data with our innovative Data Visualization Services.
         Our expert team transforms complex financial, accounting, Customer Service, Executive and Strategic, HR & any other valuable data into compelling, easy-to-understand visual stories.
         We combine data science expertise with psychological insights to craft engaging, informative, and impactful visualizations that resonate with your `,
        `audience.
         By applying the principles of cognitive psychology and visual perception, we ensure that your key messages are conveyed clearly, effectively, and memorably.

Data Quality : We offer comprehensive Data Quality Checks to ensure accuracy, consistency, and reliability of your data.
 Our expert team utilizes advanced tools and methodologies to identify and rectify errors, inconsistencies, and inaccuracies, enhancing data integrity and analytics accuracy.
 By leveraging our data quality services, businesses can reduce data-related risks and costs, optimize decision-making, and increase efficiency.
 Our tailored solutions include data profiling, validation, cleansing, standardization, governance, and compliance, empowering informed decision-making and business growth
`
    ]
}
const llmDescribe = {
    title: 'LLM & Agents',
    describe: `At Woodfrog, we're harnessing the power of Large Language Models (LLMs) and their agents to revolutionize the way we work. 
    By automating complex tasks and unlocking hidden insights, we're transforming raw data into actionable intelligence. 
    Our innovative approach combines human creativity with AI-driven expertise, generating novel solutions and products that drive progress. 
    With LLMs and agents, we're streamlining workflows, amplifying productivity, and uncovering new possibilities. Join us in shaping a future
     where human ingenuity and machine intelligence converge, giving rise to unprecedented breakthroughs and opportunities.`,
    // items: [
    //     'Predictive maintenance: Minimizing downtime and optimizing resource allocation',
    //     'Demand forecasting: Informing inventory management and supply chain optimization',
    //     'Customer experience enhancements: Personalizing interactions and improving satisfaction',
    //     'Large language model (LLM) agents: Revolutionizing customer support and engagement'
    // ]
}
const llm = {
    title: 'LLM & Agents',
    describe: `At Woodfrog, we're harnessing the power of Large Language Models (LLMs) and their agents to revolutionize the way we work. By automating complex tasks and unlocking hidden insights, we're transforming raw data into actionable intelligence. Our innovative approach combines human creativity with AI-driven expertise, generating novel solutions and products that drive progress. With LLMs and agents, we're streamlining workflows, amplifying productivity, and uncovering new possibilities. Join us in shaping a future where human ingenuity and machine intelligence converge, giving rise to unprecedented breakthroughs and opportunities.`,
    items: [
        `Custom LLM Solutions: At Woodfrog, we recognize that generic Large Language Models (LLMs) may not meet the complex needs of your business. That's why we empower you with customized LLM solutions infused with your unique business context and domain expertise. Our expert team crafts fine-tuned datasets, optimizes open-source and closed-source models, and deploys refined models in your cloud environment, ensuring you retain control and protection over your data. With ongoing performance monitoring and timely upgrades, we ensure your customized LLM stays ahead of the curve. Partner with us to unlock the full potential of tailored LLMs, driving innovation and growth that resonates with your business.
`,
        `LLM for automation & scale: woodfrog's Large Language Models (LLMs) empower businesses to achieve unprecedented efficiency, scalability, and growth. By automating repetitive tasks, boosting accuracy, and cutting costs by up to 100%, our solutions enable you to scale your business with confidence, amplifying productivity, accelerating decision-making, and enhancing customer experiences. With up to 100% automation, you can drive innovation and revenue growth, streamline operations, and propel your business forward, leveraging Woodfrog's expertise to transform your operations and stay ahead of the competition.
`,
        `LLM Agents & Small Language Models (SLMs): Unlock effortless productivity with Woodfrog's Intelligent LLM Agents and Small Language Models (SLMs), your personalized AI duo. Automate tedious tasks, personalize customer experiences, and streamline workflows with easy build and deployment, lightweight scalable design, tailored interactions, efficient automation, boosted productivity, low-latency responses, minimal computational resources, and flexible cloud, on-premise, or edge deployment. Our AI-powered solution combines LLM and SLM strengths to tackle specific needs, amplify efficiency, and revolutionize your workday, delivering unparalleled productivity, reduced infrastructure costs, and enhanced customer satisfaction with adaptive, scalable, and secure technology.`,
    ]
}


const OfferingPage: FunctionComponent = () => {
    return (
        <section className={[styles.
            OfferingPage].
            join(' ')} >
            <HeaderComponet />
            <main className={styles.body}>
                <PageDescription data-aos="fade-in" data-aos-duration="4000" details={offeringPageDescription} />
                <div className="col-12">
                    <div className="row m-0">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <p className={styles.title}>{dataScienceDescribe.title}</p>
                        <p className={styles.describe}>{dataScienceDescribe.describe}</p>
                            <UnOrderListOffering list={dataScience.items} />
                            <br />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <p className={styles.title}>{llmDescribe.title}</p>
                            <p className={styles.describe}>{llmDescribe.describe}</p>
                            <UnOrderListOffering list={llm.items} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default OfferingPage;
