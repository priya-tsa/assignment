$('#loginClick').click(function (e) {
  e.preventDefault();
  var userName = $("#userName").val();
  var password = $("#password").val();
  console.log(userName, password);
  if (userName === "admin" && password === "123456") {
    localStorage.setItem('userName', btoa(userName));
    localStorage.setItem('password', btoa(password));
    swal('', 'Login Successfull!', 'success').then(function () {
      location.href = 'email-inbox.html';
      // location.href = 'payment-in.php'
    });
  }
  $("#userName,#password").on('focus', function () {
    $('#errorSpan1').html('');
    $(this).css("border", "1px solid #30353e")
  })
  if (userName === '' && password === '') {
    $('#errorSpan2').html('Please Enter Username And Password');
    $("#errorSpan1").html('');
  }
  else if (userName != "admin" || password != "123456") {
    $("#errorSpan1").html("Invalid Username Or Password")
    $('#errorSpan2').html('');
    $("#userName").css("border", "1px solid red")
    $("#password").css("border", "1px solid red")
  }
});


$('#userName,#password').keypress(function (e) {
  var key = e.which;
  if (key == 13) // the enter key code
  {
    $('#loginClick').click();
    return false;
  }
});

