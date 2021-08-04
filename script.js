home = document.getElementById("home");
home_btn = document.getElementById("home_btn");

gallery = document.getElementById("gallery");
gallery_btn = document.getElementById("gallery_btn");

genere = document.getElementById("genere");
genere_btn = document.getElementById("genere_btn");

contact = document.getElementById("contact");
contact_btn = document.getElementById("contact_btn");


function home_func() {
    home.style.display = "block";
    home_btn.style.height = "50px";
    home_btn.style.width = "102px";    
    home_btn.style.backgroundColor = "rgb(255, 173, 115)";
    home_btn.style.border = "solid white";
    home_btn.style.borderTopLeftRadius = "12px";
    home_btn.style.borderBottomLeftRadius = "12px";
    home_btn.style.borderWidth = "6px";
    
    gallery.style.display = "none";
    gallery_btn.style.height = "50px";
    gallery_btn.style.width = "101px";    
    gallery_btn.style.background = "transparent";
    gallery_btn.style.border = "none";
    gallery_btn.style.borderTopLeftRadius = "12px";
    gallery_btn.style.borderBottomLeftRadius = "12px";

    genere.style.display = "none";
    genere_btn.style.height = "50px";
    genere_btn.style.width = "101px";    
    genere_btn.style.background = "transparent";
    genere_btn.style.border = "none";
    genere_btn.style.borderTopLeftRadius = "12px";
    genere_btn.style.borderBottomLeftRadius = "12px";

    contact.style.display = "none"
    contact_btn.style.height = "50px";
    contact_btn.style.width = "100px";
    contact_btn.style.background= "transparent";
    contact_btn.style.border = "none";
    contact_btn.style.outline = "none";

}

function gallery_func() {    
    home.style.display = "none";
    home_btn.style.height = "50px";
    home_btn.style.width = "100px";
    home_btn.style.background= "transparent";
    home_btn.style.border = "none";
    home_btn.style.outline = "none";

    gallery.style.display = "block";
    gallery_btn.style.height = "50px";
    gallery_btn.style.width = "102px";    
    gallery_btn.style.backgroundColor = "rgb(255, 173, 115)";
    gallery_btn.style.border = "solid white";
    gallery_btn.style.borderTopLeftRadius = "12px";
    gallery_btn.style.borderBottomLeftRadius = "12px";
    gallery_btn.style.borderWidth = "6px";
    genere.style.display = "none";
    genere_btn.style.height = "50px";
    genere_btn.style.width = "101px";    
    genere_btn.style.background = "transparent";
    genere_btn.style.border = "none";
    genere_btn.style.borderTopLeftRadius = "12px";
    genere_btn.style.borderBottomLeftRadius = "12px";

    contact.style.display = "none"
    contact_btn.style.height = "50px";
    contact_btn.style.width = "100px";
    contact_btn.style.background= "transparent";
    contact_btn.style.border = "none";
    contact_btn.style.outline = "none";

}

function genere_func() {
    home.style.display = "none";
    home_btn.style.height = "50px";
    home_btn.style.width = "100px";
    home_btn.style.background= "transparent";
    home_btn.style.border = "none";
    home_btn.style.outline = "none";

    gallery.style.display = "none";
    gallery_btn.style.height = "50px";
    gallery_btn.style.width = "100px";
    gallery_btn.style.background= "transparent";
    gallery_btn.style.border = "none";
    gallery_btn.style.outline = "none";

    genere.style.display = "block";
    genere_btn.style.height = "50px";
    genere_btn.style.width = "102px";    
    genere_btn.style.backgroundColor = "rgb(255, 173, 115)";
    genere_btn.style.border = "solid white";
    genere_btn.style.borderTopLeftRadius = "12px";
    genere_btn.style.borderBottomLeftRadius = "12px";
    genere_btn.style.borderWidth = "6px";

    contact.style.display = "none"
    contact_btn.style.height = "50px";
    contact_btn.style.width = "100px";
    contact_btn.style.background= "transparent";
    contact_btn.style.border = "none";
    contact_btn.style.outline = "none";

}

function contact_func() {
    home.style.display = "none";
    home_btn.style.height = "50px";
    home_btn.style.width = "100px";
    home_btn.style.background = "transparent";
    home_btn.style.border = "none";
    home_btn.style.outline = "none";

    gallery.style.display = "none";
    gallery_btn.style.height = "50px";
    gallery_btn.style.width = "100px";
    gallery_btn.style.background= "transparent";
    gallery_btn.style.border = "none";
    gallery_btn.style.outline = "none";

    genere.style.display = "none";
    genere_btn.style.height = "50px";
    genere_btn.style.width = "100px";
    genere_btn.style.background= "transparent";
    genere_btn.style.border = "none";
    home_btn.style.outline = "none";

    contact.style.display = "block"
    contact_btn.style.height = "50px";
    contact_btn.style.width = "101px";    
    contact_btn.style.backgroundColor = "rgb(255, 173, 115)";
    contact_btn.style.border = "solid white";
    contact_btn.style.borderTopLeftRadius = "12px";
    contact_btn.style.borderBottomLeftRadius = "12px";
    contact_btn.style.borderRight = "none";
    contact_btn.style.outline = "none"
    contact_btn.style.borderWidth = "6px";
}