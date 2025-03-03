// // import React from "react";
// // import Navbar from "../components/HEADER";
// // import Footer from "../components/Footer";
// // import styles from "./PrivacyPolicy.module.css";

// // const PrivacyPolicy: React.FC = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className={styles.privacyContainer}>
// //         <h1 className={styles.heading}>Privacy Policy</h1>
// //         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

// //         <section className={styles.section}>
// //           <h2>1. Introduction</h2>
// //           <p>
// //             Welcome to <strong>Woodfrog Tech</strong>. This Privacy Policy explains how we collect,
// //             use, and protect your personal data when you visit our website and use our services.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>2. Data Collection</h2>
// //           <h3>Personal Data</h3>
// //           <p>We collect the following types of personal data:</p>
// //           <ul>
// //             <li>Name</li>
// //             <li>Email address</li>
// //             <li>Phone number</li>
// //             <li>Company details</li>
// //             <li>Usage data (IP address, browser type, pages visited, etc.)</li>
// //           </ul>

// //           <h3>Third-Party Social Media Services</h3>
// //           <p>
// //             You may log in using third-party social media services such as Google, Facebook, 
// //             LinkedIn, and Twitter. If you choose to do so, we collect data associated with your 
// //             social media profile.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>3. Use of Data</h2>
// //           <p>We use collected data for:</p>
// //           <ul>
// //             <li>Providing and maintaining our services</li>
// //             <li>Improving website functionality and user experience</li>
// //             <li>Marketing and communication purposes</li>
// //             <li>Compliance with legal and regulatory obligations</li>
// //           </ul>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>4. Data Protection & Security</h2>
// //           <p>
// //             We implement industry-standard security measures to protect your personal data. However, 
// //             no transmission method over the internet is 100% secure.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>5. GDPR Compliance (For EU Residents)</h2>
// //           <p>If you are a resident of the European Economic Area (EEA), you have the right to:</p>
// //           <ul>
// //             <li>Access, update, or delete your personal data</li>
// //             <li>Restrict processing of your personal data</li>
// //             <li>Withdraw consent for data processing</li>
// //           </ul>
// //           <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>6. CCPA Compliance (For California Residents)</h2>
// //           <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
// //           <ul>
// //             <li>Request access to the personal data we collect</li>
// //             <li>Request deletion of your personal data</li>
// //             <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
// //           </ul>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>7. Cloud Computing and Data Storage</h2>
// //           <p>
// //             Our services are hosted on secure cloud infrastructure, ensuring high availability 
// //             and data protection. Client data is stored and processed in compliance with relevant 
// //             data protection laws.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>8. Client Data Sharing & Third-Party Services</h2>
// //           <p>
// //             We may share data with third-party service providers to enhance our offerings. 
// //             However, we do not sell client data, and all third-party integrations comply with 
// //             strict data protection policies.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>9. Cookies and Tracking Technologies</h2>
// //           <p>
// //             We use cookies to improve your browsing experience. You can adjust your browser settings 
// //             to manage cookies.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>10. Changes to This Privacy Policy</h2>
// //           <p>
// //             We may update this Privacy Policy periodically. We will notify users of significant 
// //             changes through our website.
// //           </p>
// //         </section>

// //         <section className={styles.section}>
// //           <h2>11. Contact Us</h2>
// //           <p>
// //             If you have any questions regarding this Privacy Policy, please contact us at 
// //             <a href="mailto:info@woodfrog.tech" className={styles.email}> info@woodfrog.tech</a>.
// //           </p>
// //         </section>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default PrivacyPolicy;


// import React from "react";
// import Navbar from "../components/Navbar"; // Ensure Navbar exists at this path
// import Footer from "../components/Footer";
// import { useTheme } from "../ThemeContext";
// import styles from "./PrivacyPolicy.module.css";

// const PrivacyPolicy: React.FC = () => {
//   const { isDarkTheme } = useTheme(); // ✅ Dark Theme Support

//   return (
//     <>
//       <Navbar />
//       <div className={`${styles.privacyContainer} ${isDarkTheme ? styles.darkMode : ""}`}>
//         <h1 className={styles.heading}>Privacy Policy</h1>
//         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

//         <p>
//           At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
//           This Privacy Policy explains how we collect, use, and safeguard your information.
//         </p>

