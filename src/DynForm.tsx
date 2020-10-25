import * as React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { FormComponentProps, WrappedFormUtils } from 'antd/lib/form/Form';

interface IProps extends FormComponentProps {
    form: WrappedFormUtils;
    loading: boolean;
    username?: string;
}

class DynForm extends React.Component<IProps, any> {

    onHandleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const { loading } = this.props;
        const { getFieldDecorator } = this.props.form;

        return (
            <Form
                onSubmit={this.onHandleSubmit}
                style={{ marginBottom: 0 }}
            >
                <Form.Item label="Username">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Username is required!' }],
                    })(<Input />)}
                </Form.Item>

                <Row gutter={8}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                        <Button
                            style={{ marginLeft: 8 }}
                        // onClick={props.onHandleCancle}
                        >
                            取消
                        </Button>
                    </Col>
                </Row>

            </Form>
        );
    }
}

export default Form.create()(DynForm);