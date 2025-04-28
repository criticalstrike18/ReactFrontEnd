// Import the separate components
import { createProductColumn } from './productColumn.js';
import { addStyles } from './productStyles.js';

// This script handles the transition from artist grid to product cards
document.addEventListener('astro:page-load', () => {
    // Create the product grid that will appear after clicking
    function createProductGrid(artistImageSrc) {
      const productGrid = document.createElement('div');
      productGrid.className = 'product-grid-container';
      productGrid.style.display = 'none';
      
      // Create the 3-column grid
      const gridHTML = `
        <div class="product-grid">
          ${createProductColumn(artistImageSrc)}
          ${createProductColumn(artistImageSrc)}
          ${createProductColumn(artistImageSrc)}
        </div>
        <div style="height: 10rem;"></div>
      `;
      
      productGrid.innerHTML = gridHTML;
      return productGrid;
    }
    
    // Initialize the product selection interactivity
    function initializeProductInteractivity() {
      const colorButtons = document.querySelectorAll('.color-btn');
      const sizeButtons = document.querySelectorAll('.size-btn');
      
      // Set initial selection
      if (colorButtons.length > 0) colorButtons[0].classList.add('selected');
      if (sizeButtons.length > 0) {
        // Find the M size button and select it by default
        const mButton = Array.from(sizeButtons).find(btn => btn.getAttribute('data-size') === 'M');
        if (mButton) mButton.classList.add('selected');
      }
      
      colorButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove selection from all color buttons
          colorButtons.forEach(btn => btn.classList.remove('selected'));
          // Add selection to clicked button
          button.classList.add('selected');
        });
      });
      
      sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove selection from all size buttons
          sizeButtons.forEach(btn => btn.classList.remove('selected'));
          // Add selection to clicked button
          button.classList.add('selected');
        });
      });
    }
    
    // Initialize everything
    function init() {
      // Get the artist grid and other elements
      const artistGrid = document.querySelector('#grid'); 
      const tooltip = document.querySelector('.tooltip');
      const artistGridHeader = document.querySelector('.title-header');
      const footerSeparator = document.querySelector('footer').previousElementSibling;
      
      if (!artistGrid) return;
      
      // Add the CSS styles
      addStyles();
      
      // Store original event handlers for header buttons
      const sortButton = document.querySelector('[data-sort]');
      const shuffleButton = document.querySelector('[data-shuffle]');
      const searchButton = document.querySelector('[data-search]');
      
      // Variable to track if we're in product view
      let inProductView = false;
      let productGrid = null;
      
      // Add click handlers to artist cards
      const artistCardWrappers = artistGrid.querySelectorAll('.artist');
      artistCardWrappers.forEach(artistCard => {
        artistCard.addEventListener('click', (e) => {
          if (inProductView) return; // Prevent multiple transitions
          
          e.preventDefault();
          
          // Extract image URL from the style attribute
          let artistImageSrc = "";
          const styleAttribute = artistCard.getAttribute('style');
          if (styleAttribute) {
            const match = styleAttribute.match(/url\(['"]?([^'"]+)['"]?\)/);
            if (match && match[1]) {
              artistImageSrc = match[1];
            }
          }
          
          // Fallback if image not found
          if (!artistImageSrc) {
            artistImageSrc = "/images/artists/reevo.webp";
          }
          
          // Create the product grid with this specific artist's image
          productGrid = createProductGrid(artistImageSrc);
          
          // Insert before the footer's separator to keep it visible
          footerSeparator.insertAdjacentElement('beforebegin', productGrid);
          
          // Fade out artist grid
          if (artistGrid) artistGrid.style.opacity = '0';
          if (tooltip) tooltip.style.opacity = '0';
          
          setTimeout(() => {
            // Hide artist grid but keep header
            if (artistGrid) artistGrid.style.display = 'none';
            if (tooltip) tooltip.style.display = 'none';
            
            // Show product grid
            productGrid.style.display = 'block';
            
            // Initialize product interactivity
            initializeProductInteractivity();
            
            // Set flag
            inProductView = true;
          }, 500);
        });
      });
      
      // Add event handlers to header buttons to go back to artist grid
      const headerButtons = [sortButton, shuffleButton, searchButton];
      headerButtons.forEach(button => {
        if (!button) return;
        
        const originalClickHandler = button.onclick;
        
        button.addEventListener('click', (e) => {
          if (inProductView) {
            // Return to artist grid first
            transitionBackToArtistGrid();
            
            // Let original handlers work after transition
            setTimeout(() => {
              // The original click handlers will be executed as normal
            }, 500);
          }
          // Original functionality still works when not in product view
        });
      });
      
      // Function to transition back to artist grid
      function transitionBackToArtistGrid() {
        if (!inProductView || !productGrid) return;
        
        // Hide product grid
        productGrid.style.opacity = '0';
        
        setTimeout(() => {
          // Remove product grid
          productGrid.remove();
          productGrid = null;
          
          // Show artist grid
          if (artistGrid) artistGrid.style.display = 'grid';
          if (tooltip) tooltip.style.display = 'block';
          
          setTimeout(() => {
            // Fade in artist grid
            if (artistGrid) artistGrid.style.opacity = '1';
            if (tooltip) tooltip.style.opacity = '1';
            
            // Reset flag
            inProductView = false;
          }, 10);
        }, 500);
      }
    }
    
    // Run initialization
    init();
});