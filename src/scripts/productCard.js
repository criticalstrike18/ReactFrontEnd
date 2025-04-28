// Function to create the product card HTML
export function createProductCard() {
    return `
      <div class="product-card">
        <div class="dashed-line top-line">
          <span class="dash">-------------------------------</span>
        </div>
        
        <p class="option-label">Men's Cotton T-Shirt</p>
        <p class="price">$29.99</p>
  
        <p class="option-label">Choose Color:</p>
        <div class="color-options">
          <button class="color-btn" data-color="#4CAF50">
            <span class="bracket">[</span>
            <span class="color-dot" style="background-color: #4CAF50;"></span>
            <span class="bracket">]</span>
          </button>
          <button class="color-btn" data-color="#2196F3">
            <span class="bracket">[</span>
            <span class="color-dot" style="background-color: #2196F3;"></span>
            <span class="bracket">]</span>
          </button>
          <button class="color-btn" data-color="#4CAF50">
            <span class="bracket">[</span>
            <span class="color-dot" style="background-color: #4CAF50;"></span>
            <span class="bracket">]</span>
          </button>
        </div>
  
        <p class="option-label">Choose Size:</p>
        <div class="size-options">
          <button class="size-btn" data-size="S">
            <span class="bracket">[</span><span class="size-text">S</span><span class="bracket">]</span>
          </button>
          <button class="size-btn" data-size="M">
            <span class="bracket">[</span><span class="size-text">M</span><span class="bracket">]</span>
          </button>
          <button class="size-btn" data-size="L">
            <span class="bracket">[</span><span class="size-text">L</span><span class="bracket">]</span>
          </button>
          <button class="size-btn" data-size="XL">
            <span class="bracket">[</span><span class="size-text">XL</span><span class="bracket">]</span>
          </button>
        </div>

        <p class="option-label">Choose Gender:</p>
        <div class="size-options">
          <button class="size-btn" data-size="M">
            <span class="bracket">[</span><span class="size-text">M</span><span class="bracket">]</span>
          </button>
          <button class="size-btn" data-size="F">
            <span class="bracket">[</span><span class="size-text">F</span><span class="bracket">]</span>
          </button>
        </div>
        
        <button class="add-to-cart">
          <span class="bracket">[</span>Add to Cart<span class="bracket">]</span>
        </button>
        
        <div class="dashed-line bottom-line">
          <span class="dash">-------------------------------</span>
        </div>
      </div>
    `;
  }