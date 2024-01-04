import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiPresentationFill } from "react-icons/ri";
import { actionCreators as salesToken } from '../Store/SalesAuthToken/StoreAdminAction';
import { actionCreators as adminToken } from '../Store/StoreAdminAuth/StoreAdminAction';

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showSalesModal, setShowSalesModal] = useState(false)
  const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin?.access)
  const getSalesTokenByStore = useSelector(state => state?.salesToken?.salestoken?.access)
  const getToggleSidebar = useSelector(state => state.toggle.sidebarToggle)
  const [salesSidebar, setSalesSidebar] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarType = useSelector(state => state.toggle.sidebarType)
  const handleToggle = () => {
    setShowSidebar(!showSidebar)
  }
  const handleLogout = () => {
    if (sidebarType === 'owner') {
      dispatch(adminToken.masterStoreAdmin())
      navigate('/')
    }
    else {
      dispatch(salesToken.salesToken())
      navigate('/sales-login')
    }
  }
  const handleAddSales = () => {

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
                <Link
                  to="/admin">
                  <i className="fa-solid fa-clapperboard"></i> <span class="list">Dashboard</span>
                </Link>

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
                        <Link to="/sales-register" onClick={() => handleAddSales()}><i class="fa-solid fa-plus"></i>&nbsp;<span class="list">Add sales candidate</span></Link>
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
            <ul style={{ paddingLeft: '0px !important' }}><p style={{ fontSize: '14px', position: 'relative', top: '38px' }}> Hi, User</p>
              <img className="message-sidebar" src='img/Message.png' style={{ width: '150px', height: 'auto' }} /></ul>
            <img src='img/OWL.png' style={{ height: 'auto' }} />
          </div>
          <img src="images/sidebar-main-img.png" alt="" class="img-fluid" />
          <button className="main-btn btn" onClick={() => handleLogout()}>Logout</button>
        </div>
      </aside>
      {/* <!-- Dashbaord Right Sidebar section   --> */}
    </>
  );
};

export default Sidebar;
