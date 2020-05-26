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
  counting() {
    const that = this;
    if (this.isInAview()) {
      for (let i = 0; i < that.blocks.length; i++) {
        function updateNumber() {
          let number = +that.blocks[i].textContent;
          const target = +that.blocks[i].getAttribute('data-target');
          console.log(number, target)
          if (number < target) {
            number++
            that.blocks[i].innerText = number;
            console.log(that.blocks[i].innerText)
            setTimeout(updateNumber, 10)
          } else {
            that.blocks[i].innerText = target
          }
        }
        updateNumber()
      }
    } else {
      for (let i = 0; i < that.blocks.length; i++) {
        function resetNumber() {
          that.blocks[i].innerText = 0;
        }
        resetNumber()
      }
    }

  }
}



const counter = new Counter();