import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../../components/Header/CartItem';

export default function MyCourse() {
  const { gioHang } = useSelector((state) => state.QuanLyKhoaHocReducer);
  return (
    <MyCourseStyles>
      {gioHang?.length > 0 ? (
        gioHang.map((item) => {
          return <CartItem isMyCourse item={item} />;
        })
      ) : (
        <div>Chưa có khóa học</div>
      )}
    </MyCourseStyles>
  );
}

const MyCourseStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
