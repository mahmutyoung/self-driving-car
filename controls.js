class Controls {
  constructor() {
    this.left = false;
    this.right = false;
    this.forward = false;
    this.backward = false;
    this.#addEventListeners();
  }

  #addEventListeners() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.left = true;
          break;
        case 'ArrowRight':
          this.right = true;
          break;
        case 'ArrowUp':
          this.forward = true;
          break;
        case 'ArrowDown':
          this.backward = true;
          break;
      }
    });
    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.left = false;
          break;
        case 'ArrowRight':
          this.right = false;
          break;
        case 'ArrowUp':
          this.forward = false;
          break;
        case 'ArrowDown':
          this.backward = false;
          break;
        default:
          break;
      }
    });
  }
}
