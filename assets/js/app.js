var modal= document.getElementById("galeria");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img=[];
var span=[];

for (var i =0; i < 3; i++){
	img[i]
}


for (var i = 0; i < 3; i++){
	span[i]= document.getElementsByClassName("closeImg")[i];
	span[i].addEventListener("click", close);
}

function close(){
	modal.style.display= "none";
	span-style.display="none";
}