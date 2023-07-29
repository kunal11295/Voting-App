
function register(event) {
    event.preventDefault();
    //  alert("function called")
    var name = document.getElementById("username").value
    var email = document.getElementById("useremail").value
    var password = document.getElementById("userpassword").value
    var confirmpassword = document.getElementById("userconfirmpassword").value
    var phoneno = document.getElementById("usernumber").value

    if (name && email && password && confirmpassword && phoneno) {
        if (password.length >= 8 && confirmpassword.length >=8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("Votingusers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword,
                        mobilenumber:phoneno
                    }
                    Ls.push(userdata);
                    localStorage.setItem("Votingusers",JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href='./login.html';
                    document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("password").value = ""
                    document.getElementById("confirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist");
                }
            }
            else {
                console.log("password not match");
            }

        } else {
            console.log("password should  include 8 or more characters");
        }
    } else {
        console.log("please fill all fields");
    }

}
