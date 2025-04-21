// Switch main product image on thumbnail click
document.querySelectorAll('.thumb').forEach(thumb =>{
    thumb.addEventListener('click', ()=>{
        document.getElementById('mainImage').src = thumb.src;
    });
});


//nasal slider
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const dotContainer = document.getElementById("dots");

//current slide index
let currentIndex = 0;

//slide control function
slides.forEach((_, index) =>{
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotContainer.appendChild(dot);
});

const goToSlide = (index) => {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}


const updateDots = () => {
    const allDots = dotContainer.querySelectorAll("span");
    allDots.forEach((dot, idx)=>{
        dot.classList.toggle("active", idx === currentIndex);
    });
};

//prev Button + event
const prevBtn = document.querySelector(".nav-btn:not(.next)");
prevBtn.addEventListener("click", () =>{
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
});

//Next Button + event
const nextBtn = document.querySelector(".nav-btn.next");
nextBtn.addEventListener("click", () =>{
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
});

goToSlide(0);


