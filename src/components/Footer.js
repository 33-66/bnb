import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <h2>For More Info;</h2>
      
      <p>
      Contact us:
      <a href=" Contact: 0700758694">0700758694</a>  | 

      Email us:
      <a href="mailto:contact@example.com">bnbexplorer@942@gmail.com</a> |

      Location:
      <a href="https://www.google.com/maps/">Google Map</a>
      </p>
     
     
    </footer>
  );
}

const footerStyle = {
  background: 'beige',
  padding: '20px',
  textAlign:'center'
  
  
  
};

export default Footer;