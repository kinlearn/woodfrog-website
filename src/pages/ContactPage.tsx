import { FunctionComponent, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./ContactPage.module.css";
import HeaderComponet from "../components/HeaderComponent";
import Footer from "../components/Footer";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import ContactForm from '../components/ContactUs';
import InlineContactForm from '../components/InlineContactForm';
import PageDescription from "../components/PageDescription";

const contactPageDescription = {
    title: 'Let\'s Talk!',
    describe: 'We\'d love to hear from you. Fill out the form and we\'ll get back to you soon.'
};

const ContactPage: FunctionComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <section className={styles.ContactPage}>
            <HeaderComponet />
            <main className={styles.body}>
                <div className={styles.pageDescriptionWrapper}>
                    <PageDescription 
                        data-aos="fade-in" 
                        data-aos-duration="4000" 
                        details={contactPageDescription}
                        // Remove the titleClassName prop until we update the PageDescription component
                    />
                </div>
                
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        {/* Main Form Section - Now in the middle */}
                        <div className="col-12 col-lg-8 mb-4">
                            <div className={styles.contactSection}>
                                <h3 className={styles.sectionTitle}>Send Us a Message</h3>
                                <p className={styles.sectionDescription}>
                                    Have a question about our services or want to learn more? Our team is here to help.
                                </p>
                                
                                <InlineContactForm />
                                
                                <ContactForm 
                                    isModalVisible={isModalVisible} 
                                    setIsModalVisible={setIsModalVisible} 
                                />
                            </div>
                        </div>
                        
                        {/* Company Info Card - Now after the form */}
                        <div className="col-12 col-md-8 col-lg-6 mb-4">
                            <div className={styles.contactSection}>
                                <h3 className={styles.sectionTitle}>Contact Information</h3>
                                
                                <div className={styles.contactInfoList}>
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIconWrapper}>
                                            <MailOutlined className={styles.contactIcon} />
                                        </div>
                                        <div className={styles.contactDetails}>
                                            <p className={styles.contactLabel}>Email</p>
                                            <p className={styles.contactValue}>info@woodfrog.tech</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIconWrapper}>
                                            <PhoneOutlined className={styles.contactIcon} />
                                        </div>
                                        <div className={styles.contactDetails}>
                                            <p className={styles.contactLabel}>Phone</p>
                                            <p className={styles.contactValue}>+91 123 456 7890</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIconWrapper}>
                                            <GlobalOutlined className={styles.contactIcon} />
                                        </div>
                                        <div className={styles.contactDetails}>
                                            <p className={styles.contactLabel}>Main Office</p>
                                            <p className={styles.contactValue}>Regus - Pune, Tech Centre Address: 5th Floor, Tech Centre, Plot No.30, Rajiv Gandhi MIDC Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default ContactPage;