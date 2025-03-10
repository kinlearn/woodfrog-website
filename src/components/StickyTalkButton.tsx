// import React, { useState, CSSProperties } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const StickyTalkButton: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const buttonStyle: CSSProperties = {
//     position: 'fixed',
//     bottom: '30px',
//     right: '30px',
//     backgroundColor: '#2A78DF',
//     color: 'white',
//     padding: '15px 25px',
//     borderRadius: '50px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     border: 'none',
//     cursor: 'pointer',
//     zIndex: 1000,
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   };

//   const hoverStyle: CSSProperties = {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
//   };

//   const contactFormStyle: CSSProperties = {
//     position: 'fixed',
//     bottom: '100px',
//     right: '30px',
//     width: '300px',
//     padding: '20px',
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//     zIndex: 999,
//     display: isOpen ? 'block' : 'none',
//   };

//   const inputStyle: CSSProperties = {
//     width: '100%',
//     padding: '10px',
//     margin: '8px 0',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     boxSizing: 'border-box',
//   };

//   const submitButtonStyle: CSSProperties = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2A78DF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '10px',
//     fontWeight: 'bold',
//   };

//   const closeButtonStyle: CSSProperties = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     background: 'none',
//     border: 'none',
//     fontSize: '18px',
//     cursor: 'pointer',
//   };

//   const toggleForm = (): void => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form data submitted:', formData);
//     alert('Message sent! We will get back to you soon.');
//     setIsOpen(false);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <>
//       <button
//         style={buttonStyle}
//         onMouseOver={(e) => {
//           Object.assign(e.currentTarget.style, hoverStyle);
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
//         }}
//         onClick={toggleForm}
//       >
//         Let's Talk!
//       </button>

//       <div style={contactFormStyle}>
//         <button style={closeButtonStyle} onClick={toggleForm}>×</button>
//         <h3 style={{ marginTop: '0', color: '#333' }}>Contact Us</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             style={inputStyle}
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             style={inputStyle}
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             style={inputStyle}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button type="submit" style={submitButtonStyle}>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default StickyTalkButton;

// import React, { useState } from 'react';
// import { Button } from 'antd';
// import { MessageOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import ContactForm from './ContactUs';

// const StickyTalkButton: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: 'fixed',
//           bottom: '30px',
//           right: '30px',
//           zIndex: 1000,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-end',
//           gap: '10px'
//         }}
//       >
//         <Button
//           type="primary"
//           shape="round"
//           size="large"
//           icon={<MessageOutlined />}
//           onClick={showModal}
//           style={{
//             padding: '0 25px',
//             height: '50px',
//             fontSize: '16px',
//             display: 'flex',
//             alignItems: 'center',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//           }}
//         >
//           Let's Talk!
//         </Button>
        
//         <Link 
//           to="/contact-us"
//           style={{
//             fontSize: '14px',
//             color: '#fff',
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             padding: '5px 12px',
//             borderRadius: '15px',
//             textDecoration: 'none'
//           }}
//         >
//           Visit contact page
//         </Link>
//       </div>

//       <ContactForm
//         isModalVisible={isModalVisible}
//         setIsModalVisible={setIsModalVisible}
//       />
//     </>
//   );
// };

// export default StickyTalkButton;

// import React, { useState } from 'react';
// import { Button } from 'antd';
// import { MessageOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import ContactForm from './ContactUs';

// const StickyTalkButton: React.FC = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: 'fixed',
//           bottom: '30px',
//           right: '30px',
//           zIndex: 1000,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-end',
//           gap: '10px'
//         }}
//       >
//         <Button
//           type="primary"
//           shape="round"
//           size="large"
//           icon={<MessageOutlined />}
//           onClick={showModal}
//           style={{
//             padding: '0 25px',
//             height: '50px',
//             fontSize: '16px',
//             display: 'flex',
//             alignItems: 'center',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//           }}
//         >
//           Let's Talk!
//         </Button>
        
//         <Link 
//           to="/contact-us"
//           style={{
//             fontSize: '14px',
//             color: '#fff',
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             padding: '5px 12px',
//             borderRadius: '15px',
//             textDecoration: 'none'
//           }}
//         >
//           Visit contact page
//         </Link>
//       </div>

//       <ContactForm
//         isModalVisible={isModalVisible}
//         setIsModalVisible={setIsModalVisible}
//       />
//     </>
//   );
// };

// export default StickyTalkButton;

import React, { useState } from 'react';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ContactForm from './ContactUs';

const StickyTalkButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px'
        }}
      >
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<MessageOutlined />}
          onClick={showModal}
          style={{
            padding: '0 25px',
            height: '50px',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          Let's Talk!
        </Button>
        
        <Link 
          to="/contact-us"
          style={{
            fontSize: '14px',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '5px 12px',
            borderRadius: '15px',
            textDecoration: 'none'
          }}
        >
          Visit contact page
        </Link>
      </div>

      <ContactForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default StickyTalkButton;