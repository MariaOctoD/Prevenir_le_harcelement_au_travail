function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KGth8C6zp3":
        Script1();
        break;
      case "5nmqRBKlJEi":
        Script2();
        break;
      case "61BEG0Xkdgu":
        Script3();
        break;
      case "5q4wcSU8r65":
        Script4();
        break;
      case "6F3wStR416p":
        Script5();
        break;
      case "67AFJ2tjWlY":
        Script6();
        break;
      case "5j4GyAyHCZz":
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

