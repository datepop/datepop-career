import { Component } from 'react';
import {
    HeaderWrapper,
    HeaderCenter,
    Container,
    Logo,
    RightMenu,
    MenuItem,
    MobileMenu,
  } from './style';
import HamburgerMenu from '../HamburgerMenu';
import onClickOutside from 'react-onclickoutside';

class Navbar extends Component {
    state = {
      isOpen: false,
    };
  
    handleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  
    handleClickOutside = (event) => {
      this.setState({
        isOpen: false,
      });
    }
    render() {
    return (
        <HeaderWrapper>
            <HeaderCenter>
              <Container>
                <a href='/'>
                    <Logo src="/logo.png" />
                </a>

                <RightMenu>
                    {this.props.navbar.map((item, index) => (
                    <a href={item.link} key={index}>
                        <MenuItem isActive>
                            {item.name}
                        </MenuItem>
                    </a>
                    ))}
                </RightMenu>

                <HamburgerMenu
                    isOpen={this.state.isOpen}
                    menuClicked={this.handleOpen}
                />

                <MobileMenu isOpen={this.state.isOpen}>
                    {this.props.navbar.map((item, index) => (
                    <a href={item.link} key={index}>
                        <MenuItem isActive>
                            {item.name}
                        </MenuItem>
                    </a>
                    ))}
                </MobileMenu>
              </Container>
            </HeaderCenter>
        </HeaderWrapper>
    );
    }
}

const AppHeader = onClickOutside(Navbar);

export default AppHeader;