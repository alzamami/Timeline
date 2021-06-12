import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 1rem;
  background: linear-gradient(0deg, #2c3e50, #3498db);
  padding: 3rem 0;
`;

export const Container = styled.div`
  background: white;
  padding-left: 15px;
  padding-right: 15px;
  margin: 15px;
  border-radius: 15px;
`;

export const UnorderedList = styled.ul`
  margin-top: 20px;
  position: relative;
  list-style-type: none;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: Verdana;
`;

export const Year = styled.div`
  color: black;
  font-weight: 600;
`;

export const List = styled.li`
  padding-bottom: 1.5rem;
  border-left: 1px solid #abaaed;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  &:last-child {
    border: 0px;
    padding-bottom: 0;
  }
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: white;
    border: 1.5px solid #4e5ed3;
    border-radius: 10px;
    position: absolute;
    left: -10px;
  }
`;

export const WhatHappened = styled.p`
  color: #4f4f4f;
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
`;
