import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'our school',
    link: '/our-school',
    submenu: [
      {
        name: 'Mission & Vision',
        link: '/missionvision',
      },
      {
        name: 'About DHM',
        link: '/about',
      },
      {
        name: 'Teachers and Staffs',
        link: '/tchrsandstaffs',
      },
      {
        name: 'Parent Members',
        link: '/parentmembers',
      },
    ],
  },
  { name: 'admission', link: '/admissions' },
  {
    name: 'programs',
    link: '/programs',
    submenu: [
      {
        name: 'Star Casa',
        link: '/starcasa',
      },
      {
        name: 'Junior Casa',
        link: '/jrcasa',
      },
      {
        name: 'Senior Casa',
        link: '/seniorcasa',
      },
      {
        name: 'Advanced Casa',
        link: '/advancedcasa',
      },
      {
        name: 'Grade 1-3',
        link: '/grade1-3',
      },
      {
        name: 'Grade 4-6',
        link: '/grade4-6',
      },
      {
        name: 'Special Education',
        link: '/sped',
      },
      {
        name: 'Summer Class',
        link: '/summerclass',
      },
      {
        name: 'P.E.P. Talks',
        link: '/peptalks',
      },
    ],
  },
  { name: 'news & events', link: '/news-and-events' },
  { name: 'gallery', link: '/gallery' },
  { name: 'testimonial', link: '/testiomonial' },
  { name: 'contact', link: '/contact' },
];

function Header() {
  return (
    <div id="header">
      <div id="top-menu-wrapper">
        <div className="container">
          <div className="top-menu">
            <div className="left">Call us now: (Globe) 09234111231 | (Sun) 09234111231 </div>
            <div className="right">Login</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="menu-bar">
          <div className="menu-left">
            <Link to="/">
              <div className="logo">LOGO HERE</div>
            </Link>
          </div>
          <div className="menu-right">
            <div id="menu-list" className="menu-left">
              {menuItems.map(item => {
                if (item.submenu) {
                  return <SubMenu {...item} />;
                }

                return (
                  <Link key={item.name} to={item.link}>
                    <div>{item.name}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenu(item) {
  const [state, setState] = useState(false);

  const onHover = () => setState(true);
  const onHoverOut = () => setState(false);

  return (
    <Link className="dropdown" onMouseLeave={onHoverOut} onMouseOver={onHover} to={item.link}>
      <span>{item.name}</span>
      <div className={`dropdown-list ${state ? 'show' : ''}`}>
        {item.submenu.map(item => {
          return <Link to={item.link}>{item.name}</Link>;
        })}
      </div>
    </Link>
  );
}

export default Header;
