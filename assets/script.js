var timeBlock = $("#time-block");

var saveButton = $(".save-button");

var inputGroup = $(".input-group");

var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

console.log("today");


//event handler for save button - connects to textinput so that it can be saved to local storage

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var inputText = {
  inputGroup: inputGroup.value,
};

localStorage.setItem("inputText",
  JSON.stringify(inputText));

});

//moment that changes colors in the body of text 



