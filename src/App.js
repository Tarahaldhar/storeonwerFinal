import './App.css';
import {Routes, Route} from 'react-router-dom';
import StoreAdmin from './Component/StoreAdmin';
import CustomerRegister from './Component/CustomerRegister';
import SalesSignup from './Component/SalesSignup';
import ViewCustomerData from './Component/ViewCustomerData';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<StoreAdmin/>}/>
        <Route path='/sales' element={<SalesSignup/>}/>
        <Route path='/customerreview' element={<CustomerRegister/>}/>
        <Route path='/viewcustomer' element={<ViewCustomerData/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
