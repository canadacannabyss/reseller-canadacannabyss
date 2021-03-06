import styled from 'styled-components';

export const CheckboxDiv = styled.div`
  li {
    list-style: none;
    margin: 0 0 15px 0;
  }
  .styled-checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    & + label:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: #18840f;
    }

    &:hover + label:before {
      background: #18840f;
    }

    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }

    &:checked + label:before {
      background: #18840f;
    }

    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }

    &:checked + label:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 9px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);
    }
  }
`;

export const CheckboxDivChecked = styled.div`
  li {
    list-style: none;
    margin: 0 0 15px 0;
  }
  label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
  .styled-checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    & + label:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: #18840f;
    }

    &:hover + label:before {
      background: #18840f;
    }

    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }

    &:checked + label:before {
      background: #18840f;
    }

    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }
  }
`;
