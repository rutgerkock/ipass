document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    let slides = [];

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    function createSlideshow() {
        fetch('/extra/csv/images.csv')
            .then(response => response.text())
            .then(data => {
                const parsedData = [];
                const rows = data.split('\n');
                rows.forEach(row => {
                    const columns = row.split(',');
                    const imageAddress = columns[0];
                    parsedData.push({ imageAddress });
                });

                const slideshowContainer = document.createElement('div');
                slideshowContainer.className = 'slideshow-container';
                const prevButton = document.createElement('a');
                prevButton.className = 'prev';
                prevButton.textContent = 'Prev \u2009|';
                prevButton.onclick = function() {
                    plusSlides(-1);
                };
                const nextButton = document.createElement('a');
                nextButton.className = 'next';
                nextButton.textContent = '\u2004Next';
                nextButton.onclick = function() {
                    plusSlides(1);
                };
                slideshowContainer.appendChild(prevButton);
                slideshowContainer.appendChild(nextButton);

                parsedData.forEach((data, index) => {
                    const slide = document.createElement('div');
                    slide.className = 'mySlides fade';
                    const image = document.createElement('img');
                    image.src = data.imageAddress;
                    image.style.width = '100%';
                    image.alt = data.imageAddress;
                    slide.appendChild(image);
                    slideshowContainer.appendChild(slide);

                    if (index === parsedData.length - 1) {
                        const imageWrapper = document.querySelector('.image-wrapper');
                        imageWrapper.appendChild(slideshowContainer);
                        slides = document.querySelectorAll('.mySlides');
                        showSlides(slideIndex);
                    }
                });
            })
            .catch(error => console.error(error));
    }

    const darkButton = document.getElementById('darkButton');
    const lightButton = document.getElementById('lightButton');
    const body = document.querySelector('body');

    darkButton.addEventListener('click', function() {
        body.classList.remove('light-mode');
    });

    lightButton.addEventListener('click', function() {
        body.classList.add('light-mode');
    });

    createSlideshow();

    const lightModeButton = document.createElement('div');
    lightModeButton.className = 'light-mode-buttons';
    lightModeButton.textContent = 'Light Mode';

    lightModeButton.addEventListener('click', function() {
        body.classList.add('light-mode');
    });

    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.appendChild(lightModeButton);
});
