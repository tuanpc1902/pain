import { Button, Checkbox, Form, Input, Modal } from 'antd';

type SignInModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

function SignInModal({ open, setOpen }: SignInModalProps) {
    function toggleModal() {
        setOpen(!open);
    }
    const onFinish = (values: string) => {
        console.log('Success:', values);
    };

    return (
        <Modal
            title={<div className="text-gray-900 font-bold">Sign In</div>}
            open={open}
            onCancel={toggleModal}
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
        >
            <Form
                className="pt-10"
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 6,
                            message: 'Password must be at least 6 characters.',
                        },
                        {
                            max: 15,
                            message: 'Password must be at most 15 characters.',
                        },
                        {
                            pattern: new RegExp('^[a-zA-Z0-9_]+$', 'g'),
                            message: 'Password must be alphanumeric.',
                        },
                    ]}
                >
                    <Input.Password allowClear />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="bg-gray-500">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}
export default SignInModal;
