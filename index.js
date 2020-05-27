class Counter {
  constructor() {
    this.blocks = [...document.querySelectorAll('.counter__no')];
    this.counterSection = document.querySelector('.counter');
    this.event()

  }

  event() {
    window.addEventListener('scroll', () => this.counting());
  }

  isInAview() {
    const rect = this.counterSection.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  counting = () => {
    if (this.isInAview()) {
      for (let i = 0; i < this.blocks.length; i++) {
        const updateNumber = () => {
          let number = +this.blocks[i].textContent;
          const target = +this.blocks[i].getAttribute('data-target');
          if (number < target) {
            number++
            this.blocks[i].innerText = number;
            setTimeout(updateNumber, 10)
          } else {
            this.blocks[i].innerText = target
          }
        }
        updateNumber()
      }
    } else {
      for (let i = 0; i < this.blocks.length; i++) {
        const resetNumber = () => {
          this.blocks[i].innerText = 0;
        }
        resetNumber()
      }
    }

  }
}



const counter = new Counter();