function ValidateEmail(inputText)
{
if(inputText.value==""||inputText.value==null)
{alert("enter an email");
return true;
}
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    password();
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function password()
{
    pwd=document.getElementById("pw").value;
    if(pwd==""||pwd==null)
    alert("enter the password");
    else
    alert("login success");
}

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});