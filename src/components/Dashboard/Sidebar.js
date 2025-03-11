import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faBox, faHistory, faUser, faCalendarAlt, faTasks, faFileInvoice, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ toggle, setToggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
  
  const sidebarNavItems = [
    {
      display: 'Dashboard',
      icon: <FontAwesomeIcon icon={faHome} />,
      to: '/user/dashboard',
      section: '/dashboard'
    },
    {
      display: 'Appointment',
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,
      to: '/user/appointment',
      section: 'appointment'
    },
    {
      display: 'Tasks',
      icon: <FontAwesomeIcon icon={faTasks} />,
      to: '/user/task',
      section: 'task'
    },
    {
      display: 'Bills',
      icon: <FontAwesomeIcon icon={faFileInvoice} />,
      to: '/user/bill',
      section: 'bill'
    },
    {
      display: 'Calendar',
      icon: <FontAwesomeIcon icon={faCalendarAlt} />,
      to: '/user/calendar',
      section: 'calendar'
    },
    {
      display: 'Package',
      icon: <FontAwesomeIcon icon={faBox} />,
      to: '/user/package',
      section: 'package'
    },
    {
      display: 'History',
      icon: <FontAwesomeIcon icon={faHistory} />,
      to: '/user/history',
      section: 'history'
    },
    {
      display: 'Profile',
      icon: <FontAwesomeIcon icon={faUser} />,
      to: '/user/profile',
      section: 'profile'
    },
  ];

  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className={`sidebar h-screen p-3 ${toggle ? 'w-64' : 'w-12'}`}>
      <div className="sidebar__logo border border-gray-400 p-3 text-white">
        <img src="../images/logo-bamfer02 1.png" alt="" className="img-fluid w-48" />
      </div>
      <div ref={sidebarRef} className="sidebar__menu ">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
          }}
        ></div>
        {
          sidebarNavItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.to}
                className={`sidebar-link ${activeIndex === index ? 'bg-pink-500' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(activeIndex)}
              >
                <div className={`sidebar__menu__item py-3 px-4  flex items-center justify-between transition duration-300 ${activeIndex === index ? 'bg-white text-[#184CA2]' : ' text-white '}`}>
                  <div className="flex items-center">
                    <div className="mr-3">
                      {item.icon}
                    </div>
                    <div className="text-sm">
                      {item.display}
                    </div>
                  </div>
                  {toggle && (
                    <div className="ml-3 opacity-0 transition duration-300" style={{ opacity: activeIndex === index ? 1 : 0 }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  )}
                </div>
              </Link>
              {toggle && <hr className="border-t border-gray-300" />}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
