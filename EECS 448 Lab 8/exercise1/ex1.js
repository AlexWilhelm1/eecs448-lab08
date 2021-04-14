function Validate()
{
  var password = document.getElementById("password").value;
  var verify = document.getElementById("verify").value;

  if (password.length < 8)
  {
    alert("Your password is too short.")
  }
  else if (password != verify)
  {
    alert("This is not the password you typed initially!");
  }
  else
  {
    alert("Your password matches!");
  }
}

function Reset()
{
  document.getElementById("Password").reset();
}
