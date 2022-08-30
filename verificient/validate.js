function Login() {
  var usercheck = document.getElementById("username").value;
  var passwordcheck = document.getElementById("password").value;
  var x = usercheck;
  var b = passwordcheck;

  if ("bitcode" == x && b == "bitcode123") {
    window.location.href = "crypto.html";
  }
  if (!("bitcode" == x && b == "bitcode123")) {
    document.getElementById(
      "msg"
    ).innerHTML = `***Invalid user name or password***
          plz enter username=bitcode and password=bitcode123`;
  }
}
