import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Input, Row, Col, message } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'antd/dist/reset.css';
import { FaBuilding } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiSend } from 'react-icons/fi';
import './ContactUs.css';
import { initializeApp } from "firebase/app";
import ReactGA from 'react-ga4';
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPBrchVlvkJcYosAceZ6VmfKmCkFLVsN8",
    authDomain: "woodfrog-c8662.firebaseapp.com",
    projectId: "woodfrog-c8662",
    storageBucket: "woodfrog-c8662.appspot.com",
    messagingSenderId: "732188377749",
    appId: "1:732188377749:web:1938736ba88c5ce1bad19c",
    measurementId: "G-Z23KKT3XYT"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const { TextArea } = Input;

interface ContactFormProps {
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModalVisible, setIsModalVisible }) => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm(); // Create form instance

    useEffect(() => {
        if (isModalVisible) {
            document.body.classList.add('blur-background');
        } else {
            document.body.classList.remove('blur-background');
        }

        return () => {
            document.body.classList.remove('blur-background');
        };
    }, [isModalVisible]);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const docRef = await addDoc(collection(db, 'contacts'), {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                contactNumber: phone,
                organisation: values.organisation,
                message: values.message,
                createdAt: new Date()
            });
            // console.log("Document written with ID: ", docRef.id);
            message.success('Thank You! Our sales team will contact you soon.');
            // Google Analytics event
            ReactGA.event({
                category: 'Contact Form',
                action: 'Form Submitted',
                label: `Form submission by ${values.email}`
            });

            form.resetFields(); // Reset the form fields
            setPhone(''); // Reset the phone input as well
            setIsModalVisible(false); // Close the modal

        } catch (error) {
            console.error("Error adding document: ", error);
            message.error('Failed to submit the form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Modal
                title="Contact Us"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{ color: 'white' }}
            >
                <Form layout="vertical" className="contact-form" form={form} onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
                                <Input
                                    prefix={<AiOutlineUser />}
                                    placeholder="First Name"
                                    className="form-input"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="" name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]}>
                                <Input
                                    prefix={<AiOutlineUser />}
                                    placeholder="Last Name"
                                    className="form-input"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label=""
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
                    >
                        <Input
                            prefix={<MdOutlineEmail size={17} />}
                            placeholder="Email address"
                            className="form-input full-width"
                        />
                    </Form.Item>

                    <Form.Item label="" name="contactNumber">
                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputStyle={{ width: '100%' }}
                            placeholder="Contact Number"
                            inputClass="form-input full-width"
                        />
                    </Form.Item>

                    <Form.Item label="" name="organisation">
                        <Input
                            prefix={<FaBuilding />}
                            placeholder="Organisation"
                            className="form-input full-width"
                        />
                    </Form.Item>

                    <Form.Item label="" name="message" rules={[{ required: true, message: 'Please enter your message!' }]}>
                        <TextArea
                            placeholder="Type your message"
                            rows={4}
                            className="form-input full-width"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className="submit-btn" loading={loading}>
                            <FiSend /> Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ContactForm;
