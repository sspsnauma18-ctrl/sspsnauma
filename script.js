/* =====================================================
   SWAMI SHANTANAND PUBLIC SCHOOL
   SSPS - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");
            menuBtn.innerHTML = "☰";

        });

    });

}



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header ? header.offsetHeight : 0;

        const targetPosition =
            target.offsetTop - headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});



/* =====================================================
   3D CARD TILT EFFECT
===================================================== */

const tiltCards =
    document.querySelectorAll(".tilt");


tiltCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        if (window.innerWidth < 768) {
            return;
        }


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
            ((y - centerY) / centerY) * -6;


        const rotateY =
            ((x - centerX) / centerX) * 6;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

    });

});



/* =====================================================
   SCROLL REVEAL ANIMATION
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
        ".contact-item, " +
        ".admission-form-wrapper"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

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


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(
        "#navbar a"
    );


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;


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


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   HERO MOUSE PARALLAX
===================================================== */

const hero =
    document.querySelector(".hero");

const heroBackground =
    document.querySelector(
        ".hero-background"
    );


if (hero && heroBackground) {

    hero.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth < 768) {
                return;
            }


            const x =
                (event.clientX /
                window.innerWidth) - 0.5;


            const y =
                (event.clientY /
                window.innerHeight) - 0.5;


            heroBackground.style.transform =
                `scale(1.08)
                 translate(${x * -15}px,
                           ${y * -15}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        function () {

            heroBackground.style.transform =
                "scale(1.08) translate(0,0)";

        }
    );

}



/* =====================================================
   ONLINE ADMISSION FORM
===================================================== */

const admissionForm =
    document.getElementById(
        "admissionForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (admissionForm) {

    admissionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const studentName =
                admissionForm.elements[
                    "studentName"
                ].value.trim();


            const parentName =
                admissionForm.elements[
                    "parentName"
                ].value.trim();


            const mobile =
                admissionForm.elements[
                    "mobile"
                ].value.trim();


            const email =
                admissionForm.elements[
                    "email"
                ].value.trim();


            const studentClass =
                admissionForm.elements[
                    "class"
                ].value;


            const dob =
                admissionForm.elements[
                    "dob"
                ].value;


            const address =
                admissionForm.elements[
                    "address"
                ].value.trim();


            const message =
                admissionForm.elements[
                    "message"
                ].value.trim();



            /* Mobile validation */

            if (!/^[0-9]{10}$/.test(mobile)) {

                showFormMessage(
                    "Please enter a valid 10-digit mobile number.",
                    "error"
                );

                return;

            }



            /* Required fields */

            if (
                !studentName ||
                !parentName ||
                !mobile ||
                !studentClass ||
                !address
            ) {

                showFormMessage(
                    "Please fill all required fields.",
                    "error"
                );

                return;

            }



            /*
                Admission enquiry text
            */

            const admissionText =

                `*SSPS ONLINE ADMISSION ENQUIRY*

Student Name:
${studentName}

Parent / Guardian:
${parentName}

Mobile:
${mobile}

Email:
${email || "Not provided"}

Class:
${studentClass}

Date of Birth:
${dob || "Not provided"}

Address:
${address}

Message:
${message || "No message"}`;



            /*
                WhatsApp submission

                School WhatsApp number:
                +91 9006852454
            */

            const whatsappNumber =
                "919006852454";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    admissionText
                );



            showFormMessage(
                "Admission enquiry is ready. Opening WhatsApp...",
                "success"
            );



            setTimeout(function () {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 800);



            /*
                Reset form
            */

            setTimeout(function () {

                admissionForm.reset();

            }, 1500);

        }
    );

}



/* =====================================================
   FORM MESSAGE FUNCTION
===================================================== */

function showFormMessage(
    message,
    type
) {

    if (!formMessage) {
        return;
    }


    formMessage.textContent =
        message;


    formMessage.className =
        "form-message " + type;


    setTimeout(function () {

        formMessage.textContent = "";

        formMessage.className =
            "form-message";

    }, 5000);

}



/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop =
    document.createElement("button");


backToTop.innerHTML = "↑";


backToTop.className =
    "back-to-top";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


document.body.appendChild(
    backToTop
);



window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

});


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   IMAGE LOADING
===================================================== */

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener(
        "load",
        function () {

            image.classList.add(
                "loaded"
            );

        }
    );


    image.addEventListener(
        "error",
        function () {

            console.warn(
                "Image not found:",
                image.src
            );

        }
    );

});



/* =====================================================
   CARD STAGGER EFFECT
===================================================== */

const cardGroups = [

    ".achievement-card",
    ".academic-card",
    ".facility-card",
    ".notice-card",
    ".admission-card",
    ".service-card"

];


cardGroups.forEach(function (selector) {

    const cards =
        document.querySelectorAll(
            selector
        );


    cards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

});



/* =====================================================
   DIGITAL SERVICES
===================================================== */

const serviceLinks =
    document.querySelectorAll(
        ".service-card"
    );


serviceLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            console.log(
                "Opening SSPS Digital Service"
            );

        }
    );

});



/* =====================================================
   CURRENT YEAR
===================================================== */

const copyright =
    document.querySelector(
        ".copyright"
    );


if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()}
        Swami Shantanand Public School.
        All Rights Reserved.`;

}



/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );


        console.log(
            "SSPS Website Loaded Successfully 🚀"
        );

    }
);
