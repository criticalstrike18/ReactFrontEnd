import { createProductCard } from './productCard.js';

// Function to create a single product column with image and t-shirt
export function createProductColumn(artistImageSrc) {
    const imageUrl = typeof artistImageSrc === 'object' ? artistImageSrc.url : artistImageSrc;
    return `
      <div class="product-column">
        <div class="image-display">
          <img src="${imageUrl}" alt="Artist" class="artist-image" />
          <div class="tshirt">
            <img src="/images/tshirt-ascii.png" alt="T-shirt"/>
            <img src="${imageUrl}" alt="T-shirt design" class="tshirt-design" />
          </div>
        </div>
        ${createProductCard()}
      </div>
    `;
}