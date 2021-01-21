class Slider {
  /**
   *
   * @param {string[]} imagesArray
   * @param {number} currentIndex
   */
  constructor(imagesArray, currentIndex = 0) {
    this.slides = imagesArray;
    this.currentIndex = currentIndex;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(v) {
    if (typeof v !== 'number') {
      throw new TypeError();
    }
    this._currentIndex = v;
  }

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this.slides.length;
  }

  get prevIndex() {
    return (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
