// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector("nav");
//     const video = document.getElementById("background-video");
    
//     function checkNavColor() {
//         const rect = video.getBoundingClientRect();
//         if (rect.bottom < 0) {
//             nav.classList.add("white");
//         } else {
//             nav.classList.remove("white");
//         }
//     }

//     window.addEventListener("scroll", checkNavColor);
//     window.addEventListener("resize", checkNavColor);

//     checkNavColor(); // Initial check
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('.container');
//     let currentSectionIndex = 0;

//     function scrollToSection(index) {
//         if (index >= 0 && index < sections.length) {
//             sections[index].scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     function onScroll() {
//         const currentSection = sections[currentSectionIndex];
//         const rect = currentSection.getBoundingClientRect();
//         if (rect.bottom <= window.innerHeight + 1) {
//             currentSectionIndex++;
//             scrollToSection(currentSectionIndex);
//         }
//     }

//     window.addEventListener('scroll', onScroll);
// });


document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections

    function checkNavColor() {
        let found = false;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 0 && rect.bottom > 0) {
                if (section.classList.contains("bg-black")) {
                    nav.classList.add("white");
                } else if (section.classList.contains("bg-white")) {
                    nav.classList.remove("white");
                }
                found = true;
            }
        });

        if (!found) {
            // Si aucune section active n'est trouvée (par exemple, en haut de la page)
            nav.classList.remove("white");
        }
    }

    window.addEventListener("scroll", checkNavColor);
    window.addEventListener("resize", checkNavColor);

    checkNavColor(); // Initial check
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');

    function changeActiveLink() {
        // Parcourir toutes les sections pour déterminer laquelle est visible à l'écran
        links.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const rect = targetSection.getBoundingClientRect();

                // Vérifier si la section est visible à l'écran
                if (rect.top <= 50 && rect.bottom >= 50) {
                    // Retire la classe active de tous les liens
                    links.forEach(l => l.classList.remove('active'));

                    // Ajoute la classe active uniquement sur le lien correspondant
                    link.classList.add('active');
                }
            }
        });
    }

    // Écouter l'événement de défilement
    window.addEventListener('scroll', changeActiveLink);

    // Appel initial pour définir l'état actif au chargement de la page
    changeActiveLink();
});



document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in-up');

    function handleScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0 && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const hr = document.querySelector('.hr-h-w');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hr-w-animtion');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(hr);
});


// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll('.nav-link');

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Empêche le comportement par défaut du lien

//             // Retire la classe active de tous les liens
//             links.forEach(l => l.classList.remove('active'));

//             // Ajoute la classe active uniquement sur le lien cliqué
//             this.classList.add('active');

//             // Récupère l'ID de la section cible depuis l'attribut href
//             const targetId = this.getAttribute('href').substring(1);

//             // Défilement vers la section cible
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 targetSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-link');

//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             navLinks.forEach(link => link.classList.remove('active')); // Retire la classe active de tous les liens
//             event.target.classList.add('active'); // Ajoute la classe active au lien cliqué
//         });
//     });
// });

// const links = document.querySelectorAll('.nav-link');

// // Ajouter un écouteur d'événement à chaque bouton
// links.forEach(button => {
//     button.addEventListener('click', () => {
//         // Supprimer la classe 'active' de tous les boutons
//         links.forEach(btn => btn.classList.remove('active'));
//         // Ajouter la classe 'active' au bouton cliqué
//         button.classList.add('active');
//     });
// });


// to top

// window.scrollTo({
//   top: 0,
//   behavior: 'smooth'
// });

// const element = getElementById("someElement");
// //you can do it by jquery. no matter
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});