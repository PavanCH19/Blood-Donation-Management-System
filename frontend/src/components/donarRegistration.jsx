import { useState } from "react";
import Validation from "./formValidation";
import axios from "axios";


const DonarRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        email: "",
        age: "",
        selectedBlood: "",
        selectedGender: "",
        selectedState: "",
        selectedDistrict: "",
        selectedTaluq: "",
        selectedCity: "",
        address: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const [termsAccepted, setTermsAccepted] = useState(false); // State for terms acceptance
    const [errors, setErrors] = useState({});

    const handleTermsChange = () => {
        setTermsAccepted((prev) => !prev);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = Validation(formData, termsAccepted);
        setErrors(validationErrors);

        // Check if there are no errors before proceeding
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", JSON.stringify(formData));

            axios.post("http://127.0.0.1:8081/donarRegistration", formData)
                .then(response => {
                    alert(response.data.message);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to insert data');
                });
        }
    };


    return (
        <>
            <div className="donarRegContainer">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="inputLabels">Name : </label>
                    <input type="text" id="name" name="name" className="inputField" placeholder="enter your name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="errorshow">{errors.name}</span>}

                    <label htmlFor="mobileNumber" className="inputLabels">Mobile Number : </label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" className="inputField" placeholder="enter your number" minLength={10} value={formData.mobileNumber} onChange={handleChange} />
                    {errors.mobileNumber && <span className="errorshow">{errors.mobileNumber}</span>}

                    <label htmlFor="email" className="inputLabels">Email : </label>
                    <input type="email" id="email" name="email" className="inputField" placeholder="enter your email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="errorshow">{errors.email}</span>}

                    <label htmlFor="age" className="inputLabels">Age : </label>
                    <input type="number" id="age" name="age" className="inputField" placeholder="enter your age" value={formData.age} onChange={handleChange} />
                    {errors.age && <span className="errorshow">{errors.age}</span>}

                    <div>
                        <label htmlFor="selectblood">Select Blood Group : </label>
                        <select name="selectedBlood" id="selectblood" value={formData.selectedBlood} onChange={handleChange} >
                            <option value="" disabled>Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    {errors.selectedBlood && <span className="errorshow">{errors.selectedBlood}</span>}

                    <div>
                        <label> Gender : </label>
                        <label>
                            <input type="radio" name="selectedGender" value="Male" checked={formData.selectedGender === "Male"} onChange={handleChange} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="selectedGender" value="Female" checked={formData.selectedGender === "Female"} onChange={handleChange} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="selectedGender" value="Others" checked={formData.selectedGender === "Others"} onChange={handleChange} />
                            Others
                        </label>
                    </div>
                    {errors.selectedGender && <span className="errorshow">{errors.selectedGender}</span>}

                    <div>
                        <label htmlFor="selectState">State : </label>
                        <select name="selectedState" id="selectState" value={formData.selectedState} onChange={handleChange} >
                            <option value="" disabled>Select State</option>
                            <option value="Karnataka">Karnataka</option>
                        </select>
                    </div>
                    {errors.selectedState && <span className="errorshow">{errors.selectedState}</span>}

                    <div>
                        <label htmlFor="selectDistrict">District : </label>
                        <select name="selectedDistrict" id="selectDistrict" value={formData.selectedDistrict} onChange={handleChange} >
                            <option value="" disabled>Select District</option>
                            <option value="Haveri">Haveri</option>
                        </select>
                    </div>
                    {errors.selectedDistrict && <span className="errorshow">{errors.selectedDistrict}</span>}

                    <div>
                        <label htmlFor="selectTaluq">Taluq : </label>
                        <select name="selectedTaluq" id="selectTaluq" value={formData.selectedTaluq} onChange={handleChange} >
                            <option value="" disabled>Select Taluq</option>
                            <option value="Haveri">Haveri</option>
                        </select>
                    </div>
                    {errors.selectedTaluq && <span className="errorshow">{errors.selectedTaluq}</span>}

                    <div>
                        <label htmlFor="selectCity">City : </label>
                        <select name="selectedCity" id="selectCity" value={formData.selectedCity} onChange={handleChange} >
                            <option value="" disabled>Select City</option>
                            <option value="Devihosur">Devihosur</option>
                        </select>
                    </div>
                    {errors.selectedCity && <span className="errorshow">{errors.selectedCity}</span>}

                    <label htmlFor="address" className="inputLabels">Address : </label>
                    <input type="text" id="address" name="address" className="inputField" placeholder="enter your address" value={formData.address} onChange={handleChange} />
                    {errors.address && <span className="errorshow">{errors.address}</span>}

                    <label htmlFor="password" className="inputLabels">Password : </label>
                    <input type="password" id="password" name="password" className="inputField" placeholder="enter password of length 8" value={formData.password} onChange={handleChange} />
                    {errors.password && <span className="errorshow">{errors.password}</span>}

                    <label htmlFor="confirmPassword" className="inputLabels">Confirm Password : </label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="inputField" placeholder="confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <span className="errorshow">{errors.confirmPassword}</span>}

                    <div>
                        <input type="checkbox" id="terms" name="terms" checked={termsAccepted} onChange={handleTermsChange} />

                        <label htmlFor="terms" className="inputLabels"> I accept the
                            <a href="#">terms and conditions</a>
                        </label>
                    </div>
                    {errors.checkbox && <span className="errorshow">{errors.checkbox}</span>}

                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </>
    );
};

export default DonarRegistration;