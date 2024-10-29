import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard"
import DonarRegistration from "./components/donarRegistration";
import BloodBankRegistration from "./components/bloodbankRegistration";
import Login from "./components/login";
import Nav from "./components/nav";

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="dashboard/donar-registration" element={<DonarRegistration />} />
                <Route path="dashboard/bloodbank-registration" element={<BloodBankRegistration />} />
                <Route path="dashboard/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
