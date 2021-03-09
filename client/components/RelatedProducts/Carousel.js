import $ from 'jquery';

const Carousel = {
  // total no of items
  numCards: document.querySelectorAll(".carousel-item").length,

  // position of current item in view
  current: 1,

  init: function() {
    // set CSS order of each item initially
    document.querySelectorAll(".carousel-item").forEach(function(element, index) {
      element.style.order = index + 1;
    });
    this.addEvents();
  },

  addEvents: function() {
    var that = this;

    // click on move item button
    document.querySelector(".scroll-button").addEventListener('click', () => {
      this.gotoNext();
    });

    // after each item slides in, slider container fires transitionend event
    document.querySelector(".carousel").addEventListener('transitionend', () => {
      this.changeOrder();
    });
  },

  changeOrder: function() {
    // change current position
    if(this.current == this.numCards)
      this.current = 1;
    else
      this.current++;

    let order = 1;

    // change order from current position till last
    for(let i=this.current; i<=this.numCards; i++) {
      document.querySelector(".carousel-item[data-position='" + i + "']").style.order = order;
      order++;
    }

    // change order from first position till current
    for(let i=1; i<this.current; i++) {
      document.querySelector(".carousel-item[data-position='" + i + "']").style.order = order;
      order++;
    }

    // translate back to 0 from -100%
    // we don't need transitionend to fire for this translation, so remove transition CSS
    document.querySelector(".carousel").classList.remove('carousel-transition');
    document.querySelector(".carousel").style.transform = 'translateX(0)';
  },

  gotoNext: function() {
    // translate from 0 to -100%
    // we need transitionend to fire for this translation, so add transition CSS
    document.querySelector(".carousel").classList.add('carousel-transition');
    document.querySelector(".carousel").style.transform = 'translateX(-100%)';
  }
};

export default Carousel;