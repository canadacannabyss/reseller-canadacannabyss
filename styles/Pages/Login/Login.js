import styled from 'styled-components';

const Container = styled.div`
  width: 260px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%); 
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  padding: 20px 20px;
  @media (max-width: 320px) {
    width: 80%;
  }
`;

const BrandDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
  img {
    height: 40px;
    width: 40px;
  }
  p {
    color: #18840f;
    font-size: 15px;
    line-height: 15px;
    span {
      font-weight: 900;
      font-size: 16px;
      color: #b01129;
    }
  }
  .sep {
    content: '';
    width: 2px;
    height: 20px;
    background: #b01129;
    position: relative;
    display: block;
    margin: 0 10px;
  }
  h1 {
    color: #b01129;
    font-size: 17px;
    font-weight: 900;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
`;

const Submit = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  color: rgb(24, 132, 15);
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(24, 132, 15, 0.4);
  border-image: initial;
  border-radius: 4px;
  background: rgba(24, 132, 15, 0.2);
  transition: all 0.15s ease-in-out 0s;
`;

export {
  Container,
  BrandDiv,
  Form,
  Label,
  Input,
  Submit,
};
