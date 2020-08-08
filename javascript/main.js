/* grab input value */

document.querySelector(".js-go").addEventListener('click',function(){
	var input = document.querySelector("input").value;
	//console.log(input);
	search(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input = document.querySelector("input").value;
	//console.log(input);
	
	if(e.which === 13){
		search(input);     
	}
});



/* do the data stuff with api*/

function  search(query){
	var url ="http://api.giphy.com/v1/gifs/search?q="+query+"&api_key=dc6zaTOxFJmzC";

//Ajax request
var giphyAjaxCall = new XMLHttpRequest();
giphyAjaxCall.open('GET',url);
giphyAjaxCall.send();
giphyAjaxCall.addEventListener('load',function(e){

	var data = e.target.response;
	console.log(data);
	pushToDom(data);
});
}








/*show me the gifs*/
function pushToDom(input){

	var response= JSON.parse(input);

	var imageUrls = response.data;
	imageUrls.forEach(function(image){
		var src = image.images.fixed_height.url;
		var container = document.querySelector(".js-container");
		container.innerHTML +=  "<img src=\""+ src +"\" class=\"container-image\">"
	});
	
	
}


