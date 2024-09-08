const track = document.querySelector('.carousel-track');
const trackTwo = document.querySelector('.carousel-track-two');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0;

function moveToNextImage() {
    currentIndex++;
    
    if (currentIndex >= images.length) {
        currentIndex = 0; // Если дошли до конца, начать сначала
    }

    // Перемещаем карусель
    const offset = -currentIndex * 50; // По 50% ширины изображения
    track.style.transform = `translateX(${offset}%)`;
}

// Запускаем автоматическую прокрутку каждые 3 секунды
setInterval(moveToNextImage, 3000);