//         <h2>1. Information We Collect</h2>
//         <p>We collect the following types of personal data:</p>
//         <ul>
//           <li>Name</li>
//           <li>Email address</li>
//           <li>Phone number</li>
//           <li>Company details</li>
//           <li>Usage data (IP address, browser type, pages visited, etc.)</li>
//         </ul>

//         <h2>2. How We Use Your Data</h2>
//         <p>We use collected data for:</p>
//         <ul>
//           <li>Providing and maintaining our services</li>
//           <li>Enhancing website functionality and user experience</li>
//           <li>Marketing and communication purposes</li>
//           <li>Ensuring compliance with legal and regulatory obligations</li>
//         </ul>

//         <h2>3. Data Protection & Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your personal data. However, 
//           no system is completely secure. We recommend using strong passwords and keeping your login details private.
//         </p>

//         <h2>4. GDPR Compliance (For EU Residents)</h2>
//         <p>Residents of the European Economic Area (EEA) have the right to:</p>
//         <ul>
//           <li>Access, update, or delete personal data</li>
//           <li>Restrict processing of personal data</li>
//           <li>Withdraw consent for data processing</li>
//         </ul>
//         <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

//         <h2>5. CCPA Compliance (For California Residents)</h2>
//         <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
//         <ul>
//           <li>Request access to collected personal data</li>
//           <li>Request deletion of personal data</li>
//           <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
//         </ul>

//         <h2>6. Cloud Computing and Data Storage</h2>
//         <p>
//           Our services operate on secure cloud infrastructure, ensuring high availability 
//           and compliance with data protection laws.
//         </p>

//         <h2>7. Client Data Sharing & Third-Party Services</h2>
//         <p>
//           We may share data with trusted third-party providers to enhance services. However, 
//           we do not sell client data, and all integrations follow strict data protection protocols.
//         </p>

//         <h2>8. Cookies & Tracking Technologies</h2>
//         <p>
//           We use cookies to enhance your experience. You can manage cookies in your browser settings.
//         </p>

//         <h2>9. Changes to This Privacy Policy</h2>
//         <p>
//           We may update this policy periodically. Changes will be posted on our website.
//         </p>

//         <h2>10. Contact Us</h2>
//         <p>
//           If you have any questions, contact us at{" "}
//           <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicy;


// import React from "react";
// import Navbar from "../components/Navbar"; // Ensure Navbar exists at this path
// import Footer from "../components/Footer";
// import { useTheme } from "../ThemeContext";
// import styles from "./PrivacyPolicy.module.css";

// const PrivacyPolicy: React.FC = () => {
//   const { isDarkTheme } = useTheme(); // ✅ Dark Theme Support

//   return (
//     <>
//       <Navbar />
//       <div className={`${styles.privacyContainer} ${isDarkTheme ? styles.darkMode : ""}`}>
//         <h1 className={styles.heading}>Privacy Policy</h1>
//         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

//         <p>
//           At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
//           This Privacy Policy explains how we collect, use, and safeguard your information.
//         </p>

//         <h2>1. Information We Collect</h2>
//         <p>We collect the following types of personal data:</p>
//         <ul>
//           <li>Name</li>
//           <li>Email address</li>
//           <li>Phone number</li>
//           <li>Company details</li>
//           <li>Usage data (IP address, browser type, pages visited, etc.)</li>
//         </ul>

//         <h2>2. How We Use Your Data</h2>
//         <p>We use collected data for:</p>
//         <ul>
//           <li>Providing and maintaining our services</li>
//           <li>Enhancing website functionality and user experience</li>
//           <li>Marketing and communication purposes</li>
//           <li>Ensuring compliance with legal and regulatory obligations</li>
//         </ul>

//         <h2>3. Data Protection & Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your personal data. However, 
//           no system is completely secure. We recommend using strong passwords and keeping your login details private.
//         </p>

//         <h2>4. GDPR Compliance (For EU Residents)</h2>
//         <p>Residents of the European Economic Area (EEA) have the right to:</p>
//         <ul>
//           <li>Access, update, or delete personal data</li>
//           <li>Restrict processing of personal data</li>
//           <li>Withdraw consent for data processing</li>
//         </ul>
//         <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

