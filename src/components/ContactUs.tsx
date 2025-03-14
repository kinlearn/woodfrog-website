import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import styles from './ContactUs.module.css';
import { useTheme } from "../ThemeContext"; // Import the theme context

const { TextArea } = Input;

interface ContactFormProps {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModalVisible, setIsModalVisible }) => {
  const [form] = Form.useForm();
  const { isDarkTheme } = useTheme(); // Get the current theme

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Your message has been sent successfully!');
    form.resetFields();
    setIsModalVisible(false);
  };

  // Changed the title from "Contact Us" to "Let's Talk!"
  return (
    <Modal
      title="Let's Talk!"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      className={`${styles.contactModal} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className={styles.form}
      >
        <div className="row">
          <div className="col-md-6">
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name' }]}
              className={styles.formItem}
            >
              <Input 
                prefix={<span className={styles.inputIcon}>👤</span>}
                placeholder="First Name"
                className={styles.input}
              />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name' }]}
              className={styles.formItem}
            >
              <Input 
                prefix={<span className={styles.inputIcon}>👤</span>}
                placeholder="Last Name"
                className={styles.input}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
          className={styles.formItem}
        >
          <Input 
            prefix={<span className={styles.inputIcon}>✉️</span>}
            placeholder="Email Address"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
          className={styles.formItem}
        >
          <Input 
            prefix={<span className={styles.inputIcon}>📱</span>}
            placeholder="Phone Number"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name="organization"
          className={styles.formItem}
        >
          <Input 
            prefix={<span className={styles.inputIcon}>🏢</span>}
            placeholder="Organization"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
          className={styles.formItem}
        >
          <TextArea
            placeholder="Type your message"
            rows={4}
            className={styles.textArea}
          />
        </Form.Item>

        <Form.Item className={styles.submitContainer}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className={styles.submitButton}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactForm;