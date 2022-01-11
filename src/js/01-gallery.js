import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const photosMarkup = createPhotosMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);

function createPhotosMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" data-source = "${original}" alt="${description}" width="800" />
  </a>
`;
  });

  return markup.join('');
}
galleryContainer.addEventListener('click', onPhotoClick);

function onPhotoClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
console.log(galleryItems);
