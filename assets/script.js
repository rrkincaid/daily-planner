// var timeBlock = $("#time-block");

var saveButton = $(".save-button");

var todoList = $(".input-group");

var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

console.log("today");





saveButton.on("click", function (event) {
var inputValue = ($(this).siblings("input").val())
  var timeBlock = $(this).attr("class").split(" ")[0]
  console.log(timeBlock)

  localStorage.setItem(timeBlock, inputValue)
});


  function todoList() {
  localStorage.setItem("tasklist", document.getElementById('input-group').value);
};



//event handler for save button - connects to textinput so that it can be saved to local storage

// localStorage.setItem("todoList", "inputGroup");

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();

// var todoList = {
//   inputGroup: inputGroup.value,
// };

// localStorage.setItem("todoList",
//   JSON.stringify(todoList));
// });



//moment that changes colors in the body of text


// function colorChange(){
// document.body.children[moment().hour() - 8].children[0].children[1].children[0].setAttribute("style", background: gray")
//     for (let i = 1, i < moment().hour() - 8; i++)
//     document.body.children[i].children[0].children[1].children[0].setAttribute("style", background: blue")
// }
