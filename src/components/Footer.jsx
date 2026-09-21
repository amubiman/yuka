import React from 'react';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#091C36',
    color: '#9ca3af',
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
    borderTop: '1px solid #1e293b'
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} YUKA Digital Media. Built with Passion.
    </footer>
  );
}
