function buttonFunction() {
	var result = multiplesBelow1000();
	console.log(result);
	alert(result);
}

function multiplesBelow1000() {
		var current = 1;
		var multiples = [];
		while(current <=1000){
			if(current % 3 === 0 || current % 5 === 0){
				multiples.push(current);
			}
			current++;
		}
		return multiples;
}
