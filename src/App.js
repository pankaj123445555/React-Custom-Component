import './App.css';
import { Route, Routes } from 'react-router-dom';
import SideBarComponent from './Component/Sidebar/sidebar';
import EmployeeMamnagement from './Component/EmployeeManagement/employeemanagement';
import Timer from './Component/Timer/timer';
import FolderSystem from './Component/FolderSystem/folderSystem';
import Debouncing from './Component/DebouncingThrottling/debouncing';
import ThrotllingComponent from './Component/DebouncingThrottling/Trotlling';
import InfiniteScrollBar from './Component/InfiniteScrollBar';
import Pagination from './Component/Pagination';
import PasswordGenerator from './Component/PasswordGenerator';
import CustomHook from './Component/CustomHook';
import Callback from './Component/CallBack';
import Otp from './Component/OTP';
import ProgressBar from './Component/ProgressBar';
import Tabs from './Component/Tabs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/employee' element = {<EmployeeMamnagement/>}/>
        <Route path='/side-bar' element = {<SideBarComponent/>}/>
        <Route path='/timer' element = {<Timer/>}/>
        <Route path='/folder-system' element = {<FolderSystem/>}/>
        <Route path='/debouncing' element = {<Debouncing/>}/>
        <Route path='/throtlling' element = {<ThrotllingComponent/>}/>
        <Route path='/infinite' element = {<InfiniteScrollBar/>}/>
        <Route path='/pagination' element= {<Pagination/>}/>
        <Route path='/password-generator' element= {<PasswordGenerator/>}/>
        <Route path='/custom-hook' element ={<CustomHook/>}/>
        <Route path='call-back' element = {<Callback/>}/>
        <Route path='/otp' element = {<Otp/>}/>
        <Route path='/progress-bar' element = {<ProgressBar/>}/>
        <Route path='/tabs' element = {<Tabs/>}/>
      </Routes>
    </div>
  );
}

export default App;
