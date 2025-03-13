import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function StudentLayout(){
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('studentId');
        navigate('/');
    }
    return (
        <>
            <ul>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='your-profile'
                    >
                        Your Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => isActive ? 'active' : ''}
                        to='view-my-hall'
                    >
                        View My Hall
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