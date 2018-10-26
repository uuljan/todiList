window.onload = function () {
	
	var todoList = [];
	

	if ( localStorage.getItem('todo') != undefined ){
		todoList = JSON.parse(localStorage.getItem('todo') );
		out();
	}

	document.getElementById('out').onclick = function (event) {
		if (event.target.className == 'che') {
			check();
		} 
	}

	function check () {
		var checkbox = document.getElementsByClassName('che');

		for ( var i = 0; i < checkbox.length; i++ ) {
			if ( checkbox[i].checked ) {
				console.log(checkbox[i]);
				todoList[i].check = true;
			} else {
				todoList[i].check = false;
			}

			localStorage.setItem('todo', JSON.stringify(todoList) );
		}
	}

	document.getElementById('add').onclick = function(){
		var inp    = document.getElementById('in').value;

		var temp   = {};
		temp.todo  = inp;
		temp.check = false;

		var i = todoList.length;
		todoList[i] = temp;

		out();
		// checkPruf();

		localStorage.setItem('todo', JSON.stringify(todoList) );
	}

	function out () {
		var out ='';

		for (var key in todoList) {

			if ( todoList[key].check == true ) {
				out += '<input type="checkbox" class="che" checked>'
			} else {
				out += '<input type="checkbox" class="che" >'
			}

			out += todoList[key].todo +'<br>';
		}
		document.getElementById('out').innerHTML = out;
	}

}