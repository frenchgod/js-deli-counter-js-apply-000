function takeANumber(lineOfPeople){
	lineOfPeople.push()
	return "Welcome, You are number " + lineOfPeople.length + " in line."
}

function nowServing(lineOfPeople){

	if (lineOfPeople.length === 0){
		return "There is nobody waiting to be served!"	
	}
	else{
		var firstPerson = lineOfPeople.shift()
		return "Currently serving " + firstPerson + "."
	}
}


function currentLine(katzDeliLine) {
	if (katzDeliLine.length === 0){
		return ("The line is currently empty.")
	}
	var stringAnswer = "The line is currently: "
	for (var i = 0; i < katzDeliLine.length; i++){
			
		 stringAnswer =  stringAnswer  + (i + 1) + ". " + katzDeliLine[i] 

		if ( i != katzDeliLine.length -1){
			stringAnswer = stringAnswer + ", "
		}
		
	}
	
	return stringAnswer

	
}



