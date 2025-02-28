import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
    const navigate = useNavigate();
    function handleLogout(){
        navigate('/')
    }
    return (
        <>
            {/* <Link to='/admin'>Home</Link> */}
            {/* <Link to='add-student'>Add Student</Link> */}
            {/* <Link to='add-exam-hall'>Add Exam Hall</Link> */}

            <ul>
                <li><Link className="active" to='add-student'>Add Student</Link></li>
                <li><Link to='add-department'>Add Department</Link></li>
                <li><Link to='add-exam-hall'>Add Exam Hall</Link></li>
                <li><Link to='seat-allocation'>Seat Allocation</Link></li>
                <li><Link to='seat-arrangement'>View Seating Arrangemnet</Link></li>
                <li><Link to='students-deatails'>Student Details</Link></li>
                {/* <li><Link to='add-exam-hall'>Add Exam Hall</Link></li> */}
                <li style={{float:'right'}} onClick={handleLogout}><Link >Logout</Link></li>
            </ul>
            <Outlet />

        </>

    )
}