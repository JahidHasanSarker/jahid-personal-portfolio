window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // Page Loder
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";
    },1000);
})


// Toggle Nav 

const navToggoler = document.querySelector(".nav-toggler");
navToggoler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");

});
// Active Section

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // Active the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggoler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
            
        }
        else{
            hideSection();
            document.body.classList.remove("hide-scrolling");
        }
        setTimeout(( ) =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling"); 
            navToggoler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
// About Tab Start

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");


        }
});


// Portfolio Items Popup

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        toggolPortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }

})

function toggolPortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", toggolPortfolioPopup);

// Hide Popup when clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggolPortfolioPopup()
    }
});




function portfolioItemDetails(portfolioItem){
      document.querySelector(".pp-thumbnail ").src =
     portfolioItem.querySelector(".details-thumb img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
// slider

