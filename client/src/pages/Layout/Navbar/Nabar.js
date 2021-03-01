import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Col,
  Row,
  Dropdown
} from 'reactstrap';
import {useSelector, connect, useDispatch} from 'react-redux'
import * as actions from '../../../redux/actions'
import {useHistory, Link} from 'react-router-dom'

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <Container>
          <NavbarBrand>Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                 <Link to='/'>Thực đơn</Link> 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to='/admin'>Món đã đặt</Link> 
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <CDropDown />
        </Container>
      </Navbar>
    </div>
  );
}

export const CDropDown = ({props}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(actions.removeAuthUser) 
    history.push('/login')
  }
  
  return (
    <Collapse isOpen={true} navbar className="d-flex justify-content-end">
      <Nav navbar>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            {(user && user.username) || 'Chưa Đăng Nhập'}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick = {onClickLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  )
}
