import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const openSidebar = document.querySelector('.navBar li:last-child a');
    const closeSidebar = document.querySelector('li:first-child a');

    const openSidebarHandler = () => {
      sidebar.style.display = 'flex';
    };

    const closeSidebarHandler = () => {
      sidebar.style.display = 'none';
    };

    openSidebar.addEventListener('click', openSidebarHandler);
    closeSidebar.addEventListener('click', closeSidebarHandler);

    // Cleanup event listeners on component unmount
    return () => {
      openSidebar.removeEventListener('click', openSidebarHandler);
      closeSidebar.removeEventListener('click', closeSidebarHandler);
    };
  }, []);

  return (
    <nav>
      <ul className="sidebar">
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </a>
        </li>
        <li>
          <Link to="/user-panel">
            <i className="ti ti-user-filled"></i> {user.name}
          </Link>
        </li>
        {user.isAdmin && (
          <li>
            <Link to="/admin">
              <i className="ti ti-settings"></i> Admin
            </Link>
          </li>
        )}
        <li>
          <Link to="/logout">
            <i className="ti ti-logout"></i> Log Out
          </Link>
        </li>
      </ul>
      <ul className="navBar">
        <li>
          <Link to="/">CommunWheels</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/user-panel">
            {user.driver === null ? (
              <>
                {user.name} <i className="ti ti-user-filled"></i>
              </>
            ) : (
              <>
                {user.driver} <i className="ti ti-user-filled"></i>
              </>
            )}
          </Link>
        </li>
        {user.isAdmin && (
          <li className="hideOnMobile">
            <Link to="/admin">
              Admin <i className="ti ti-settings"></i>
            </Link>
          </li>
        )}
        <li className="hideOnMobile">
          <Link to="/logout">
            Log Out <i className="ti ti-logout"></i>
          </Link>
        </li>
        <li className="menuButton">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-menu-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
