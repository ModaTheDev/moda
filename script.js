```javascript
/* =========================
   MODA WEBSITE
========================= */


/* =========================
   TYPEWRITER
========================= */

const title = document.getElementById("hero-title");

const text = "MODA";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 180);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 500);

});


/* =========================
   DISCORD COUNTERS
========================= */

/*
    These are temporary values.

    Once you give me your actual Discord servers,
    we'll connect these to real server/member data.
*/

const memberCounts = [
    "128",
    "64",
    "42"
];

const counters = document.querySelectorAll(".member-count");

counters.forEach((counter, index) => {

    setTimeout(() => {

        counter.textContent = memberCounts[index];

    }, 700 + (index * 200));

});


/* =========================
   SCROLL REVEAL
========================= */

const cards = document.querySelectorAll(
    ".social-card, .discord-card, .section-heading"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});
```
