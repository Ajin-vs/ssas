import { Link, Outlet, NavLink, Navigate } from "react-router-dom";

export default function HomeLayout() {
    // Redirect to /student-login by default
    return (
        <div>
            {/* <Navigate to="/admin-login" replace /> */}
            
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li style={{ textAlign: 'center' }}>
                        <NavLink
                            to='/admin-login'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Admin Login
                        </NavLink>
                    </li>
                    <li style={{ textAlign: 'center' }}>
                        <NavLink
                            to='/student-login'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Student Login
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Outlet />
        </div>
    );
}
