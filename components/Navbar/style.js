import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
//   position: fixed;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
`;

const HeaderCenter = styled.div`
  width: 90%;
  padding: 0 20px;

  @media only screen and (max-width: 767px) {
    padding: 0 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 50px;    
`;

const RightMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 12px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #333;
  z-index: 100;
  background: #fff;
  font-weight: ${(props) => props.isActive ? 'bold': 400};

  @media only screen and (max-width: 767px) {
    height: 60px;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  list-style: none;
  position: absolute;
  z-index: 101;
  width: 100%;
  background: #fff;
  top: 80px;
  left: 0;
  margin: 0;
  padding: 10px 0;

  animation: dropdown cubic-bezier(0.23, 1, 0.32, 1) 1;
  opacity: 0.9;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .1);

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export {
  HeaderWrapper,
  HeaderCenter,
  Container,
  Logo,
  RightMenu,
  MenuItem,
  MobileMenu,
};
