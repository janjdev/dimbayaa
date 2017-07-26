$(document).ready(function() {
	var lodedSize = 0;
	var number_of_media = $("body video").length;
	 doProgress();
	 
	// function for the progress bar
	 function doProgress() {
		  $('body video').oncanplaythrough = function() {
		 lodedSize++;
		 var newWidthPercentage = (lodedSize / number_of_media) * 100;
		 animateLoader(newWidthPercentage + '%');
		 };
	 }

	 //Animate the loader
	 function animateLoader(newWidth) {
		 $("#fill").width(newWidth);
		 if(lodedSize>=number_of_media){
		 setTimeout(function(){
		 $("#fill").animate({opacity:0});
		 },500);
		 }
	 }
});	 