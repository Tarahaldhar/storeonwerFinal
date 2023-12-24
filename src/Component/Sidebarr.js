import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleToggle = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      {/* <!-- Dashbaord left Sidebar section   --> */}
      <aside class={`left-sidebar ${showSidebar ? 'active' : ''}`}>
        <span class="toggle-icon-dashboard" onClick={handleToggle}><i class="bi bi-list"></i></span>
        <div class={`sidebar-top `}>
          <img src="img/logo.jpeg" alt="" class="img-fluid" />
          <menu>
            <ul className="list-unstyled ">
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa-solid fa-clapperboard"></i> <span class="list">Dashboard</span>
                </a>
                <ul className="collapse list-unstyled pt-2 pl-2" id="homeSubmenu">
                  <li>
                    <li>
                      <Link to="/sales-register"><i className="fa-solid fa-arrow-right"></i>&nbsp;<span class="list">Sales Registration</span></Link>
                    </li>
                    <li>
                      <Link to="/sales-login"><i className="fa-solid fa-arrow-right"></i>&nbsp;<span class="list">Sales Login</span></Link>
                    </li>

                    <li>
                      <Link to="/customer-register"><i className="fa-solid fa-arrow-right"></i>&nbsp;<span class="list">Customer Register</span></Link>
                    </li>
                    <Link to="/sales-data">
                      <i className="fa-solid fa-arrow-right"></i>&nbsp;<span class="list"> Sales Represntive</span>
                    </Link>
                  </li>

                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-people-fill"></i> &nbsp;
                  <span class="list">People</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-bar-chart"></i>&nbsp; <span class="list">Charts</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-journal-text"></i>&nbsp;  <span class="list">Task Board</span>

                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-chat-dots"></i>&nbsp;<span class="list">Support</span>
                </a>
              </li>
            </ul>
          </menu>
        </div>


        <div class="sidebar-bottom">
          <div className='owlimg'>
            <ul style={{ paddingLeft: '0px !important' }}><p style={{ fontSize: '18px', position: 'relative', top: '68px' }}> Hi, User</p><img src='img/profile.jpeg' style={{ width: '100px', height: 'auto' }} /><br /></ul>
            <img src='img/owl2.jpeg' style={{ height: 'auto' }} />
          </div>
          <img src="images/sidebar-main-img.png" alt="" class="img-fluid" />
          <button class="main-btn btn">Logout</button>
        </div>
      </aside>
      {/* <!-- Dashbaord Right Sidebar section   --> */}
    </>
  );
};

export default Sidebar;
