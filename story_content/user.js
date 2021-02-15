function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5v1Kig7NhYR":
        Script1();
        break;
      case "5yQlPDUCVmU":
        Script2();
        break;
      case "5zDQGquefPu":
        Script3();
        break;
      case "5omWvp2DSaj":
        Script4();
        break;
      case "6RfwhQKQaGb":
        Script5();
        break;
      case "5Y6fAy1L0xi":
        Script6();
        break;
      case "692v7i6p4Em":
        Script7();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"FirstName": player.GetVar("FirstName")
, "LastName": player.GetVar("LastName")
, "Language": player.GetVar("Language")
, "Email": player.GetVar("Email")

},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script2()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script3()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script4()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script5()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script6()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script7()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyopjv9oq3PXQ-fsigHUDxxCuOghfExBfzgPuTG9ExE_r68SEI1dLNyVQ/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Completion": player.GetVar("Completion")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

