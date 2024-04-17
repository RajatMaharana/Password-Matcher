const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
]

function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrmPassword").value;
    let message = document.getElementById("message");
    let val = document.getElementById("strongPassword");
    let info = document.getElementById("info");
    let submitBtn = document.getElementById("submit-btn");
    let strongPassword = true;
    message.textContent = "";

    if (password.length == 0) {
        val.textContent = "Password cannot be empty!"
        val.style.color = "red";
        info.textContent = "Password must be 8 characters long and it must be a combination of characters(a-z),numbers(1-0) and special symbols(@, !,#, $)."
    } else {
        requirements.forEach(item => {
            const isValid = item.regex.test(password);
            if (!isValid) {
                val.textContent = "Create a strong password"
                info.textContent = "Password must be 8 characters long and it must be a combination of characters(a-z),numbers(1-0) and special symbols(@, !,#, $). "
                cnfrmPassword = "";
                val.style.color = "red";
                info.style.marginBottom = "15px";
                strongPassword = false;
                return;
            }
            if (isValid) {
                val.textContent = "";
                info.style.marginBottom = "-25px";
            }
        })
    }


    if (strongPassword && (cnfrmPassword != "")) {
        if (password.length != 0) {
            if (password == cnfrmPassword) {
                message.textContent = "Password matched";
                message.style.color = "green";
                submitBtn.style.backgroundColor = 'green';
            } else {
                message.textContent = "Password didn't matched";
                message.style.color = "red";
                submitBtn.style.backgroundColor = "";
            }
        }
    }
}