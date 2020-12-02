import styled from "styled-components";

const List = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListLiContent = styled.div`
  ${(props) => console.log("variants length:", props.variants)}
  background: #efefef;
  border-radius: 4px;
  padding: 7px 10px;
  margin-bottom: 5px;
  height: 40px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 35px 1fr 1fr;
  border: 1px solid #efefef;
  cursor: pointer;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-self: center;
  }
  .media {
    width: 35px;
    height: 35px;
    background: #fff;
    justify-content: center;
    align-items: center;
    display: flex;
    align-self: center;
    border-radius: 4px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 4px;
    }
  }
  .productName {
    display: flex;
    align-content: center;
    /* @media (max-width: 1190px) {
      width: 300px;
    }
    @media (max-width: 991px) {
      width: 400px;
    } */
    p {
      color: #18840f;
      font-weight: 900;
      text-decoration: none;
    }
  }
  .featured {
    display: flex;
    flex-direction: row;
    justify-self: center;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70px;
  }
  @media (max-width: 1199px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 35px 1fr 1fr;
  }
  @media (max-width: 991px) {
    .price,
    .compareTo {
      width: 100px;
    }
    .createdAt,
    .updatedAt {
      width: 220px;
    }
    .featured {
      width: 100px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VariantsDivFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 11px;
    padding-left: 5px;
    color: #18840f;
  }
  select {
    display: table;
    max-width: fit-content;
    background: #efefef;
    color: #18840f;
    border: none;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
`;

const EditLink = styled.a`
  background: #d1e6cf;
  padding: 6px 8px;
  border-radius: 4px;
  svg {
    color: #18840f;
  }
`;

const SpansDiv = styled.div`
  padding: 7px 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: #18840f;
    font-weight: 900;
  }
  .productName {
    width: 400px;
    @media (max-width: 1190px) {
      width: 300px;
    }
    @media (max-width: 991px) {
      width: 400px;
    }
    a {
      color: #18840f;
      font-weight: 900;
      text-decoration: none;
    }
  }
  .featured {
    display: flex;
    flex-direction: row;
    justify-self: center;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70px;
  }
  @media (max-width: 1199px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 35px 1fr;
  }
  @media (max-width: 991px) {
    .price,
    .compareTo {
      width: 100px;
    }
    .createdAt,
    .updatedAt {
      width: 220px;
    }
    .featured {
      width: 100px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DeleteButton = styled.button`
  background: #ffafaf;
  border-radius: 4px;
  border: none;
  padding: 6px 8px;
  &:focus {
    outline: none;
  }
  svg {
    color: #ec0000;
  }
`;

export {
  List,
  ListLiContent,
  EditLink,
  VariantsDivFlex,
  ProductSelectDiv,
  DeleteButton,
  SpansDiv,
};
