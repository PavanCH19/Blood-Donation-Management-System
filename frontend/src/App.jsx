import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import DonarRegistration from "./components/donarRegistration";
import BloodBankRegistration from "./components/bloodbankRegistration";

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/donar-registration">Donar Registration</Link>
                    </li>
                    <li>
                        <Link to="/bloodbank-registration">Blood Bank Registration</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/" />} />
                <Route path="/donar-registration" element={<DonarRegistration />} />
                <Route path="/bloodbank-registration" element={<BloodBankRegistration />} />
            </Routes>
        </Router>
    );
}

export default App;
