var module = angular.module("myApp", []);
module.controller("CalcCntrlr", Controller);
function Controller(){
	this.result = 0;
	this.btnClicked = function(button){
		this.selectedOperation = button;
	}
	this.resultBtnClicked = function(){
		var input1 = parseFloat(this.input1);
		var input2 = parseFloat(this.input2);
		if(this.selectedOperation == '+'){
			this.result = input1 + input2;
		}else if (this.selectedOperation == '-'){
			this.result = input1 - input2;
		}else if (this.selectedOperation == '%'){
			this.result = input1 % input2;
		}else if (this.selectedOperation == '*'){
			this.result = input1 * input2;
		}
	}
}