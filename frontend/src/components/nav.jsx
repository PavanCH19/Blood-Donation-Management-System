import { Link } from "react-router-dom";

const nav = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Go to dashboard</Link>
                </li>
                <li>
                    <Link to="dashboard/donar-registration">Donar Registration</Link>
                </li>
                <li>
                    <Link to="dashboard/bloodbank-registration">Blood Bank Registration</Link>
                </li>
                <li>
                    <Link to="dashboard/login">Login</Link>
                </li>
            </ul>
        </nav>
    </>);
}

export default nav;