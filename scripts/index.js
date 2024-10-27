const observer  = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });

});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// for navigation menu
var clicked = false;

function showNavigationMenu(){
    const navigation_menu = document.getElementById("navbar");
    var navmenu_height = navigation_menu.style.maxHeight;

        if(clicked){
            console.log(navmenu_height);
            navigation_menu.style.maxHeight = "0px";
            clicked = false;
        }
        else{
            console.log(navmenu_height);
            navigation_menu.style.maxHeight = "150px";
            clicked = true;
        }

}


function toProject(url){
    location.href = url;
}