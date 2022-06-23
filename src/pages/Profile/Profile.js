import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfileBanner from './Avatar';
import ProfileForm from './ProfileForm';
import MyCourse from './MyCourse';

export default function Profile() {
  const { TabPane } = Tabs;
  const { thongTinTK } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const MENU_PROFILE = [
    {
      key: 'account',
      label: 'Thông tin tài khoản',
      component: ProfileForm,
    },
    {
      key: 'myCourse',
      label: 'Khóa học của tôi',
      component: MyCourse,
    },
  ];

  return (
    <ProfileStyles>
      <div className="profile-desktop">
        <TabsWrapper
          tabPosition="left"
          tabBarExtraContent={{ left: <ProfileBanner user={thongTinTK} /> }}
        >
          {MENU_PROFILE.map((tab) => (
            <TabPane tab={tab.label} key={tab.key}>
              <tab.component user={thongTinTK} />
            </TabPane>
          ))}
        </TabsWrapper>
      </div>
      <div className="profile-mobile ">
        <ProfileBanner user={thongTinTK} />
        <TabsWrapper centered>
          {MENU_PROFILE.map((tab) => (
            <TabPane tab={tab.label} key={tab.key}>
              <tab.component user={thongTinTK} />
            </TabPane>
          ))}
        </TabsWrapper>
      </div>
    </ProfileStyles>
  );
}

const ProfileStyles = styled.div`
  width: 90%;
  min-height: 54vh;
  margin: 4px auto 0;
  padding: 40px 0;

  .profile-desktop {
    display: block;
  }

  .profile-mobile {
    display: none;
  }

  .ant-tabs-tab {
    margin: 0px;
  }

  @media (max-width: 992px) {
    .profile-desktop {
      display: none;
    }

    .profile-mobile {
      display: block;
    }
  }
`;

const TabsWrapper = styled(Tabs)`
  justify-content: center;

  .ant-tabs-nav {
    max-width: 35%;
    align-items: start;
  }

  .ant-tabs-extra-content {
    padding: 10px 25px 0px;
    width: 100%;
  }

  .ant-tabs-nav-wrap {
    margin-top: 20px;
  }

  .ant-tabs-tab-btn {
    color: #000 !important;
    font-size: 16px;
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      font-weight: 600;
    }
  }

  .ant-tabs-nav .ant-tabs-tab:hover,
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000 !important;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 !important;
  }

  .ant-tabs-nav .ant-tabs-tab {
    padding: 8px 24px 8px 30px;
  }

  .ant-tabs-ink-bar {
    height: 5px;

    &.ant-tabs-ink-bar-animated {
      display: none;
    }
  }

  .ant-tabs-content-holder {
    border: none;
    max-width: 65%;
    margin-top: 10px;
  }

  @media (max-width: 992px) {
    .ant-tabs-nav,
    .ant-tabs-content-holder {
      max-width: 100%;
    }

    .ant-tabs-nav-wrap {
      margin-top: 0px;
      justify-content: center !important;
    }
  }
`;
