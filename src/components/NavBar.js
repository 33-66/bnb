import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faClipboard, faComment } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const styles = {
    background: 'grey',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyles = {
    margin: '0 15px',
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    marginRight: '8px',
  };

  return (
    <div style={styles}>
      <Link to="/" style={linkStyles}>
        <FontAwesomeIcon icon={faHome} style={iconStyles} />
        Home
      </Link>
      <Link to="/services" style={linkStyles}>
        <FontAwesomeIcon icon={faBuilding} style={iconStyles} />
        Properties
      </Link>
      <Link to="/postingForm" style={linkStyles}>
        <FontAwesomeIcon icon={faClipboard} style={iconStyles} />
        Post Your Form
      </Link>
      <Link to="/reviews" style={linkStyles}>
        <FontAwesomeIcon icon={faComment} style={iconStyles} />
        Submit & Review
      </Link>
    </div>
  );
}

export default NavBar;
