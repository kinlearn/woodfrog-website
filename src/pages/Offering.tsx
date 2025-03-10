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

// import { FunctionComponent, useState, useEffect, CSSProperties, MouseEvent } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import HeaderComponent from "../components/HeaderComponent";
// import Footer from "../components/Footer";

// // Define proper types for our data structure
// interface FeatureItem {
//   title: string;
//   describe: string;
// }

// interface FeatureSection {
//   title: string;
//   items: FeatureItem[];
// }

// interface PageDescription {
//   title: string;
//   describe: string;
// }

// // Define types for our component props
// interface FeatureCardProps {
//   title: string;
//   describe: string;
//   isHovered: boolean;
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// }

// // Define proper CSS types using CSSProperties
// const styles: Record<string, CSSProperties> = {
//   offering: {
//     backgroundColor: "#f8f9fa",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column"
//   },
//   heroSection: {
//     backgroundColor: "#2c3e50",
//     color: "white",
//     padding: "80px 0 40px",
//     position: "relative",
//     overflow: "hidden"
//   },
//   heroPattern: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     width: "40%",
//     height: "100%",
//     opacity: 0.1,
//     backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
//     backgroundSize: "30px 30px"
//   },
//   heroContent: {
//     position: "relative",
//     zIndex: 1
//   },
//   heroTitle: {
//     fontSize: "42px",
//     fontWeight: "600",
//     marginBottom: "20px",
//     fontFamily: "'Inter', sans-serif"
//   },
//   heroDescription: {
//     fontSize: "18px",
//     lineHeight: "1.7",
//     maxWidth: "800px",
//     marginBottom: "30px"
//   },
//   mainContent: {
//     padding: "60px 0",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     width: "100%"
//   },
//   sectionTitle: {
//     fontSize: "32px",
//     fontWeight: "600",
//     color: "#2c3e50",
//     marginBottom: "40px",
//     position: "relative",
//     paddingBottom: "15px"
//   },
//   sectionTitleLine: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "80px",
//     height: "4px",
//     backgroundColor: "#e67e22"
//   },
//   featureCard: {
//     backgroundColor: "white",
//     borderRadius: "8px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//     padding: "30px",
//     marginBottom: "30px",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "pointer",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column"
//   },
//   featureCardHover: {
//     transform: "translateY(-5px)",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
//   },
//   featureIcon: {
//     fontSize: "32px",
//     color: "#e67e22",
//     marginBottom: "20px"
//   },
//   featureTitle: {
//     fontSize: "20px",
//     fontWeight: "600",
//     marginBottom: "15px",
//     color: "#2c3e50"
//   },
//   featureDescription: {
//     fontSize: "16px",
//     lineHeight: "1.6",
//     color: "#555"
//   },
//   divider: {
//     margin: "60px 0",
//     height: "2px",
//     background: "linear-gradient(to right, rgba(255, 255, 255, 0), #e67e22 50%, rgba(255, 255, 255, 0))",
//     border: "none"
//   },
//   customSolutionsSection: {
//     backgroundColor: "#f0f4f8",
//     padding: "60px 0",
//     borderRadius: "12px"
//   }
// };

// // Create a type-safe icons mapping
// const featureIcons: Record<string, string> = {
//   "Fast & Efficient Data Management": "📊",
//   "Analytics platform for Data Analysis & Reporting": "📈",
//   "Automated Data Monitoring & Rule-Based Notifications": "🔔",
//   "Machine Learning Workflows": "🧠",
//   "Mobile Access for On-the-Go Analysis": "📱",
//   "Custom Reporting": "📋",
//   "Custom Applications & Workflows": "⚙️",
//   "Mobile Application Enhancements": "📲",
//   "Accurate Machine Learning Solutions": "🎯",
//   "Weekly Insights Reports with Actionable Recommendations": "📆",
//   "Custom Large Language Model (LLM) Solutions & Chatbot Integration": "💬",
//   "Custom Data Visualization Services": "📊"
// };

// const offeringPageDescription: PageDescription = {
//   title: 'Woodfrog Services Overview',
//   describe: `Woodfrog delivers a comprehensive suite of services to meet the evolving analytics needs of modern organizations. Emphasizing flexibility, efficiency, and user-friendliness, Woodfrog helps users leverage their data for meaningful insights and operational advancements.`
// };

