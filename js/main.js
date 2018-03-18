window.onload=function(){
	
	var oDiv=document.getElementById("workExperience");
	var oP=oDiv.getElementsByTagName("p");
	var aD=oDiv.getElementsByTagName("a");
	var i;
	for ( i = 0; i < aD.length; i++) {
		aD[i].index=i;
		aD[i].onclick=function(){
			for ( i = 0; i < aD.length; i++) {
				oP[i].style.display="none";
			}
			oP[this.index].style.display="block";
		}
		
	}

// var nav=document.getElementById("menu");
//                 var lil=nav.getElementsByTagName("li");
//                 console.log(lil);
//                 for (var i = 0; i < lil.length; i++) {
//                    console.log(lil[i].getAttribute("class"));
//                 }
}

// function getByClass(oParent,oClassName){
// 	var aArr=[];
// 	for (var i = 0; i < oParent.length; i++) {
// 		 if(oParent[i].className==oClassName){
// 		 	aArr.push(oParent[i]);
// 		 }
// 	}
// 	return aArr;
// }