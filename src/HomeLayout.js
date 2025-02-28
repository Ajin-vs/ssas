import { Link, Outlet } from "react-router-dom";

export default function HomeLayout() {
    return (
        <div>
            <div >
                <ul >
                    <li style={{textAlign:'center'}}><Link to='/admin-login'>Admin Login</Link></li>
                    <li style={{textAlign:'center'}}> <Link to='/student-login'> Student Login</Link></li>
                </ul>
            </div>

            <Outlet />
        </div>
    )
}