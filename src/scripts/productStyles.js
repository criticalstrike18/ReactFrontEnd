// Function to add CSS styles for the product grid
export function addStyles() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
      .product-grid-container {
        transition: opacity 0.5s ease;
        min-height: calc(100vh - 400px);
        margin-top: 2rem;
        position: relative;
        z-index: 2;
      }
      
      .product-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 5rem;
      }
      
      .product-column {
        padding: 0 1rem;
      }
      
      .label {
        color: #888;
        font-size: 0.8rem;
        margin: 0 0 0.5rem 0;
        font-family: monospace;
      }
      
      .image-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
      
      .artist-image {
  width: 60px;
  height: 70px;
  object-fit: fill;
  border-radius: 4px;
}
      
      .tshirt {
  position: relative;
  width: 120px;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}
      
      .tshirt-outline {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .tshirt-design {
  position: absolute;
  width: 48px;
  height: 48px;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
      
      /* Product card styles */
      .product-card {
        font-family: "Noto Sans Mono", monospace;
        max-width: 340px;
        padding: 0 10px;
        background-color: #fff;
        margin: 0;
      }
      
      .dashed-line {
        font-size: 14px;
      }
      
      .dash {
        letter-spacing: 0;
        white-space: nowrap;
      }
      
      .bottom-line {
        margin-top: 8px;
        color: #ff0000;
      }
      
      .price {
        margin: 2px 0 30px 0;
        font-size:12px;
      }
      
      .option-label {
        margin: 8px 0 5px 0;
        font-size: 14px;
        color: #333;
      }
      
      .color-options {
        display: flex;
        gap: 5px;
        margin-bottom: 30px;
      }
      
      .color-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
        font-family: monospace;
      }
      
      .color-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: relative;
      }
      
      .color-btn:hover .color-dot::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background-color: #000;
      }
      
      .color-btn.selected .color-dot::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background-color: #000;
      }
      
      .size-options {
        display: flex;
        gap: 5px;
        margin-bottom: 30px;
      }
      
      .size-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-family: monospace;
        font-size: 14px;
        outline: none;
        color: #333;
      }
      
      .bracket {
        color: #333;
      }
      
      .size-text {
        font-weight: normal;
        position: relative;
      }
      
      .size-btn:hover .size-text::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 1px;
        background-color: currentColor;
      }
      
      .size-btn.selected .size-text::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 1px;
        background-color: currentColor;
      }
      
      .size-btn[data-size="S"] .size-text {
        color: #4CAF50;
      }
      
      .size-btn[data-size="M"] .size-text {
        color: #2196F3;
      }
      
      .size-btn[data-size="L"] .size-text {
        color: #4CAF50;
      }
      
      .size-btn[data-size="XL"] .size-text {
        color: #2196F3;
      }
      
      .add-to-cart {
        margin-top: 5px;
        background: none;
        border: none;
        color: #ff0000;
        cursor: pointer;
        padding: 0;
        font-family: monospace;
        font-size: 14px;
        outline: none;
      }
      
      .add-to-cart .bracket {
        color: #ff0000;
      }
      
      .add-to-cart:hover {
        text-decoration: underline;
      }
      
      @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: 1fr;
        }
        
        .product-column {
          margin-bottom: 2rem;
        }
      }
    `;
  document.head.appendChild(styleElement);
}
