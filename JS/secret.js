// Jash Vaidya
// Assignment 1

//Makes sure it only runs if everything is loaded
$(document).ready(function(){

	//This stores the keys you press into the keyboard, it will be compared to the actual code needed
	var keys = [];

	//These are the actual keys needed for the code to work
	var kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	//Up-Up-Down-Down-Left-Right-Left-Right-b-a-<Enter>

	//hiding the container
	$("#video").hide();

	//This will capture any keys you press down 
	$(document).keydown(function(keyEvent) {
		//Here I actually log what key you press into my keys array
		keys.push(keyEvent.keyCode);

	    //If the input code matches the actual code, then it will unlock the secret!
	    if ( keys.toString() == kode.toString() ) {
	            $('#video').show();
	            var vid = document.getElementById("video"); 
	            vid.play();
	          }
		});
});