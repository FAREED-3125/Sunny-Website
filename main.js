function openMenu() {
  
        var navBar = document.getElementById("mobile-navbar");
        navBar.style.top = "60px";
        document.getElementById("menu-bar").style.display="none";
        document.getElementById("back-arrow").style.display="block";
    
}

function closeMenu()
{
    var navBar = document.getElementById("mobile-navbar");
        navBar.style.top = "-300px";
        document.getElementById("back-arrow").style.display="none";
        document.getElementById("menu-bar").style.display="block";
      
}