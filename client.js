$(function(){

  console.log('hello from client.js');

  var user = {};

  $("#submitButton").on("click", function(event){
    event.preventDefault();

    user.firstName = $("#firstName").val();
    user.lastName = $("#lastName").val();
    user.emailAddress = $("#emailAddress").val();
    user.company = $("#company").val();
    user.title = $("#title").val();
    user.country = $("#country").val();
    user.state = $("#state").val();
    user.additionalComments = $("#additionalComments").val();

    displayUserInfo(user);
  });//closes submitButton.on('click')

  var displayUserInfo = function(user){
    $("#formDisplay").prepend("<h4>Form Results:</h4>")

    $("#formDisplay > tbody").append("<tr><td>First Name</td><td>"+user.firstName+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Last Name</td><td>"+user.lastName+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Email Address</td><td>"+user.emailAddress+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Company</td><td>"+user.company+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Title</td><td>"+user.title+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Country</td><td>"+user.country+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>State</td><td>"+user.state+"</td></tr>");
    $("#formDisplay > tbody").append("<tr><td>Additional Comments</td><td>"+user.additionalComments+"</td></tr>");

    $("td").addClass("col-xs-6");
  }

});//closes document.ready