//         <h2>5. CCPA Compliance (For California Residents)</h2>
//         <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
//         <ul>
//           <li>Request access to collected personal data</li>
//           <li>Request deletion of personal data</li>
//           <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
//         </ul>

//         <h2>6. Cloud Computing and Data Storage</h2>
//         <p>
//           Our services operate on secure cloud infrastructure, ensuring high availability 
//           and compliance with data protection laws.
//         </p>

//         <h2>7. Client Data Sharing & Third-Party Services</h2>
//         <p>
//           We may share data with trusted third-party providers to enhance services. However, 
//           we do not sell client data, and all integrations follow strict data protection protocols.
//         </p>

//         <h2>8. Cookies & Tracking Technologies</h2>
//         <p>
//           We use cookies to enhance your experience. You can manage cookies in your browser settings.
//         </p>

//         <h2>9. Changes to This Privacy Policy</h2>
//         <p>
//           We may update this policy periodically. Changes will be posted on our website.
//         </p>

//         <h2>10. Contact Us</h2>
//         <p>
//           If you have any questions, contact us at{" "}
//           <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicy;

// import React from "react";
// import Navbar from "../components/HEADER"; // Ensure Navbar exists at this path
// import Footer from "../components/Footer";
// import { useTheme } from "../ThemeContext";
// import styles from "./PrivacyPolicy.module.css";

// const PrivacyPolicy: React.FC = () => {
//   const { isDarkTheme } = useTheme(); // ✅ Dark Theme Support

//   return (
//     <>
//       <Navbar />
//       <div className={`${styles.privacyContainer} ${isDarkTheme ? styles.darkMode : ""}`}>
//         <h1 className={styles.heading}>Privacy Policy</h1>
//         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

//         <p>
//           At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
//           This Privacy Policy explains how we collect, use, and safeguard your information.
//         </p>

//         <h2>1. Information We Collect</h2>
//         <p>We collect the following types of personal data:</p>
//         <ul>
//           <li>Name</li>
//           <li>Email address</li>
//           <li>Phone number</li>
//           <li>Company details</li>
//           <li>Usage data (IP address, browser type, pages visited, etc.)</li>
//         </ul>

//         <h2>2. How We Use Your Data</h2>
//         <p>We use collected data for:</p>
//         <ul>
//           <li>Providing and maintaining our services</li>
//           <li>Enhancing website functionality and user experience</li>
//           <li>Marketing and communication purposes</li>
//           <li>Ensuring compliance with legal and regulatory obligations</li>
//         </ul>

//         <h2>3. Data Protection & Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your personal data. However, 
//           no system is completely secure. We recommend using strong passwords and keeping your login details private.
//         </p>

//         <h2>4. GDPR Compliance (For EU Residents)</h2>
//         <p>Residents of the European Economic Area (EEA) have the right to:</p>
//         <ul>
//           <li>Access, update, or delete personal data</li>
//           <li>Restrict processing of personal data</li>
//           <li>Withdraw consent for data processing</li>
//         </ul>
//         <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

//         <h2>5. CCPA Compliance (For California Residents)</h2>
//         <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
//         <ul>
//           <li>Request access to collected personal data</li>
//           <li>Request deletion of personal data</li>
//           <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
//         </ul>

//         <h2>6. Cloud Computing and Data Storage</h2>
//         <p>
//           Our services operate on secure cloud infrastructure, ensuring high availability 
//           and compliance with data protection laws.
//         </p>

//         <h2>7. Client Data Sharing & Third-Party Services</h2>
//         <p>
//           We may share data with trusted third-party providers to enhance services. However, 
//           we do not sell client data, and all integrations follow strict data protection protocols.
//         </p>

//         <h2>8. Cookies & Tracking Technologies</h2>
//         <p>
//           We use cookies to enhance your experience. You can manage cookies in your browser settings.
//         </p>

//         <h2>9. Changes to This Privacy Policy</h2>
//         <p>
//           We may update this policy periodically. Changes will be posted on our website.
//         </p>

//         <h2>10. Contact Us</h2>
//         <p>
//           If you have any questions, contact us at{" "}
//           <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicy;

// import React from "react";
// import Navbar from "../components/HEADER"; 
// import Footer from "../components/Footer";
// import { useTheme } from "../ThemeContext";
// import styles from "./PrivacyPolicy.module.css";

