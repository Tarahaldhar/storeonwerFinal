import './App.css';
import {Routes, Route} from 'react-router-dom';
import StoreAdmin from './Component/StoreAdmin';
import CustomerRegister from './Component/CustomerRegister';
import SalesSignup from './Component/SalesSignup';
import ViewCustomerData from './Component/ViewCustomerData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<StoreAdmin/>}/>
        <Route path='/salesSignup' element={<SalesSignup/>}/>
        <Route path='/customerjorney' element={<CustomerRegister/>}/>
        <Route path='/viewcustomer' element={<ViewCustomerData/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
