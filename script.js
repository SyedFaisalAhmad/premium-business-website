// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }
});

// ======================================
// CLOSE MENU ON LINK CLICK
// ======================================

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });

});

// ======================================
// STICKY HEADER
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,23,42,.95)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background =
            "rgba(15,23,42,.8)";

        header.style.boxShadow = "none";
    }

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ======================================
// ACTIVE NAV LINK
// ======================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ======================================
// TESTIMONIAL SLIDER
// ======================================

const testimonials = [

{
name:"Michael Johnson",
text:"Outstanding communication and excellent web development work. Highly recommended."
},

{
name:"Sarah Williams",
text:"Professional design and amazing attention to detail throughout the project."
},

{
name:"David Smith",
text:"The website exceeded our expectations and helped improve our online presence."
}

];

let currentTestimonial = 0;

const testimonialCard =
    document.querySelector(".testimonial-card");

function updateTestimonial() {

    if(!testimonialCard) return;

    testimonialCard.innerHTML = `
        <p>"${testimonials[currentTestimonial].text}"</p>
        <h4>${testimonials[currentTestimonial].name}</h4>
    `;

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){
        currentTestimonial = 0;
    }

}

if(testimonialCard){

    setInterval(updateTestimonial, 5000);

}

// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
document.querySelectorAll(
".service-card, .project-card, .about-text, .about-image, .testimonial-card"
);

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all .7s ease";

    revealObserver.observe(element);

});

// ======================================
// COUNTER SECTION
// ======================================

const counters =
document.querySelectorAll(".counter");

function startCounters(){

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        let count = 0;

        const increment =
        target / 150;

        const update = () => {

            count += increment;

            if(count < target){

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                target;

            }

        };

        update();

    });

}

const counterSection =
document.querySelector(".stats");

if(counterSection){

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounters();

            counterObserver.unobserve(
                entry.target
            );

        }

    });

});

counterObserver.observe(counterSection);

}

// ======================================
// CONTACT FORM
// ======================================

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit", e => {

    e.preventDefault();

    const inputs =
    form.querySelectorAll(
        "input, textarea"
    );

    let valid = true;

    inputs.forEach(input => {

        if(
            input.value.trim() === ""
        ){
            valid = false;
            input.style.border =
            "1px solid red";
        }else{
            input.style.border =
            "1px solid #3b82f6";
        }

    });

    if(valid){

        alert(
            "Thank you! Your message has been submitted."
        );

        form.reset();

    }

});

}

// ======================================
// BACK TO TOP BUTTON
// ======================================

const backToTop =
document.createElement("button");

backToTop.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

backToTop.classList.add("back-top");

document.body.appendChild(backToTop);

backToTop.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#3b82f6;
color:white;
font-size:18px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.style.display =
        "block";

    }else{

        backToTop.style.display =
        "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(`
====================================
Nexa Solutions
Premium Business Website
Designed By Faisal Ahmad
====================================
`);