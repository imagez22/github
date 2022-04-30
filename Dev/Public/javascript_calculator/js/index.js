$(document).ready(function() {
	// Declare variables
	var entry="";
	var memory=[];
	var result=0;
	var operator = /(\+|-|\*|\/|=)/g;
	var digit = /[0-9]/;
	var doubleDot = /(\..\.)/;
	var isDigit, isOperator, isDot, isAC, isBack;
	var isLastDigit, isLastOperator, isLastDot;
	isLastDigit=isLastOperator=isLastDot=false;

	// Function: obtain key press
	$("button").click(function(){
		entry	= $(this).attr("value");
		checkEntry();
		displayCurrent();
		checkRules();
		displayHistory();

	})

// flag the input with the appropriate entry type
	function checkEntry(){
		entry.match(digit)===null? isDigit=false : isDigit=true
		entry.match(operator)===null|entry.match(operator)===undefined? isOperator=false : isOperator=true
		entry==="."?isDot=true:isDot=false
		entry==="ac"?isAC=true:isAC=false
		entry==="back"?isBack=true:isBack=false
		// console.log(isBack);

		if (memory.length>0){
			memory[memory.length-1].match(digit)===null? isLastDigit=false :  isLastDigit=true
			memory[memory.length-1].match(operator)===null | memory[memory.length-1].match(operator)===undefined? isLastOperator=false :  isLastOperator=true
			memory[memory.length-1].match(/(\.)/g) ? isLastDot=true :  isLastDot=false
		}
//		console.log(isLastDot);

		if(memory[memory.length-1]=="="){
			memory=[];
			memory.push(result);
			}

	}

	// Function: check key press against rules
	function checkRules(){
		if (isAC){
			memory=[];
			displayHistory();
			result=0;
			displayCurrent();
//			console.log(entry);
		} else if (isBack){
			if(memory.length>0){
				memory.pop();
				displayHistory();
				displayCurrent();
			}
		} else if (entry=="="){
			getResult();
		}	else if (isOperator){
			if (isLastOperator&&memory.length>1) {memory[memory.length-1]=entry;}
			else if (memory.length==0&&entry!=="-"){} else {memory.push(entry);}
		} else if (isDot){
			if (memory.length==0) {memory.push("0."); }
			else if (result!=0&&isLastDot){$("#result").text("Wrong Key");}
			else if (!isLastDot&&isLastDigit) {memory[memory.length-1]+=entry;}
			else {memory.push(entry);}
		}
//		else if (memory[memory.length-1]=="." | memory[memory.length-1] % 1 == 0){console.log("strange");}
		else {
			// Assuming isDigit
//			console.log(isLastDigit);
			if (memory.length==0) {memory.push(entry);}
			else if (memory.length==1&&memory[0]=="-"){memory[0]="-"+entry;}
			else if (isLastDigit) {memory[memory.length-1]+=entry;}
			else {memory.push(entry); }
		}

	}

	// Function: display current button being pushed
	function displayCurrent(){
		if (memory.length>0){
			$("#result").text(result);
		}	else {$("#result").text("0");}
	}

	// Function: display history
	function displayHistory(){
		if (memory.length>0&&memory[memory.length-1]=="="){
				$("#history").text(result);
				}
		else if (memory.length>0){
			$("#history").text(memory.join(""));
			}
		else {$("#history").text("0");}
	}

	// Function: getResult
	function getResult(){
//		console.log(memory);
//		Please keep in mind that the eval() function isn't the most efficient
// It has vulnerabilities; thus, another method should be used to replace this function
		result=eval(memory.join(""));
		if (result%1!==0){
			result = result.toString();  // this neat little trick will ommit all non-significant trailing zeros after the decimal point
		}
		memory.push("=");
		$("#result").text(result);
//		$("#history").text(memory.join(""));
	}

})
