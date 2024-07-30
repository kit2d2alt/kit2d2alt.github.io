document.addEventListener("DOMContentLoaded", function() {
    const cat = document.querySelector(".cat");

    function runCat() {
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        cat.style.top = `${randomY}px`;
        cat.style.display = 'block';

        cat.classList.remove("run");
        void cat.offsetWidth;
        cat.classList.add("run");

        setTimeout(() => {
            cat.style.display = 'none';
        }, 5000);
    }

    runCat();

    setInterval(runCat, 10000);
});