// const PrivacyPolicy: React.FC = () => {
//   const { isDarkTheme } = useTheme(); // ✅ Dark Theme Support

//   return (
//     <>
//       <Navbar />
//       <div className={`${styles.privacyContainer} ${isDarkTheme ? styles.darkMode : ""}`}>
//         <h1 className={styles.heading}>Privacy Policy</h1>
//         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

//         <p>
//           At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
//           This Privacy Policy explains how we collect, use, and safeguard your information.
//         </p>

//         <h2>1. Information We Collect</h2>
//         <p>We collect the following types of personal data:</p>
//         <ul>
//           <li>Name</li>
//           <li>Email address</li>
//           <li>Phone number</li>
//           <li>Company details</li>
//           <li>Usage data (IP address, browser type, pages visited, etc.)</li>
//         </ul>

//         <h2>2. How We Use Your Data</h2>
//         <p>We use collected data for:</p>
//         <ul>
//           <li>Providing and maintaining our services</li>
//           <li>Enhancing website functionality and user experience</li>
//           <li>Marketing and communication purposes</li>
//           <li>Ensuring compliance with legal and regulatory obligations</li>
//         </ul>

//         <h2>3. Data Protection & Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your personal data. However, 
//           no system is completely secure. We recommend using strong passwords and keeping your login details private.
//         </p>

//         <h2>4. GDPR Compliance (For EU Residents)</h2>
//         <p>Residents of the European Economic Area (EEA) have the right to:</p>
//         <ul>
//           <li>Access, update, or delete personal data</li>
//           <li>Restrict processing of personal data</li>
//           <li>Withdraw consent for data processing</li>
//         </ul>
//         <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

//         <h2>5. CCPA Compliance (For California Residents)</h2>
//         <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
//         <ul>
//           <li>Request access to collected personal data</li>
//           <li>Request deletion of personal data</li>
//           <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
//         </ul>

//         <h2>6. Cloud Computing and Data Storage</h2>
//         <p>
//           Our services operate on secure cloud infrastructure, ensuring high availability 
//           and compliance with data protection laws.
//         </p>

//         <h2>7. Client Data Sharing & Third-Party Services</h2>
//         <p>
//           We may share data with trusted third-party providers to enhance services. However, 
//           we do not sell client data, and all integrations follow strict data protection protocols.
//         </p>

//         <h2>8. Cookies & Tracking Technologies</h2>
//         <p>
//           We use cookies to enhance your experience. You can manage cookies in your browser settings.
//         </p>

//         <h2>9. Changes to This Privacy Policy</h2>
//         <p>
//           We may update this policy periodically. Changes will be posted on our website.
//         </p>

//         <h2>10. Contact Us</h2>
//         <p>
//           If you have any questions, contact us at{" "}
//           <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PrivacyPolicy;


// import React from "react";
// import Navbar from "../components/HEADER";
// import Footer from "../components/Footer";
// import { useTheme } from "../ThemeContext";
// import styles from "./PrivacyPolicy.module.css";

// const PrivacyPolicy: React.FC = () => {
//   const { isDarkTheme } = useTheme(); // ✅ Ensures dark theme applies globally

//   return (
//     <div className={`${styles.pageWrapper} ${isDarkTheme ? styles.darkMode : ""}`}>
//       <Navbar />
//       <div className={styles.contentWrapper}>
//         <h1 className={styles.heading}>Privacy Policy</h1>
//         <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

//         <p>
//           At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
//           This Privacy Policy explains how we collect, use, and safeguard your information.
//         </p>

//         <h2>1. Information We Collect</h2>
//         <p>We collect the following types of personal data:</p>
//         <ul>
//           <li>Name</li>
//           <li>Email address</li>
//           <li>Phone number</li>
//           <li>Company details</li>
//           <li>Usage data (IP address, browser type, pages visited, etc.)</li>
//         </ul>

//         <h2>2. How We Use Your Data</h2>
//         <p>We use collected data for:</p>
//         <ul>
//           <li>Providing and maintaining our services</li>
//           <li>Enhancing website functionality and user experience</li>
//           <li>Marketing and communication purposes</li>
//           <li>Ensuring compliance with legal and regulatory obligations</li>
//         </ul>

//         <h2>3. Data Protection & Security</h2>
//         <p>
//           We implement industry-standard security measures to protect your personal data. However, 
//           no system is completely secure. We recommend using strong passwords and keeping your login details private.
//         </p>

