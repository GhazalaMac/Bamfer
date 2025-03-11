import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox,  faCalendarAlt, faTasks, faFileInvoice, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import dashboardIcon from '../../../public/images/leads/Dashboard.png';

// import Nav from './Nav'
const sidebarNavItems = [
  {
    display: 'Leads Dashboard',
    // icon: <img src={dashboardIcon} alt="Leads Dashboard Icon" />,
    to: '/leads/dashboard',
    section: '/dashboard'
},

  {
    display: 'Tasks',
    to: '/leads/tasks',
    section: 'tasks'
  },
  {
    display: 'Contacts',
    to: '/leads/contacts',
    section: 'contacts'
  },
  {
    display: 'Leads',
    to: '/leads/leads',
    section: 'leads'
  },
  {
    display: 'Invoices',
    to: '/leads/invoices',
    section: 'invoices'
  },
 
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();
    const [toggle, setToggle] = useState(true)




  const Toggle=() => {
    setToggle(!toggle)
  }


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
    <div className='flex h-screen overflow-hidden bg-gray-200'>
      <div className="sidebar bg-[#184CA2] p-3">
      <div className="sidebar__logo border border-gray-400 p-3 text-white">
          <img src="../images/logo-bamfer02 1.png" alt="" className="img-fluid w-48" />
        </div>
        <div ref={sidebarRef} className="sidebar__menu overflow-y-auto">
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
                  className="sidebar-link"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(activeIndex)}
                >
                  <div className={`sidebar__menu__item py-3 px-4  flex items-center justify-between transition duration-300 ${activeIndex === index ? 'bg-white text-[#184CA2]' : 'bg-[#184CA2] text-white '}`}>
                    <div className="flex items-center">
                      <div className="mr-3">
                        {item.icon}
                      </div>
                      <div className="text-sm">
                        {item.display}
                      </div>
                    </div>
                    <div className="ml-3 opacity-0 transition duration-300" style={{ opacity: activeIndex === index ? 1 : 0 }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </Link>
                <hr className="border-t border-gray-300" />
              </div>
            ))
          }
        </div>
      </div>
     
      
    </div>
  );
};

export default Sidebar;
