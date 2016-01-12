var easy,medium,hard,hard1;
var total=easy+medium+hard+hard1;
window.addEventListener('DOMContentLoaded',function(){
	easy=localStorage.getItem("he");
	if(isNaN(easy) || easy===null)
		easy=0;
	medium=localStorage.getItem("spoj");
	if(isNaN(medium)||medium===null)
		medium=0;
	hard=localStorage.getItem("hr");
	if(isNaN(hard)||hard===null)
		hard=0;
	hard1=localStorage.getItem("pe");
	if(isNaN(hard1)||hard1===null)
		hard1=0;
	
	total=parseInt(easy)+parseInt(medium)+parseInt(hard)+parseInt(hard1);
	document.getElementById("medium").innerHTML=medium;
	document.getElementById("easy").innerHTML=easy;
	document.getElementById("hard").innerHTML=hard;
	document.getElementById("hard1").innerHTML=hard1;
	document.getElementById("total").innerHTML=total;
	
});
document.getElementById('mediumbtn').addEventListener('click', function(){
	medium=localStorage.getItem("spoj");
	if(isNaN(medium))
		medium=0;
	medium++;
	document.getElementById("medium").innerHTML=medium;
	localStorage.setItem("spoj",medium);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard)+parseInt(hard1);
	document.getElementById("total").innerHTML=total;
},false);
document.getElementById('easybtn').addEventListener('click', function(){
	
	easy=localStorage.getItem("he");
	if(isNaN(easy))
		easy=0;
	easy++;
	document.getElementById("easy").innerHTML=easy;
	localStorage.setItem("he",easy);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard)+parseInt(hard1);
	document.getElementById("total").innerHTML=total;
});

document.getElementById('hardbtn').addEventListener('click', function(){
	
	hard=localStorage.getItem("hr");
	if(isNaN(hard))
		hard=0;
	hard++;
	document.getElementById("hard").innerHTML=hard;
	localStorage.setItem("hr",hard);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard)+parseInt(hard1);
	document.getElementById("total").innerHTML=total;
});
document.getElementById('hardbtn1').addEventListener('click', function(){
	
	hard=localStorage.getItem("pe");
	if(isNaN(hard))
		hard=0;
	hard++;
	document.getElementById("hard1").innerHTML=hard;
	localStorage.setItem("pe",hard);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard)+parseInt(hard1);
	document.getElementById("total").innerHTML=total;
});

