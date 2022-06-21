import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../redux/actions/LogoutAction';
import { Button, Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export default function LogOut() {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const handleLogout = () => {
    dispatch(LogoutAction());
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <NavLink to="/profile">Profile</NavLink>,
        },
        {
          key: '2',
          label: (
            <div onClick={handleLogout}>
              <NavLink to="/">Log out</NavLink>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    // <LogOutStyled className="dropdown">
    <Dropdown overlay={menu} placement="bottomLeft">
      <ButtonStyles className="user-login">
        <UserOutlined />
        &nbsp;
        <p className="user-name m-l-5">{userLogin.taiKhoan}</p>
      </ButtonStyles>
    </Dropdown>
  );
}

const ButtonStyles = styled(Button)`
  color: #28a745;
  border-color: #28a745;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px 15px;
  min-width: 100px;
  height: 40px;
`;
