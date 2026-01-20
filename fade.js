const fadeElements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.4) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    },
    {
        threshold: 0.4
    }
);

fadeElements.forEach(el => observer.observe(el));
