/* =====================================================
   SWAMI SHANTANAND PUBLIC SCHOOL
   PREMIUM 3D WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
                MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {

            menuBtn.innerHTML = "✕";

        } else {

            menuBtn.innerHTML = "☰";

        }

    });


    /* Close menu after clicking a link */

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });

}



/* =====================================================
                HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3, 14, 27, 0.96)";

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.25)";

    } else {

        header.style.background =
            "rgba(4, 17, 31, .82)";

        header.style.boxShadow = "none";

    }

});



/* =====================================================
                3D TILT EFFECT
===================================================== */

const tiltCards = document.querySelectorAll(".tilt");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        /* Mobile devices don't need tilt */

        if (window.innerWidth < 768) return;


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -5;


        const rotateY =
            ((x - centerX) / centerX) * 5;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)
             scale3d(1.01,1.01,1.01)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1,1,1)";

    });

});



/* =====================================================
                HERO PARALLAX EFFECT
===================================================== */

const hero = document.querySelector(".hero");
const heroBackground =
    document.querySelector(".hero-background");


if (hero && heroBackground) {

    hero.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 768) return;


        const x =
            (event.clientX / window.innerWidth - 0.5);


        const y =
            (event.clientY / window.innerHeight - 0.5);


        heroBackground.style.transform =
            `scale(1.08)
             translate(${x * -12}px, ${y * -12}px)`;

    });


    hero.addEventListener("mouseleave", () => {

        heroBackground.style.transform =
            "scale(1.08) translate(0,0)";

    });

}



/* =====================================================
                REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, " +
        ".about-container, " +
        ".vision-card, " +
        ".achievement-card, " +
        ".academic-card, " +
        ".facility-card, " +
        ".leader-card, " +
        ".gallery-card, " +
        ".notice-card, " +
        ".admission-card, " +
        ".service-card, " +
        ".contact-item"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
                STAGGER CARD ANIMATION
===================================================== */

const cardGroups = [

    ".achievement-card",
    ".academic-card",
    ".facility-card",
    ".notice-card",
    ".admission-card",
    ".service-card"

];


cardGroups.forEach(selector => {

    const cards =
        document.querySelectorAll(selector);


    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });

});



/* =====================================================
                ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
                SMOOTH SCROLL
===================================================== */

navigationLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const headerHeight =
                    header ?
                    header.offsetHeight :
                    0;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        }

    });

});



/* =====================================================
                HERO MOUSE LIGHT EFFECT
===================================================== */

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 768) return;


        const x =
            event.clientX;

        const y =
            event.clientY;


        hero.style.setProperty(
            "--mouse-x",
            `${x}px`
        );


        hero.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

}



/* =====================================================
                IMAGE LOADING EFFECT
===================================================== */

const images =
    document.querySelectorAll("img");


images.forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });


    img.addEventListener("error", () => {

        console.warn(
            "Image could not be loaded:",
            img.src
        );

    });

});



/* =====================================================
                CURRENT YEAR
===================================================== */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    const year =
        new Date().getFullYear();


    copyright.innerHTML =
        `© ${year} Swami Shantanand Public School. All Rights Reserved.`;

}



/* =====================================================
                DIGITAL SERVICE LINKS
===================================================== */

const appLinks =
    document.querySelectorAll(
        '.service-card[href]'
    );


appLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening Digital Service:",
            link.href
        );

    });

});



/* =====================================================
                BACK TO TOP
===================================================== */

const backToTop =
    document.createElement("button");


backToTop.innerHTML = "↑";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.style.position =
    "fixed";

backToTop.style.right =
    "20px";

backToTop.style.bottom =
    "20px";

backToTop.style.width =
    "45px";

backToTop.style.height =
    "45px";

backToTop.style.border =
    "none";

backToTop.style.borderRadius =
    "50%";

backToTop.style.background =
    "#f07b24";

backToTop.style.color =
    "#ffffff";

backToTop.style.fontSize =
    "20px";

backToTop.style.fontWeight =
    "bold";

backToTop.style.cursor =
    "pointer";

backToTop.style.zIndex =
    "999";

backToTop.style.opacity =
    "0";

backToTop.style.visibility =
    "hidden";

backToTop.style.transition =
    ".3s";


document.body.appendChild(backToTop);



window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";

        backToTop.style.visibility =
            "visible";

    } else {

        backToTop.style.opacity = "0";

        backToTop.style.visibility =
            "hidden";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
                PAGE LOADED
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

    console.log(
        "SSPS Website Loaded Successfully 🚀"
    );

});

