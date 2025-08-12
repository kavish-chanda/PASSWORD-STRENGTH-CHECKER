function checkPassword() {
    let password = document.getElementById('password').value;
    let result=document.getElementById("result");
    const upperLetter = /[A-Z]/.test(password);
    const lowerletter = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[!@#$%^&*()<>?":{}|<>]/.test(password);
    
    if (password.length < 6) {
        result.textContent = "Weak: too short";
        result.style.color = "red";
    } else if (!upperLetter) {
        result.textContent = "Medium: Add uppercase letters!";
        result.style.color = "orange";
    } else if (!lowerletter) {
        result.textContent = "Medium: Add lowercase letters!";
        result.style.color = "orange";
    } else if (!number) {
        result.textContent = "Medium: Add numbers!";
        result.style.color = "orange";
    } else if (!special) {
        result.textContent = "Medium: Add special";
        result.style.color = "orange";
    }
    else{
        result.textContent="Strong: Password is strong";
        result.style.color="yellowgreen"
    }
    
}