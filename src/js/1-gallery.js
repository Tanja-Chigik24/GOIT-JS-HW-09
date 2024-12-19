'use strict';
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
const listGallery = document.querySelector('.gallery');
let markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img 
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a> 
      </li>`;
  })
  .join('');
/*console.log(markup);*/
listGallery.innerHTML = markup;

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

lightbox.refresh();
