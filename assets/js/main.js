const navbar = document.querySelector('.navbar');
const loading = document.querySelector('.loading');
const scroll_to_top = document.querySelector('.scroll-to-top');
const showIcon = document.querySelector('.showIcon');
const navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    /* navbar section */
    if (window.scrollY >= showIcon.offsetTop)
        navbar.style.backgroundColor = '#121212';
    else
        navbar.style.backgroundColor = 'transparent';

    /* showIcon section */
    if (window.scrollY >= showIcon.offsetTop)
        scroll_to_top.classList.remove('opacity-0', 'invisible');
    else
        scroll_to_top.classList.add('opacity-0', 'invisible');
});


/* start loader section */
window.addEventListener('load', function () {
    setTimeout(function () {
        if (loading) {
            loading.classList.add('opacity-0', 'invisible');
            document.body.style.overflow = 'auto';
        }
    }, 2000);
});
/* end loader section */


/* start scroll_to_top section */
scroll_to_top.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
});
/* end scroll_to_top section */


/* start active class section */
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove('active');
        }
        navLink[i].classList.add('active');
    })
}
/* end active class section */



document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['varietiesOfCoffee', 'varietiesOfCoffee-1'];
    const varieties = setInterval(updateElements, 12);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 250) {
            clearInterval(varieties);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['hoursOfTesting', 'hoursOfTesting-1'];
    const testing = setInterval(updateElements, 23);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 123) {
            clearInterval(testing);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['coffeeMarkets', 'coffeeMarkets-1'];
    const markets = setInterval(updateElements, 9);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 321) {
            clearInterval(markets);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['coffeBrands', 'coffeBrands-1'];
    const brands = setInterval(updateElements, 12);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 220) {
            clearInterval(brands);
        }
    }
});


/* start progress section */
document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['grinding95-1', 'grinding95-2', 'grinding95-3'];
    const grinding = setInterval(updateElements, 17);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 95) {
            clearInterval(grinding);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['chopping80-1', 'chopping80-2', 'chopping80-3'];
    const chopping = setInterval(updateElements, 20);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 80) {
            clearInterval(chopping);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let count = 1;
    const elementIds = ['pounding55-1', 'pounding55-2', 'pounding55-3'];
    const pounding = setInterval(updateElements, 28);

    function updateElements() {
        count++;
        for (const id of elementIds) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.innerHTML = count;
            }
        }

        if (count === 55) {
            clearInterval(pounding);
        }
    }
});
/* end progress section */


