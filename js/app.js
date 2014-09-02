$(document).ready(function(){
var finalString="";
var result="";
var i=1;
	  while (i<=1000){
	  if (!(i%3==0|i%5==0)){
	  	result=i+"  ,";
	  }else if(i%3==0 & i%5!=0){
	  	result="Fizz  ,"
	  	
	  }else if(i%3!=0 & i%5==0){
	  	result="Buzz  ,"
	  	
	  }else if (i%3==0 & i%5==0){
	  	result="FizzBuzz  ,"
	  }
	  $("<p style='display:inline-block'> result </p>").appendTo("#counting").html( "<p style='display:inline-block'>" +result +"</p>");
	  	i++
	  	

	
	  	finalString=finalString+i+" ";
	  }
	$("#counting").val(finalString);
	console.log($('#counting').val());
	console.log("hello");
});
 
