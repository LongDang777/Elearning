import { Avatar } from 'antd';
import Space from 'antd/lib/space';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileBanner({ user }) {
  return (
    <ProfileBannerStyles className="text-center">
      <Space size={20}>
        <Avatar size={60} icon={<UserOutlined />} />

        <div className="text-left">
          <div className="user--hoTen">{`${user.hoTen}`}</div>
          <div className="user--email">{`${user.email}`}</div>
        </div>
      </Space>
    </ProfileBannerStyles>
  );
}

const ProfileBannerStyles = styled.div`
  .ant-avatar {
    background: #87d068;
    color: #fff;
    .anticon svg {
      width: 60px;
      height: 60px;
      background: #87d068;
    }
  }

  .user {
    &--email,
    &--hoTen {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: var(--color-black);
    }
  }

  @media (max-width: 576px) {
    padding: 20px 0px 15px;
    .ant-avatar {
      width: 40px !important;
      height: 40px !important;
      line-height: inherit !important;
      .anticon svg {
        width: 40px;
        height: 40px;
        background: #fff;
      }
    }
  }
`;

ProfileBanner.propTypes = {
  user: PropTypes.object,
};

export default ProfileBanner;
