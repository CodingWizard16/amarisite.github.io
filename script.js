document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY !== 0) {
            event.preventDefault(); 
            gallery.scrollLeft += event.deltaY * 0.5;
        }
    });

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function () {
        
            lightboxImg.src = img.src;  
            lightbox.style.display = "flex"; 
            img.style.transform = "none"; 
        });
    });
    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none"; 
    });
});
