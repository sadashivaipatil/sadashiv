console.log("SCRIPT LOADED");
window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader")
        .style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader")
            .style.display="none";

        },1000);

    },6000);

});
// Typing Effect

const texts = [

    "Robotics • Automation • IoT",
    "Engineering Smart Solutions...",
    "Turning Ideas into Reality..."
    
];

let textIndex = 0;
let charIndex = 0;

function type() {

    if (charIndex < texts[textIndex].length) {

        document.getElementById("typing").innerHTML +=
            texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 80);

    } else {

        setTimeout(erase, 1500);
    }
}

function erase() {

    let current = texts[textIndex];

    if (charIndex > 0) {

        document.getElementById("typing").innerHTML =
            current.substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 40);

    } else {

        textIndex++;

        if (textIndex >= texts.length)
            textIndex = 0;

        setTimeout(type, 500);
    }
}

type();

// Spotlight

const light =
document.querySelector(".cursor-light");

document.addEventListener("mousemove",(e)=>{

    light.style.left=e.clientX+"px";

    light.style.top=e.clientY+"px";

});


// Scroll Reveal

function reveal(){

    const reveals =
    document.querySelectorAll(
        ".reveal-left,.reveal-right,.reveal-up"
    );

    reveals.forEach(item=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// Language Progress Rings

const circles =
document.querySelectorAll(".circle");

function animateCircles(){

    circles.forEach(circle=>{

        const percent =
        circle.dataset.percent;

        const progress =
        circle.querySelector(".progress");

        const offset =
        377 - (377 * percent)/100;

        progress.style.strokeDashoffset =
        offset;
    });

}

const languageSection =
document.querySelector(".languages");

window.addEventListener("scroll",()=>{

    const sectionTop =
    languageSection.getBoundingClientRect().top;

    const trigger =
    window.innerHeight - 100;

    if(sectionTop < trigger){

        animateCircles();
    }

});

// Back To Top Button

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop;

        if(pageYOffset >= sectionTop-200){

            current=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active-link");
        }

    });

});

const dot =
document.querySelector(".cursor-dot");

const outline =
document.querySelector(".cursor-outline");

document.addEventListener("mousemove",(e)=>{

    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";

    outline.style.left=
    (e.clientX-20)+"px";

    outline.style.top=
    (e.clientY-20)+"px";

});

let currentIndex = 0;

let images = [];

const galleryModal =
document.getElementById("galleryModal");

const galleryImage =
document.getElementById("galleryImage");

function openGallery(project){

    if(project === "arm"){

        images = [

        "static/assets/images/carenav_arm.jpeg",
        "static/assets/images/carenav_arms.jpeg",
        "static/assets/images/carenav_armss.jpeg",
        "static/assets/images/carenav_armsss.jpeg",
        ];

    }

    else if(project === "mcaruco"){

        images = [

        "static/assets/images/maca.jpeg"
        
        ];

    }
    
    else if(project === "6arm"){

        images = [
        "static/assets/images/6dof.jpeg"
        ];

    }

    else if(project === "aruco"){

        images = [

        "static/assets/images/diff.jpeg",
        
        ];

    }

    else if(project === "inverter"){

        images = [

        "static/assets/images/inverter.jpeg",
        "static/assets/images/inver.jpeg"
        ];

    }

    currentIndex = 0;

    galleryImage.src =
    images[currentIndex];

    galleryModal.style.display =
    "flex";
}

document
.getElementById("closeGallery")
.onclick = () => {

    galleryModal.style.display =
    "none";
};

document
.getElementById("nextBtn")
.onclick = () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;
    }

    galleryImage.src =
    images[currentIndex];
};

document
.getElementById("prevBtn")
.onclick = () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        images.length - 1;
    }

    galleryImage.src =
    images[currentIndex];
};

function openVideo(project){

    const frame =
    document.getElementById("youtubeFrame");
    document.getElementById("videoModal")
    .style.display = "flex";

    if(project === "carenav"){

        frame.src =
        "https://www.youtube.com/embed/LcwLAbNfoEU";
    }

    else if(project === "arm"){

        frame.src =
        "https://www.youtube.com/embed/LtemHmxufRA";
    }

    else if(project === "diff"){

        frame.src =
        "https://www.youtube.com/embed/36yLaOzTRWM";
    }

    else if(project === "mecanum"){

        frame.src =
        "https://www.youtube.com/embed/MXv_tzdbfM0";
    }

    document.getElementById("videoModal")
    .style.display = "flex";
}
document
document
.getElementById("closeVideo")
.onclick = ()=>{

    document.getElementById("videoModal")
    .style.display = "none";

    document.getElementById("youtubeFrame")
    .src = "";

    document.body.style.cursor = "none";
};

// Theme Toggle

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const icon =
    themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});
// PARALLAX BACKGROUND

const parallaxBg =
document.querySelector(".parallax-bg");

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2 - e.clientX)/50;

    const y =
    (window.innerHeight/2 - e.clientY)/50;

    parallaxBg.style.transform =
    `translate(${x}px, ${y}px)`;
});
// 3D TILT EFFECT

const tiltCards =
document.querySelectorAll(".tilt-card");

tiltCards.forEach(card=>{

    card.addEventListener(
        "mousemove",
        (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width/2;

        const centerY =
        rect.height/2;

        const rotateX =
        (centerY-y)/12;

        const rotateY =
        (x-centerX)/12;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    card.addEventListener(
        "mouseleave",
        ()=>{

        card.style.transform =
        `perspective(1000px)
         rotateX(0)
         rotateY(0)
         scale(1)`;

    });

});
// FLOATING PARTICLES

const particlesContainer =
document.getElementById("particles");

if(particlesContainer){

    for(let i=0;i<40;i++){

        const particle =
        document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
        Math.random()*100 + "%";

        particle.style.width =
        Math.random()*5 + 2 + "px";

        particle.style.height =
        particle.style.width;

        particle.style.animationDuration =
        Math.random()*15 + 10 + "s";

        particle.style.animationDelay =
        Math.random()*5 + "s";

        particlesContainer.appendChild(
            particle
        );
    }
}