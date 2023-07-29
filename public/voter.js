function voter(event)
{
    event.preventDefault();

    var currentuser=JSON.parse(localStorage.getItem("VotingCurrentUser"));
    console.log(currentuser)

    if(currentuser)
    {
        alert("Voted")
    }
    else
    {
        alert("You are already voted")
    }
}