const validation = (values, termsAccepted, formType) => {
    let error = {};

    // Regex pattern for validations
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@_#]{8,}$/;
    const mobileNumberPattern = /^\d{10}$/;

    //Name validation
    if (values.name === "") {
        error.name = "Name should not be empty";
    }

    // Mobile number validation
    if (values.mobileNumber === "") {
        error.mobileNumber = "Mobile number should not be empty";
    } else if (!mobileNumberPattern.test(values.mobileNumber)) {
        error.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        error.email = "Email didn't match";
    }

    if (formType === "donor") {
        if (values.age === "") {
            error.age = "Age should not be empty";
        } else {
            const age = parseInt(values.age, 10);
            if (isNaN(age) || age < 18 || age > 65) {
                error.age = "Please enter a valid age between 18 and 65";
            }
        }

        if (values.selectedBlood === "") {
            error.selectedBlood = "Please select the blood group";
        }

        if (values.selectedGender === "") {
            error.selectedGender = "Please select the gender";
        }
    }


    //state validation 
    if (values.selectedState === "") {
        error.selectedState = "Please select the state";
    }

    //District validation 
    if (values.selectedDistrict === "") {
        error.selectedDistrict = "Please select the District";
    }

    //Taluq validation 
    if (values.selectedTaluq === "") {
        error.selectedTaluq = "Please select the Taluq";
    }

    //City validation
    if (values.selectedCity === "") {
        error.selectedCity = "Please select the City";
    }

    //Address validation
    if (values.address === "") {
        error.address = "address should not be empty"
    }

    // Password validation
    if (values.password === "") {
        error.password = "Password should not be empty";
    }
    // else if (!passwordPattern.test(values.password)) {
    //     error.email = "The pattern requires at least one uppercase letter, one digit, and a total of eight or more characters from letters, digits, and the symbols @, _, or #";
    // }

    // Password match validation
    if (values.password !== values.confirmPassword) {
        error.confirmPassword = "Passwords didn't match";
    }

    // Checkbox validation
    if (!termsAccepted) {
        error.checkbox = "You must accept the terms and conditions";
    }

    return error;
};

export default validation;
