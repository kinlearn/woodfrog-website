// import React, { useState } from 'react';
// import { Row, Col, Typography, Card, Space, Button } from 'antd';
// import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
// import ContactForm from '../components/ContactUs';

// const { Title, Paragraph } = Typography;

// const ContactPage: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <div className="container" style={{ padding: '60px 20px' }}>
//       <Row gutter={[24, 32]} justify="center">
//         <Col xs={24}>
//           <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
//             Get in Touch
//           </Title>
//         </Col>

//         <Col xs={24} md={12}>
//           <Card style={{ height: '100%' }}>
//             <Title level={3}>Send Us a Message</Title>
//             <Paragraph>
//               Have a question about our services or want to learn more? Fill out the form and our team will get back to you shortly.
//             </Paragraph>
            
//             <Button 
//               type="primary" 
//               size="large" 
//               onClick={() => setIsModalVisible(true)}
//               style={{ marginTop: '20px' }}
//             >
//               Open Contact Form
//             </Button>
            
//             {/* This reuses your existing ContactForm component */}
//             <ContactForm 
//               isModalVisible={isModalVisible} 
//               setIsModalVisible={setIsModalVisible} 
//             />
//           </Card>
//         </Col>

//         <Col xs={24} md={12}>
//           <Card style={{ height: '100%' }}>
//             <Title level={3}>Contact Information</Title>
            
//             <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '20px' }}>
//               <div>
//                 <Space>
//                   <MailOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Email</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       info@woodfrogtech.com
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
              
//               <div>
//                 <Space>
//                   <PhoneOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Phone</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       +91 123 456 7890
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
              
//               <div>
//                 <Space>
//                   <GlobalOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Main Office</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       New Delhi, India
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
//             </Space>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ContactPage;

// import React, { useState } from 'react';
// import { Row, Col, Typography, Card, Space } from 'antd';
// import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
// import ContactForm from '../components/ContactUs'; // For the modal version
// import InlineContactForm from '../components/InlineContactForm'; // For the inline version

// const { Title, Paragraph } = Typography;

// const ContactPage: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <div className="container" style={{ padding: '60px 20px' }}>
//       <Row gutter={[24, 32]} justify="center">
//         <Col xs={24}>
//           <Title level={1} style={{ textAlign: 'center', marginBottom: '20px' }}>
//             Let's Talk!
//           </Title>
//           <Paragraph style={{ textAlign: 'center', fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px' }}>
//             We'd love to hear from you. Fill out the form and we'll get back to you soon.
//           </Paragraph>
//         </Col>

//         <Col xs={24} md={10}>
//           <Card style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
//             <Title level={3}>Contact Information</Title>
            
//             <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '20px' }}>
//               <div>
//                 <Space>
//                   <MailOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Email</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       info@woodfrogtech.com
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
              
//               <div>
//                 <Space>
//                   <PhoneOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Phone</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       +91 123 456 7890
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
              
//               <div>
//                 <Space>
//                   <GlobalOutlined style={{ fontSize: '24px' }} />
//                   <div>
//                     <Title level={5} style={{ margin: 0 }}>Main Office</Title>
//                     <Paragraph style={{ margin: 0 }}>
//                       New Delhi, India
//                     </Paragraph>
//                   </div>
//                 </Space>
//               </div>
//             </Space>
//           </Card>
//         </Col>

//         <Col xs={24} md={14}>
//           <Card style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
//             <Title level={3}>Send Us a Message</Title>
//             <Paragraph style={{ marginBottom: '20px' }}>
//               Have a question about our services or want to learn more? Our team is here to help.
//             </Paragraph>
            
//             {/* This uses the new inline form component - same fields as your modal but displayed directly on the page */}
//             <InlineContactForm />
            
//             {/* Keep the modal component accessible but hidden by default */}
//             <ContactForm 
//               isModalVisible={isModalVisible} 
//               setIsModalVisible={setIsModalVisible} 
//             />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ContactPage;

// import { FunctionComponent, useState } from "react";  // Add useState to the import
// import 'bootstrap/dist/css/bootstrap.css';
// import styles from "./ContactPage.module.css"; // You'll need to create this CSS module
// import HeaderComponet from "../components/HeaderComponent";
// import Footer from "../components/Footer";
// import { Row, Col, Typography, Card, Space } from 'antd';
// import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
// import ContactForm from '../components/ContactUs'; // For the modal version
// import InlineContactForm from '../components/InlineContactForm'; // For the inline version
// import PageDescription from "../components/PageDescription";

// const { Title, Paragraph } = Typography;

// const contactPageDescription = {
//     title: 'Let\'s Talk!',
//     describe: 'We\'d love to hear from you. Fill out the form and we\'ll get back to you soon.'
// };

// const ContactPage: FunctionComponent = () => {
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     return (
//         <section className={[styles.ContactPage].join(' ')}>
//             <HeaderComponet />
//             <main className={styles.body}>
//                 <PageDescription data-aos="fade-in" data-aos-duration="4000" details={contactPageDescription} />
                
//                 <div className="col-12">
//                     <div className="row m-0">
//                         <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
//                             <Card className={styles.contactCard}>
//                                 <p className={styles.title}>Contact Information</p>
                                
//                                 <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '20px' }}>
//                                     <div>
//                                         <Space>
//                                             <MailOutlined className={styles.contactIcon} />
//                                             <div>
//                                                 <p className={styles.contactLabel}>Email</p>
//                                                 <p className={styles.contactValue}>info@woodfrogtech.com</p>
//                                             </div>
//                                         </Space>
//                                     </div>
                                    
//                                     <div>
//                                         <Space>
//                                             <PhoneOutlined className={styles.contactIcon} />
//                                             <div>
//                                                 <p className={styles.contactLabel}>Phone</p>
//                                                 <p className={styles.contactValue}>+91 123 456 7890</p>
//                                             </div>
//                                         </Space>
//                                     </div>
                                    
//                                     <div>
//                                         <Space>
//                                             <GlobalOutlined className={styles.contactIcon} />
//                                             <div>
//                                                 <p className={styles.contactLabel}>Main Office</p>
//                                                 <p className={styles.contactValue}>New Delhi, India</p>
//                                             </div>
//                                         </Space>
//                                     </div>
//                                 </Space>
//                             </Card>
//                         </div>
                        
//                         <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
//                             <Card className={styles.contactCard}>
//                                 <p className={styles.title}>Send Us a Message</p>
//                                 <p className={styles.describe}>
//                                     Have a question about our services or want to learn more? Our team is here to help.
//                                 </p>
                                
//                                 {/* This uses the new inline form component */}
//                                 <InlineContactForm />
                                
//                                 {/* Keep the modal component accessible but hidden by default */}
//                                 <ContactForm 
//                                     isModalVisible={isModalVisible} 
//                                     setIsModalVisible={setIsModalVisible} 
//                                 />
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </section>
//     );
// };

// export default ContactPage;

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
                    />
                </div>
                
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-md-5 mb-4 mb-md-0">
                            <div className={styles.contactSection}>
                                <h3 className={styles.sectionTitle}>Contact Information</h3>
                                
                                <div className={styles.contactInfoList}>
                                    <div className={styles.contactItem}>
                                        <div className={styles.contactIconWrapper}>
                                            <MailOutlined className={styles.contactIcon} />
                                        </div>
                                        <div className={styles.contactDetails}>
                                            <p className={styles.contactLabel}>Email</p>
                                            <p className={styles.contactValue}>info@woodfrogtech.com</p>
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
                                            <p className={styles.contactValue}>New Delhi, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-7">
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
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default ContactPage;