/* start countdown section */
document.addEventListener('DOMContentLoaded', function () {
    // To defines a specific target date and time
    const targetDate = new Date('2023-11-12T00:00:00').getTime();

    const countdownInterval = setInterval(function () {
        // Current date and time
        const currentDate = new Date().getTime();

        const timeRemaining = targetDate - currentDate;

        // To convert the remaining time in milliseconds into months, days, hours, minutes, and seconds
        const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const monthsElement = document.getElementById('month');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        if (monthsElement) monthsElement.innerHTML = months;
        if (daysElement) daysElement.innerHTML = days;
        if (hoursElement) hoursElement.innerHTML = hours;
        if (minutesElement) minutesElement.innerHTML = minutes;
        if (secondsElement) secondsElement.innerHTML = seconds;

        // To stop the countdown
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000); // Update every 1 sec
});

document.addEventListener('DOMContentLoaded', function () {
    // To defines a specific target date and time
    const targetDate = new Date('2023-12-10T00:00:00').getTime();

    const countdownInterval = setInterval(function () {
        // Current date and time
        const currentDate = new Date().getTime();

        const timeRemaining = targetDate - currentDate;

        // To convert the remaining time in milliseconds into months, days, hours, minutes, and seconds
        const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const monthsElement = document.getElementById('month-1');
        const daysElement = document.getElementById('days-1');
        const hoursElement = document.getElementById('hours-1');
        const minutesElement = document.getElementById('minutes-1');
        const secondsElement = document.getElementById('seconds-1');

        if (monthsElement) monthsElement.innerHTML = months;
        if (daysElement) daysElement.innerHTML = days;
        if (hoursElement) hoursElement.innerHTML = hours;
        if (minutesElement) minutesElement.innerHTML = minutes;
        if (secondsElement) secondsElement.innerHTML = seconds;

        // To stop the countdown
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000); // Update every 1 sec
});
/* end countdown section */

/* start logo section */
// document.addEventListener('DOMContentLoaded', function () {
//     function shiftAndRotateImages() {
//         const logo1 = document.getElementById('logo1');
//         const logo2 = document.getElementById('logo2');
//         const logo3 = document.getElementById('logo3');
//         const logo4 = document.getElementById('logo4');
//         const logo5 = document.getElementById('logo5');
//         const logo6 = document.getElementById('logo6');
//         const logo = [logo1.cloneNode(true), logo2.cloneNode(true), logo3.cloneNode(true), logo4.cloneNode(true), logo5.cloneNode(true), logo6.cloneNode(true)];

//         const logo1hover = document.getElementById('logo1hover');
//         const logo2hover = document.getElementById('logo2hover');
//         const logo3hover = document.getElementById('logo3hover');
//         const logo4hover = document.getElementById('logo4hover');
//         const logo5hover = document.getElementById('logo5hover');
//         const logo6hover = document.getElementById('logo6hover');
//         const logohover = [logo1hover.cloneNode(true), logo2hover.cloneNode(true), logo3hover.cloneNode(true), logo4hover.cloneNode(true), logo5hover.cloneNode(true), logo6hover.cloneNode(true)];

//         const shiftedArray = logo.slice(1).concat(logo[0]);
//         const shiftedArrayHover = logohover.slice(1).concat(logohover[0]);

//         for (let i = 0; i < shiftedArray.length; i++) {
//             let image = document.getElementById(`logo${i + 1}`);
//             image.src = shiftedArray[i].src;

//             image.addEventListener('mouseenter', function () {
//                 image.src = shiftedArrayHover[i].src;
//             });

//             image.addEventListener('mouseleave', function () {
//                 image.src = shiftedArray[i].src;
//             });
//         }
//     }

//     shiftAndRotateImages();

//     setInterval(shiftAndRotateImages, 5000);
// });
/* end logo section */


function ToHome() {
    window.location.href = "index.html";
}
function ToBlog() {
    window.location.href = "blog.html";
}
function ToShop() {
    window.location.href = "shop.html";
}

/* start search section */
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('#searchIcon');
    const searchSection = document.querySelector('#searchSection');

    if (searchIcon) {
        searchIcon.addEventListener('click', function () {
            searchSection.style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchSection = document.querySelector('#searchSection');
    const searchClose = document.querySelector('#search-close');

    if (searchClose) {
        searchClose.addEventListener('click', function () {
            searchSection.style.display = 'none';
        });
    }
});
/* end search section */


/* start side menu section */
document.addEventListener('DOMContentLoaded', function () {
    const sideMenuIcon = document.querySelector('#sideMenuIcon');
    const sideMenu = document.querySelector('#side-menu');

    if (sideMenuIcon) {
        sideMenuIcon.addEventListener('click', function () {
            sideMenu.style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sideMenu = document.querySelector('#side-menu');
    const sideMenuClose = document.querySelector('#side-menu-close');

    if (sideMenuClose) {
        sideMenuClose.addEventListener('click', function () {
            sideMenu.style.display = 'none';
        });
    }
});
/* end side menu section */


/* start zoom in section */
document.addEventListener("DOMContentLoaded", function () {
    function zoomInImage() {
        const homeImage = ['homeImg1', 'homeImg2', 'homeImg3'];

        for (const id of homeImage) {
            const element = document.querySelector(`#${id}`);
            if (element) {
                element.classList.add("zoomed");
            }
        }
    }
    setTimeout(zoomInImage, 2000);
});
/* end zoom in section */


document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content1");

    if (content) {
        content.classList.add("slide-up");

        let currentTop = 200;
        const targetTop = 50;
        const step = -1;

        function animate() {
            if (currentTop > targetTop) {
                content.style.top = `${currentTop}px`;
                currentTop += step;
                requestAnimationFrame(animate);
            }
        }
    }
    setTimeout(animate, 100);
});


document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            resetElements();
            animateElement("content1");
            animateElement("content2");
            animateElement("content3");
        });

        nextBtn.addEventListener("click", function () {
            resetElements();
            animateElement("content1");
            animateElement("content2");
            animateElement("content3");
        });
    }
});

function resetElements() {
    const contentElements = document.querySelectorAll(".header-content");
    contentElements.forEach((content) => {
        content.style.top = "200px"; // Set the top value to its initial state
    });
}

function animateElement(elementId) {
    const content = document.getElementById(elementId);
    content.classList.add("slide-up");

    let currentTop = 200;
    const targetTop = 50;
    const step = -1;

    function animate() {
        if (currentTop > targetTop) {
            content.style.top = `${currentTop}px`;
            currentTop += step;
            requestAnimationFrame(animate);
        }
    }

    setTimeout(animate, 100);
}

/* start form section */
document.addEventListener('DOMContentLoaded', function () {
    const submit = document.querySelector('#submit');

    const nameError = document.querySelector('.nameError');
    const emailError = document.querySelector('.emailError');
    const subjectError = document.querySelector('.subjectError');

    const nameValue = document.querySelector('#nameValue');
    const emailValue = document.querySelector('#emailValue');
    const subjectValue = document.querySelector('#subjectValue');

    const responseOutput = document.querySelector('.response-output');

    if (submit) {
        submit.addEventListener('click', function (e) {
            e.preventDefault();

            let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (pattern.test(emailValue.value))
                emailError.style.display = 'none';
            else if (emailValue.value === '') {
                emailError.innerHTML = 'The field is required.';
                emailError.style.display = 'block';
            }
            else {
                emailError.innerHTML = 'The e-mail address entered is invalid.';
                emailError.style.display = 'block';
            }

            if (nameValue.value === '')
                nameError.style.display = 'block';
            else
                nameError.style.display = 'none';

            if (subjectValue.value === '')
                subjectError.style.display = 'block';
            else
                subjectError.style.display = 'none';

            if ((nameValue.value === '') || (emailValue.value === '') || (subjectValue.value === ''))
                responseOutput.style.display = 'block';
            else
                responseOutput.style.display = 'none';
        });
    }
});
































