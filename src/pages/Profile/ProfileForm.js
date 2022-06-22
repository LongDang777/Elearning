import React from 'react';
import { Button, Col, Form, Input, InputNumber, Row, Space } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function ProfileForm({ user }) {
  const [form] = Form.useForm();
  const { thongTinTK } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let { email, hoTen, matKhau, soDT, taiKhoan } = values;
    const newUserInfo = {
      ...thongTinTK,
      email,
      hoTen,
      matKhau,
      soDT,
      taiKhoan,
    };
    const action = capNhatThongTinTaiKhoanAction(newUserInfo);
    dispatch(action);
  };

  return (
    <ProfileFormStyles>
      <Form
        layout="vertical"
        form={form}
        initialValues={thongTinTK}
        onFinish={onFinish}
      >
        <Row gutter={[20, 20]}>
          <Col md={12} sm={12} xs={24}>
            <Form.Item label="Tên tài khoản" name="taiKhoan">
              <Input placeholder="Tên tài khoản" disabled />
            </Form.Item>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Form.Item label="Mật khẩu" name="matKhau">
              <Input placeholder="Mật khẩu" />
            </Form.Item>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Form.Item label="Tên người dùng" name="hoTen">
              <Input placeholder="Tên người dùng" />
            </Form.Item>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Form.Item label="Số điện thoại" name="soDT">
              <InputNumber placeholder="Số điện thoại" />
            </Form.Item>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <Space size={20} align="center" className="form-footer">
          <ButtonStyles
            size="large"
            type="primary"
            htmlType="submit"
            className="profile-btn"
          >
            Lưu thông tin
          </ButtonStyles>
        </Space>
      </Form>
    </ProfileFormStyles>
  );
}

const ProfileFormStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .ant-form-item {
    margin-bottom: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
  }

  .ant-input-password {
    height: 50px;

    .ant-input {
      height: auto !important;
    }
  }

  .ant-form-item-control-input-content,
  .ant-input-number {
    border-radius: 5px;
    width: 100%;
    height: 50px;

    input {
      border-radius: 5px;
      height: 50px;
    }
  }

  .ant-input-number-handler-wrap {
    display: none;
  }

  .form-footer {
    justify-content: center;
    width: 100%;
    margin-top: 40px;
  }
`;

const ButtonStyles = styled(Button)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #0069d9;
  }
`;
