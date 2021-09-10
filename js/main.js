const loginForm = document.querySelector("form.login")
const signupForm = document.querySelector("form.signup")
const loginButton = document.querySelector("label.login")
const signupButton = document.querySelector("label.signup")
const signupLink = document.querySelector(".signup-link a")
const signinLink = document.querySelector(".signin-link a")
const loginText = document.querySelector(".title-text .login")
const signupText = document.querySelector(".title-text .signup")

signupButton.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
})

loginButton.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
})

signupLink.onclick = (() => {
    signupButton.click()
    return false
})

signinLink.onclick = (() => {
    loginButton.click()
    return false
})