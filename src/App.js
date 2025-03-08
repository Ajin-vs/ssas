import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NoPage from './NoPage';
import HomeLayout from './HomeLayout';
import AdminLayout from './AdminLayout';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import StudentLayout from './StudentLayout';
import AddStudent from './components/adim/AddStudent';
import AddExamHall from './components/adim/AddExamHall';
import AddDepartment from './components/adim/AddDepartment';
import SeatAllocation from './components/adim/SeatAllocation';
import SeatArrangmnet from './components/adim/SeatArrangement';
import StudentsDetail from './components/adim/StudentsDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Layout */}
      <Route path="/" element={< HomeLayout/>}>
          <Route index element={<Navigate to="admin-login" replace />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="student-login" element={<StudentLogin />} />
        </Route>
        {/* Admin Layout */}
        <Route path="admin" element={< AdminLayout/>}>
        <Route index element={<Navigate to="add-student" replace />} />
        <Route path="add-student" element={<AddStudent />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="add-exam-hall" element={<AddExamHall />} />
          <Route path="seat-allocation" element={<SeatAllocation />} />
          <Route path='seat-arrangement' element={<SeatArrangmnet/>}/>
          <Route path='students-deatails' element={<StudentsDetail/>}/>
        </Route>
        {/* Student Layout */}
        <Route path="student" element={< StudentLayout/>}>
          {/* <Route path="add-student" element={<AddStudent />} />
          <Route path="add-exam-hall" element={<AddExamHall />} /> */}
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
