function login(event) {
    event.preventDefault();

    var userName = document.getElementById("username").value;
    var userPassword = document.getElementById("userpassword").value;
    loginuser={};

    var Ls = JSON.parse(localStorage.getItem("Votingusers"));

    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userName == userName && Ls[i].userPassword == userPassword) {
            flag = true;
            loginuser=Ls[i];

        }
    }
    if (flag == true) {
         localStorage.setItem("VotingCurrentUser",JSON.stringify(loginuser));
      
        alert("login successfull")
        window.location.href ="./Voterpage.html"
     }

}


