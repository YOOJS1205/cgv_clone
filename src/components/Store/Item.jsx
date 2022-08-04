import React from "react";
import styled from "styled-components";
import Ticket from "../../assets/ticket.jpg";

export default function Item({ title }) {
  return (
    <Box>
      <>
        <Title>{title}</Title>
        <More>더보기</More>
      </>
      <List>
        <Product>
          <ProductImg src={Ticket} alt="상품 사진" />
          <ProductInfo>
            <ProductName>CGV 영화관람권</ProductName>
            <ProductPrice>12,000원</ProductPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductImg src={Ticket} alt="상품 사진" />
          <ProductInfo>
            <ProductName>CGV 골드클래스</ProductName>
            <ProductPrice>40,000원</ProductPrice>
          </ProductInfo>
        </Product>
        <Product>
          <ProductImg src={Ticket} alt="상품 사진" />
          <ProductInfo>
            <ProductName>4DX관람권</ProductName>
            <ProductPrice>19,000원</ProductPrice>
          </ProductInfo>
        </Product>
      </List>
    </Box>
  );
}

const Box = styled.div`
  width: 310px;
  height: 376px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 19px 30px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  float: left;
`;

const More = styled.a`
  padding: 2px 15px 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  line-height: 16px;
  color: #666;
  border-radius: 11px;
  float: right;
  margin-top: 1px;
`;

const List = styled.ul`
  margin-top: 75px;
`;

const Product = styled.li`
  height: 76px;
  display: flex;
`;

const ProductImg = styled.img`
  width: 75px;
  height: 76px;
`;

const ProductInfo = styled.div`
  padding-left: 15px;
  padding-top: 15px;
`;

const ProductName = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #222;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #222;
`;
