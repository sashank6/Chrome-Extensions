var easy,medium,hard;
var total=easy+medium+hard;
window.addEventListener('DOMContentLoaded',function(){
	
	easy=localStorage.getItem("easy");
	if(isNaN(easy) || easy===null)
		easy=0;
	medium=localStorage.getItem("medium");
	if(isNaN(medium)||medium===null)
		medium=0;
	hard=localStorage.getItem("hard");
	if(isNaN(hard)||hard===null)
		hard=0;
	
	total=parseInt(easy)+parseInt(medium)+parseInt(hard);
	document.getElementById("medium").innerHTML=medium;
	document.getElementById("easy").innerHTML=easy;
	document.getElementById("hard").innerHTML=hard;
	document.getElementById("total").innerHTML=total;
	
});
document.getElementById('mediumbtn').addEventListener('click', function(){
	medium=localStorage.getItem("medium");
	if(isNaN(medium))
		medium=0;
	medium++;
	document.getElementById("medium").innerHTML=medium;
	localStorage.setItem("medium",medium);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard);
	document.getElementById("total").innerHTML=total;
},false);
document.getElementById('easybtn').addEventListener('click', function(){
	
	easy=localStorage.getItem("easy");
	if(isNaN(easy))
		easy=0;
	easy++;
	document.getElementById("easy").innerHTML=easy;
	localStorage.setItem("easy",easy);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard);
	document.getElementById("total").innerHTML=total;
});

document.getElementById('hardbtn').addEventListener('click', function(){
	
	hard=localStorage.getItem("hard");
	if(isNaN(hard))
		hard=0;
	hard++;
	document.getElementById("hard").innerHTML=hard;
	localStorage.setItem("hard",hard);
	total=parseInt(easy)+parseInt(medium)+parseInt(hard);
	document.getElementById("total").innerHTML=total;
});

