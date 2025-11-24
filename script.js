// assets/script.js

// Simple validation for Add / Edit student forms
function validateStudentForm() {
    const name = document.getElementById("student_name")
        ? document.getElementById("student_name").value.trim()
        : "";
    const sid = document.getElementById("student_id")
        ? document.getElementById("student_id").value.trim()
        : "";
    const email = document.getElementById("email")
        ? document.getElementById("email").value.trim()
        : "";
    const dept = document.getElementById("department")
        ? document.getElementById("department").value.trim()
        : "";

    if (name === "" || sid === "" || email === "" || dept === "") {
        alert("Please fill up all fields.");
        return false;
    }

    // Very basic email check
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
