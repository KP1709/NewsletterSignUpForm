function validate() {
    const emailAddress = document.getElementById("form__input-text").value
    let emailInputBox = document.getElementById("form__input-text")
    let emailInputErrorMessage = document.getElementById("form__input-error")

    let check = emailAddress.lastIndexOf("@");

    if (check === -1) {
        emailInputBox.style.borderColor = "#FF0000";
        emailInputBox.style.color= "#FF0000";
        emailInputBox.style.backgroundColor = ' #ffcccc'
        emailInputErrorMessage.innerText = "Valid email required"
    }
    else {
        document.querySelector('#confirmation').style.display = "block";
        document.querySelector('#sign-up').style.display = "none";

        // Dynamically typing HTML to target span section
        document.getElementById("confirmation__message").innerHTML = "<h2 class='form__description'>A confirmation email has been set to <span id='email__bold'></span>. Please open it and click the button inside to confirm your subscription.</h2>"
        document.getElementById('email__bold').innerHTML = emailAddress
    }
    
}



