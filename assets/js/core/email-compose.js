$('#sendMail').click(function (e) {
  e.preventDefault();

  var to = $("#email_address").val();
  var subject = $("#subject").val();
  var cc = $("#cc").val();
  var body = $("#body").val();
  console.log(to, subject, cc, body);

  if (to && subject && cc && body != "") {
    localStorage.setItem('to', (to));
    localStorage.setItem('subject', (subject));
    localStorage.setItem('cc', (cc));
    localStorage.setItem('body', (body));
    swal('', 'Mail Sent Successfully!', 'success').then(function () {
      location.href = 'email-inbox.html';
      // location.href = 'payment-in.php'
    });
  } else {
    swal("", "Please fill the details", "warning")
  }
});


