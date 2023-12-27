import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiPresentationFill } from "react-icons/ri";
const Sidebar = (props) => {
  const getToggleSidebar = useSelector(state => state.toggle.sidebarToggle)
  const [salesSidebar, setSalesSidebar] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarType = useSelector(state => state.toggle.sidebarType)
  const handleToggle = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      {/* <!-- Dashbaord left Sidebar section   --> */}
      <span class="toggle-icon-dashboard" onClick={handleToggle}><i class="bi bi-list"></i></span>
      <aside class={`left-sidebar ${getToggleSidebar ? 'active' : ''}`}>

        <div class={`sidebar-top `}>
          <img src="img/logo.jpeg" alt="" class="img-fluid" />
          <menu>
            <ul className="list-unstyled ">
              <li className="active">
                <a
                  href=""

                >
                  <i className="fa-solid fa-clapperboard"></i> <span class="list">Dashboard</span>
                </a>

              </li>
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i class="bi bi-people-fill"></i> &nbsp; <span class="list">People</span>
                </a>
                {sidebarType === 'owner' ?
                  <ul className="collapse list-unstyled pt-2 pl-2" id="homeSubmenu">
                    <li>
                      <li>
                        <Link to="/sales-register"><i class="fa-solid fa-plus"></i>&nbsp;<span class="list">Add sales candidate</span></Link>
                      </li>
                      <li>
                        <Link to="/customer-data"><i class="fa-solid fa-eye"></i>&nbsp;<span class="list">View customer</span></Link>
                      </li>

                      {/* <li>
                        <Link to="/customer-register"><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;<span class="list">Add Customer</span></Link>
                      </li> */}
                      <Link to="/sales-data">
                        <RiPresentationFill />&nbsp;<span class="list"> Sales Represntive</span>
                      </Link>
                    </li>

                  </ul> :
                  <ul className="collapse list-unstyled pt-2 pl-2" id="homeSubmenu">
                    <li>
                      <li>
                        <Link to="/customer-register"><i class="fa-solid fa-plus"></i>&nbsp;<span class="list">Add customer</span></Link>
                      </li>
                      {/* <li>
                    <Link to="/sales-login"><i className="fa-solid fa-arrow-right"></i>&nbsp;<span class="list">Sales Login</span></Link>
                  </li> */}

                      <li>
                        <Link to="/customer-data"><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;<span class="list">View customer</span></Link>
                      </li>

                    </li>

                  </ul>}
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
