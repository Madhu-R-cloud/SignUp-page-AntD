import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// import 'antd/dist/antd.css';

const SignupPage = () => {
  const onFinish = (values:any) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='flex justify-center m-auto '>
      <div className='flex flex-col w-[30%] h-[10%] mt-[50px] rounded-sm' style={{border: '1px solid #AAAA'}}> 
    
        <h1 className='flex justify-center mt-[10px] color-blue'>SignUp</h1>
      
      
      <Form
        name="signup"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 15 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className='flex flex-col mt-[35px]'>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input />
        </Form.Item>
        

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        </div>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form> 
      </div>
    </div>
  );
};

export default SignupPage;
