import React, { useState } from 'react';
import { Form, Input, Row, Col, Button, message } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaBuilding } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiSend } from 'react-icons/fi';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import ReactGA from 'react-ga4';

const { TextArea } = Input;

// We'll use the same db instance that's already initialized in your app
const db = getFirestore();

const InlineContactForm: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

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
                createdAt: new Date(),
                source: 'contact_page' // Track that this came from the contact page
            });
            
            message.success('Thank You! Our team will contact you soon.');
            
            // Google Analytics event
            ReactGA.event({
                category: 'Contact Form',
                action: 'Form Submitted',
                label: `Contact page submission by ${values.email}`
            });

            form.resetFields();
            setPhone('');
            
        } catch (error) {
            console.error("Error adding document: ", error);
            message.error('Failed to submit the form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="inline-contact-form">
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
        </div>
    );
};

export default InlineContactForm;