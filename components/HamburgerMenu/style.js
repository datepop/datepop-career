import styled from 'styled-components';

const Wrapper = styled.div`
  width: 24px;
  height: 15px;
  position: relative;
  transform: rotate(0deg);
  display: flex;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  span {
    &:first-child {
    transform: ${(props) => props.isOpen ? 'translate3d(0, 6px, 0) rotate(45deg)' : 'translate3d(0, 0, 0) rotate(0)'};
    margin-top: -1px;
    }

    &:nth-child(2) {
      transition-timing-function: 'ease';
      transition-duration: 0.1s;
      opacity: ${(props) => props.isOpen ? '0' : '1'};
      top: 6px;
      margin-top: -1px;
    }

    &:nth-child(3) {
      transform: ${(props) => props.isOpen ? 'translate3d(0, -6px, 0) rotate(-45deg)' : 'translate3d(0, 0, 0) rotate(0)'};
      top: 12px;
      margin-top: -1px;
    }
  }
`;

const Line = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: #333;
  transition-timing-function: 'ease';
  transition-duration: 0.5s;
  border-radius: 0px;
  transform-origin: center;
  position: absolute;
`;

export {
  Wrapper,
  Line
};