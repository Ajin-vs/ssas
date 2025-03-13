import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";

export default function AdminLayout() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('admin');
        navigate('/');
    }

    return (
        <>
            <ul>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='add-student'
                    >
                        Add Student
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='add-department'
                    >
                        Add Department
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='add-exam-hall'
                    >
                        Add Exam Hall
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='seat-allocation'
                    >
                        Seat Allocation
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='seat-arrangement'
                    >
                        View Seating Arrangement
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='students-deatails'
                    >
                        Student Details
                    </NavLink>
                </li>
                <li style={{ float: 'right' }} onClick={handleLogout}>
                    <Link to="#">Logout</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}
