function generateRegisterForm() {
    var brSpace = document.createElement("br");
    var labelForLogin = document.createElement("label");
    labelForLogin.textContent = "login";
    labelForLogin.className = "loginLabel";
    var labelforLoginElement = document.getElementsByClassName("loginLabel");
    document.body.appendChild(labelForLogin);
    if (labelforLoginElement.length > 1) {
        document.body.removeChild(labelForLogin);
    };
    var inputForLogin = document.createElement("input");
    inputForLogin.className = "loginInput";
    var inputForLoginElement = document.getElementsByClassName("loginInput");
    if (inputForLoginElement.length > 1) {
        labelForLogin.removeChild(inputForLogin)
    }
    labelForLogin.appendChild(inputForLogin);
    var labelForPassword = document.createElement("label");
    labelForPassword.textContent = "password";
    labelForPassword.className = "passwordLabel";
    var labelForPasswordElement = document.getElementsByClassName("passwordLabel");
    document.body.appendChild(labelForPassword);
    if (labelForPasswordElement.length > 1) {
        document.body.removeChild(labelForPassword);
    };
    var inputForPassword = document.createElement("input");
    inputForPassword.className = "inputForPassword";
    var inputForPasswordElement = document.getElementsByClassName("inputForPassword");
    if (inputForPasswordElement.length == 1) {
        labelForLogin.removeChild(inputForPassword)
    }
    document.body.appendChild(inputForPassword);
    var labelForAge = document.createElement("label")
    labelForAge.textContent = "wiek";
    labelForAge.className = "ageLabel"
    var labelForAgeElement = document.getElementsByClassName("ageLabel")
    if (labelForAgeElement.length == 1) {
        document.body.removeChild(labelForAge)
    }
    document.body.appendChild(labelForAge)
    var inputForAge = document.createElement("input")
    inputForAge.className = "ageInput"
    var inputForAgeElement = document.getElementsByClassName("ageInput")
    document.body.appendChild(inputForAge)

};

function getFormData() {
    var getLogin = document.getElementsByClassName("loginInput");
    var loginValue = "login: " + getLogin[0].value;
    var getPassword = document.getElementsByClassName("inputForPassword")
    var passwordValue = "password: " + getPassword[0].value;
    var getAge = document.getElementsByClassName("ageInput")
    var ageValue = "age: " + getAge[0].value;
    console.log(loginValue)
    console.log(passwordValue)
    console.log(ageValue)
};
