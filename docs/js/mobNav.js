function toggleNav(){
  //Check if sidebar exists before continuing
  if (document.getElementById('sidebar')){

    //If class is sidebar, change to navbar
    if(document.getElementById('sidebar').className == 'sidebar'){
      document.getElementById('sidebar').className = 'navbar';
    }

    //If class is navbar, change to sidebar
    else if(document.getElementById('sidebar').className == 'navbar'){
      document.getElementById('sidebar').className = 'sidebar';
    }
  }
}

function forceHideNav(){
  if (document.getElementById('sidebar')){
    if(document.getElementById('sidebar').className == 'navbar'){
      document.getElementById('sidebar').className = 'sidebar';
    }
  }
}


function resizeNavigationHandler(){

	window.addEventListener('resize', resizeNavigationHandler);

	var x = document.getElementById("sidebar");

	if ( x != null ){
		if ( x.className === "navbar" ) {
			x.className = "sidebar";
		}
	}
}
