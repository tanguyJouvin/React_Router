import React from 'react' ;
import {} from 'reactstrap';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return(
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link exact to="/" className='nav-link'>Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/notre-histoire" className='nav-link'>History</Link>
          </NavItem>
          <NavItem>
            <Link to="/Contact" className='nav-link'>Contact</Link>
          </NavItem>
        </Nav>
        </Navbar>
    </div>
  )
}

export default Menu;
