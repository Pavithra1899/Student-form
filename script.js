function table() {
  var one = document.getElementById("one").querySelector("input").value;
  var two = document.getElementById("two").querySelector("input").value;
  var three = document.getElementById("three").querySelector("input").value;
  var four = document.querySelector('input[name="gender"]:checked').value;
  var five = document.getElementById("five").querySelector("select").value;

  var studentTable = document.getElementById("student");
  var newRow = studentTable.insertRow();

  newRow.insertCell().textContent = one;
  newRow.insertCell().textContent = two;
  newRow.insertCell().textContent = three;
  newRow.insertCell().textContent = four;
  newRow.insertCell().textContent = five;

  var deleteButtonCell = newRow.insertCell()
  var deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete';
  deleteButton.style.backgroundColor = "red"; // Red background color
  deleteButton.style.color = "white"; // White text color
  deleteButton.style.border = "none"; // No border
  deleteButton.style.padding = "8px 16px"; // Padding
  deleteButton.style.borderRadius = "4px"; // Rounded corners
  deleteButton.style.cursor = "pointer"; // Cursor style
  deleteButton.onclick = function() {
      dels(newRow)
  }
  deleteButtonCell.appendChild(deleteButton)
}

function dels(row) {
  row.remove()
}
