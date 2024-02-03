import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Order from './pages/Order';
import Customer from './pages/Customer';
import Customer_Detail from './pages/Customer_Detail';
import Foods from './pages/Foods';
import Order_Detail from './pages/Order_Detail';
import Reviews from './pages/Reviews';
import Saved from './pages/Saved';
import Order_List from './pages/Order_List';
import Profile from "./pages/Profile";
import Billing from "./pages/Billing";
import Two_F_A from "./pages/Two_F_A";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
        <Route path='/' element={<Dashboard/>}  />
            <Route path='/analytics' element={<Analytics/>}  />
            <Route path='/calendar' element={<Calendar/>}  />
            <Route path='/order' element={<Order/>}  />
            <Route path='/customer_detail' element={<Customer_Detail/>}  />
            <Route path='/customer' element={<Customer/>}  />
            <Route path='/foods' element={<Foods/>}  />
            <Route path='/order_detail' element={<Order_Detail/>}  />
            <Route path='/order_list' element={<Order_List/>}  />
            <Route path='/reviews' element={<Reviews/>}  />
            <Route path='/saved' element={<Saved/>}  />
            <Route path='/profile' element={<Profile/>}  />
            <Route path='/billing' element={<Billing/>}  />
            <Route path='/2fa' element={<Two_F_A/>}  />
           
            

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
