const menuToggle = document.getElementById ("menu-toggle");
const links = document.querySelector(".links");


// start function toggleMenu
menuToggle.addEventListener('click', function(){
    links.classList.toggle("active");
    if(links.classList.contains("active")){
                menuToggle.innerHTML= `
                    <a class="close-icon"><i class="fa-solid fa-xmark"></i></a>

        `;
    }else {
        menuToggle.innerHTML= `
                    <span></span>
                    <span></span>
                    <span></span>
        `;
    }
});

// end function toggleMenu
