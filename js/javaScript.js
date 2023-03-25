//Display and joins digits together in the input box
function display(val) {
		nums = document.getElementById("text-input").value += val;
	}

// An emty list
let listNums = [];

// For '=' and display of the array (results) on web page
function calculate() {
		// takes the input string and calculates it
		saved = eval(nums);
		
		// rounds result to two decimal spaces if '.' is found
		if (saved.toString().includes(".")) {
			s = saved.toFixed(2);
			document.getElementById("text-input").value = s;
			listNums.unshift(s)
		}
		// '.' not found, calculates and displays the result on the web page and calculator input box
		else { listNums.unshift(saved)
			var saved = document.getElementById("text-input").value = saved;

		}

		//places the results on the web page
		document.getElementById("results").innerHTML = listNums;
	}



// Clears the whole inut box to 0
function clearDisplay() {
	document.getElementById("text-input").value = "";
}

// Deletes 1 character at a time
function delOneChar() {
	var value = document.getElementById("text-input").value;
	document.getElementById("text-input").value = value.substr(0, value.length -1);
	
}