//         <h2>4. GDPR Compliance (For EU Residents)</h2>
//         <p>Residents of the European Economic Area (EEA) have the right to:</p>
//         <ul>
//           <li>Access, update, or delete personal data</li>
//           <li>Restrict processing of personal data</li>
//           <li>Withdraw consent for data processing</li>
//         </ul>
//         <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

//         <h2>5. CCPA Compliance (For California Residents)</h2>
//         <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
//         <ul>
//           <li>Request access to collected personal data</li>
//           <li>Request deletion of personal data</li>
//           <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
//         </ul>

//         <h2>6. Cloud Computing and Data Storage</h2>
//         <p>
//           Our services operate on secure cloud infrastructure, ensuring high availability 
//           and compliance with data protection laws.
//         </p>

//         <h2>7. Client Data Sharing & Third-Party Services</h2>
//         <p>
//           We may share data with trusted third-party providers to enhance services. However, 
//           we do not sell client data, and all integrations follow strict data protection protocols.
//         </p>

//         <h2>8. Cookies & Tracking Technologies</h2>
//         <p>
//           We use cookies to enhance your experience. You can manage cookies in your browser settings.
//         </p>

//         <h2>9. Changes to This Privacy Policy</h2>
//         <p>
//           We may update this policy periodically. Changes will be posted on our website.
//         </p>

//         <h2>10. Contact Us</h2>
//         <p>
//           If you have any questions, contact us at{" "}
//           <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React, { useEffect } from "react";
import Navbar from "../components/HEADER";
import Footer from "../components/Footer";
import { useTheme } from "../ThemeContext";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: React.FC = () => {
  const { isDarkTheme } = useTheme(); // ✅ Dark Mode Support

  // ✅ Apply Dark Mode to Body (Prevents white background issue)
  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? "var(--color-dark-bg)" : "var(--color-gray-200)";
    document.body.style.color = isDarkTheme ? "var(--light-primary-text)" : "var(--dark-primary-text)";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDarkTheme]);

  return (
    <div className={`${styles.pageWrapper} ${isDarkTheme ? styles.darkMode : ""}`}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: February 26, 2025</p>

        <p>
          At <strong>Woodfrog Tech</strong>, we value your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, and safeguard your information.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of personal data:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company details</li>
          <li>Usage data (IP address, browser type, pages visited, etc.)</li>
        </ul>

        <h2>2. How We Use Your Data</h2>
        <p>We use collected data for:</p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Enhancing website functionality and user experience</li>
          <li>Marketing and communication purposes</li>
          <li>Ensuring compliance with legal and regulatory obligations</li>
        </ul>

        <h2>3. Data Protection & Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal data. However, 
          no system is completely secure. We recommend using strong passwords and keeping your login details private.
        </p>

        <h2>4. GDPR Compliance (For EU Residents)</h2>
        <p>Residents of the European Economic Area (EEA) have the right to:</p>
        <ul>
          <li>Access, update, or delete personal data</li>
          <li>Restrict processing of personal data</li>
          <li>Withdraw consent for data processing</li>
        </ul>
        <p>To exercise these rights, contact us at <strong>info@woodfrog.tech</strong>.</p>

        <h2>5. CCPA Compliance (For California Residents)</h2>
        <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
        <ul>
          <li>Request access to collected personal data</li>
          <li>Request deletion of personal data</li>
          <li>Opt-out of the sale of personal data (Woodfrog Tech does not sell personal data)</li>
        </ul>

        <h2>6. Cloud Computing and Data Storage</h2>
        <p>
          Our services operate on secure cloud infrastructure, ensuring high availability 
          and compliance with data protection laws.
        </p>

        <h2>7. Client Data Sharing & Third-Party Services</h2>
        <p>
          We may share data with trusted third-party providers to enhance services. However, 
          we do not sell client data, and all integrations follow strict data protection protocols.
        </p>

        <h2>8. Cookies & Tracking Technologies</h2>
        <p>
          We use cookies to enhance your experience. You can manage cookies in your browser settings.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Changes will be posted on our website.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions, contact us at{" "}
          <a href="mailto:info@woodfrog.tech" className={styles.email}>info@woodfrog.tech</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;