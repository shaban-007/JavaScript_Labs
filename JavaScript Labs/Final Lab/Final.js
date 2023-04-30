

var data;


var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log('Error: ' + xhr.status);
  }
};
xhr.send();


 
console.log(data);

        
function populateSelect() {
    const select = document.getElementById("names");
    for (let name in data) {
      let option = document.createElement("option");
      option.text = name;
      select.add(option);
    }
  }

function displayData() {
	const name = document.getElementById("names").value;
	const personData = data[name];
	const displayDiv = document.getElementById("data");
	displayDiv.innerHTML = "";
	if (personData) {
		displayDiv.innerHTML += "<p>Age: " + personData.age + "</p>";
		displayDiv.innerHTML += "<p>Gender: " + personData.gender + "</p>";
	} else {
		displayDiv.innerHTML = "<p>No data found for selected name.</p>";
	}
}


