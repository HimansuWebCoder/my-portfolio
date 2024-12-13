import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Navigation.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/*
<span class="material-icons-outlined">
menu
</span>
*/
function Navigation() {

	 const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	return (
		<div className="nav-container">
			<Logo />
			<div className="menu-container">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
	 
	<span class="material-icons-outlined">
	<img src="/assets/images/menu.svg" alt="menu icon" />
	</span>

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Skills</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
			{/*<div className="routes-container">
				<div className="menu-container">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<ul className="links-container">
					<li>
						<Link to="/about">About me</Link>
					</li>
					<li>
						<Link to="/skills">My Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>*/}
		</div>
	);
}

export default Navigation;
