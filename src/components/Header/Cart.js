import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge, Drawer } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import CartItem from './CartItem';

export default function Cart() {
  const { gioHang } = useSelector((state) => state.QuanLyKhoaHocReducer);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Badge count={gioHang.length} className="ml-10">
        <ShoppingCartOutlined onClick={showDrawer} />
      </Badge>
      <DrawerStyles
        title="Giỏ hàng"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={500}
      >
        {gioHang?.length > 0 ? (
          gioHang.map((item) => {
            return <CartItem item={item} />;
          })
        ) : (
          <div>Chưa có khóa học</div>
        )}
      </DrawerStyles>
    </div>
  );
}

const DrawerStyles = styled(Drawer)`
  @media (max-width: 576px) {
    .ant-drawer-content-wrapper {
      width: 100% !important;
    }

    img {
      width: 64px;
      height: 64px;
    }

    .ant-row .item-name {
      font-size: 14px;
    }
  }
`;
