function set_col(col, value){
	var table = document.getElementById('data');
	for(var row in table.rows){
		if(table.rows[row].cells && table.rows[row].cells[col]){
			table.rows[row].cells[col].style.display=value
		}
	}
}
function hide_col(col){
	set_col(col, 'none')
}
function show_col(col){
	set_col(col, '')
}
function on_check(check, col){
	if(check.checked){
		show_col(col)
	}
	else{
		hide_col(col)
	}
}

function on_check_multi(check, cols) {
	for(var i in cols){
		on_check(check, cols[i])
	}
}