// const offering: FeatureSection[] = [
//   {
//     title: 'In-built Features & Functionalities',
//     items: [
//       {
//         title: 'Fast & Efficient Data Management',
//         describe: `Woodfrog's high-performance data management system is optimized for handling large datasets with minimal latency, enabling rapid response for both real-time and historical data analysis. This efficient data handling supports agile operations in fast-paced environments.`
//       },
//       {
//         title: 'Analytics platform for Data Analysis & Reporting',
//         describe: `Woodfrog's data analysis engine allows deep exploration of complex datasets. Custom reports featuring key metrics and KPIs provide real-time insights, supporting strategic initiatives across departments like finance, operations, marketing, and supply chain management.`
//       },
//       {
//         title: 'Automated Data Monitoring & Rule-Based Notifications',
//         describe: `Woodfrog's automated monitoring system enables users to set specific rules and thresholds for data streams, receiving real-time alerts to maintain operational efficiency. Integration with communication tools ensures timely notifications for swift responses to anomalies.`
//       },
//       {
//         title: 'Machine Learning Workflows',
//         describe: `Woodfrog simplifies model development with integrated AutoML and AutoAnalytics, empowering users to quickly build, train, and deploy machine learning models. These workflows facilitate applications such as demand forecasting, equipment failure prediction, and marketing optimization.`
//       },
//       {
//         title: 'Mobile Access for On-the-Go Analysis',
//         describe: `With a mobile app, Woodfrog allows users full access to its functionalities anytime, anywhere. The app is optimized for mobile, supporting dashboard viewing, report generation, and alert reception, ensuring decision-making is accessible in real time.`
//       },
//     ]
//   },
//   {
//     title: 'Custom Solutions / Service Model',
//     items: [
//       {
//         title: 'Custom Reporting',
//         describe: `Woodfrog's custom reporting capabilities allow organizations to design reports tailored to their unique business metrics, offering diverse visualization options and filters to explore data. This flexibility suits specialized requirements across industries and departments.`
//       },
//       {
//         title: 'Custom Applications & Workflows',
//         describe: `Users can develop custom applications and workflows tailored to their specific processes, automating tasks like inventory tracking and sales pipeline management for improved operational efficiency.`
//       },
//       {
//         title: 'Mobile Application Enhancements',
//         describe: `Woodfrog provides custom mobile application enhancements, such as offline data access or role-specific dashboards. These features support critical updates, collaboration, and real-time decision-making in various business settings.`
//       },
//       {
//         title: 'Accurate Machine Learning Solutions',
//         describe: `Woodfrog's ML models are fine-tuned for specific business needs, whether for demand forecasting, supply chain optimization, or customer engagement. This accuracy provides confidence in data-driven decision-making.`
//       },
//       {
//         title: 'Weekly Insights Reports with Actionable Recommendations',
//         describe: `Weekly insights reports highlight performance metrics, inefficiencies, and areas for improvement. These reports offer actionable steps for productivity optimization and operational enhancements.`
//       },
//       {
//         title: 'Custom Large Language Model (LLM) Solutions & Chatbot Integration',
//         describe: `Woodfrog integrates LLMs for natural language querying, making data accessible for all users. The chatbot feature further enhances accessibility, providing real-time, conversational data interaction.`
//       },
//       {
//         title: 'Custom Data Visualization Services',
//         describe: `Woodfrog's visualization services enable users to create data representations tailored to audience needs, facilitating understanding and decision-making across various domains.`
//       },
//     ]
//   }
// ];

// const FeatureCard: FunctionComponent<FeatureCardProps> = ({ 
//   title, 
//   describe, 
//   isHovered, 
//   onMouseEnter, 
//   onMouseLeave 
// }) => {
//   return (
//     <div 
//       className="col-md-6 col-lg-4 mb-4"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div style={{
//         ...styles.featureCard,
//         ...(isHovered ? styles.featureCardHover : {})
//       }}>
//         <div style={styles.featureIcon}>{featureIcons[title] || "🔍"}</div>
//         <h3 style={styles.featureTitle}>{title}</h3>
//         <p style={styles.featureDescription}>{describe}</p>
//       </div>
//     </div>
//   );
// };

// const Offering: FunctionComponent = () => {
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section style={styles.offering}>
//       <HeaderComponent />
      
//       <div style={styles.heroSection}>
//         <div style={styles.heroPattern}></div>
//         <div className="container" style={styles.heroContent}>
//           <div className="row">
//             <div className="col-lg-8">
//               <h1 style={{
//                 ...styles.heroTitle,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'opacity 0.8s ease, transform 0.8s ease',
//               }}>
//                 {offeringPageDescription.title}
//               </h1>
//               <p style={{
//                 ...styles.heroDescription,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
//               }}>
//                 {offeringPageDescription.describe}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div style={styles.mainContent}>
//         <div className="container">
//           {/* Built-in Features Section */}
//           <div className="row mb-5">
//             <div className="col-12">
//               <h2 style={styles.sectionTitle}>
//                 {offering[0].title}
//                 <div style={styles.sectionTitleLine}></div>
//               </h2>
//             </div>
//           </div>
          
//           <div className="row">
//             {offering[0].items.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 title={feature.title}
//                 describe={feature.describe}
//                 isHovered={hoveredCard === `feature-${index}`}
//                 onMouseEnter={() => setHoveredCard(`feature-${index}`)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               />
//             ))}
//           </div>
          
//           <hr style={styles.divider} />
          
//           {/* Custom Solutions Section */}
//           <div style={styles.customSolutionsSection}>
//             <div className="container">
//               <div className="row mb-5">
//                 <div className="col-12">
//                   <h2 style={styles.sectionTitle}>
//                     {offering[1].title}
//                     <div style={styles.sectionTitleLine}></div>
//                   </h2>
//                 </div>
//               </div>
              
//               <div className="row">
//                 {offering[1].items.map((feature, index) => (
//                   <FeatureCard
//                     key={index}
//                     title={feature.title}
//                     describe={feature.describe}
//                     isHovered={hoveredCard === `solution-${index}`}
//                     onMouseEnter={() => setHoveredCard(`solution-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </section>
//   );
// };

// export default Offering;