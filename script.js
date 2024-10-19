// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#e67e22" // Orange color
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#e67e22", // Orange color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});







// Star rating functionality
document.querySelectorAll('.star-rating').forEach(function(rating) {
    rating.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('star')) {
            const ratingValue = target.getAttribute('data-value');
            const recipe = rating.getAttribute('data-recipe');

            // Clear previous ratings
            const stars = rating.querySelectorAll('.star');
            stars.forEach(star => {
                star.innerHTML = '&#9734;'; // Reset to empty star
            });

            // Fill the stars up to the selected rating
            for (let i = 0; i < ratingValue; i++) {
                stars[i].innerHTML = '&#9733;'; // Fill star
            }

            // Optional: Store the rating or send it to a server
            console.log(`Rated ${recipe} with ${ratingValue} stars.`);
        }
    });
});

document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather the message data
    const userQuery = document.getElementById('userQuery').value;

    const templateParams = {
        message: userQuery,
        // Add any other parameters you need
    };

    // Send email using EmailJS with the public API key
    emailjs.send("service_syo1bdi", "template_pji452g", templateParams, "I12ST6mqodFjRBo5i")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('confirmationMessage').innerText = 'Your query has been sent successfully!';
            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('queryForm').reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('confirmationMessage').innerText = 'There was an error sending your query. Please try again.';
            document.getElementById('confirmationMessage').style.display = 'block';
        });
});
