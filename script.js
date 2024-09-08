const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryTrack2 = document.querySelector('.gallery-track-two');

function cloneItems() {
    galleryItems.forEach(item => {
        const clone = item.cloneNode(true);
        galleryTrack.appendChild(clone);
        galleryTrack2.appendChild(clone);

    });
}

cloneItems();

// const galleryTrack2 = document.querySelector('.gallery-track-two');

// function cloneItems() {
//     galleryItems.forEach(item => {
//         const clone = item.cloneNode(true);
//         galleryTrack2.appendChild(clone);
//     });
// }

// cloneItems();


