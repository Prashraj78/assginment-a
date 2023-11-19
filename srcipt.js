
// for menu-bar
function openNav() {
    var sidePanel = document.getElementById("sidePanel");
    if (sidePanel.style.width === "250px") {
        sidePanel.style.width = "0";
    } else {
        sidePanel.style.width = "250px";
    }
}


function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}




// for milestone
document.addEventListener('DOMContentLoaded', (event) => {
    const counters = document.querySelectorAll('.orange');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const increment = target / 600; //sped of number increment

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '+';
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); 

        observer.observe(counter);
    });
});



// for hero tabs
function initDefaultTab() {
    // default tab
    document.getElementById("ElectricBikes").style.display = "block";
    var defaultTab = document.querySelector(".tab");
    if (defaultTab) {
        defaultTab.className += " active";
    }
}

function changeTab(evt, bikeType) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(bikeType).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', initDefaultTab);





// for sliding
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const details = document.querySelectorAll('.details-container .bike-details');
const dots = document.querySelectorAll('.dots .dot');
const totalSlides = slides.length;

function changeSlide(index) {
    // Hide all slides and details
    slides.forEach(slide => slide.classList.remove('active-slide'));
    details.forEach(detail => detail.classList.remove('active-details'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show new active slide and details
    slides[index].classList.add('active-slide');
    details[index].classList.add('active-details');
    dots[index].classList.add('active');

    // Update the current index
    currentSlideIndex = index;
}

function autoChangeSlide() {
    let nextIndex = (currentSlideIndex + 1) % totalSlides;
    changeSlide(nextIndex);
}

let slideInterval = setInterval(autoChangeSlide, 4000); // Change slide every 4 seconds



dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
        // Reset the interval when a dot is clicked
        clearInterval(slideInterval);
        slideInterval = setInterval(autoChangeSlide, 4000);
    });
});





// for FAQs
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        this.querySelector('.arrow').classList.toggle('up');
    });
});



