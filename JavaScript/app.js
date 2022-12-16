const signIn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();
    const userName = document.getElementById('name');
    const emailAddress = document.getElementById('email');
    if (userName.value === ""){
     alert("Please enter your fullname");
     userName.focus();
     return false;
    }
    if (emailAddress === ""){
        alert("please enter your email address.");
        emailAddress.focus;
        return false;
    }
    if (!emailIsValid(emailAddress.value)){
        emailAddress.focus();
        return false;
    }
    return true; //Can submit the form datato the server   
    
}
const emailIsValid = email => {
    return /^[^s@]+@[^s@]+\.[^\s@]+$/.test(email);
}
submitBtn.addEventListener('click', validate);