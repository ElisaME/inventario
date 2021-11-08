import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div class="flex bg-gray-50">
      <Sidebar class="flex-1"/>
      {children}
    </div>
  );
};

export default Layout;