$("#slider").testSlider(
  {
    'min': -1000,
    'max': 1000,
    'current-min': 200,
    'current-max': 800, //Only if range = true
    'range': true,
    'handelsLabel': true,
    'vertical': true,
    'step': false,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu', //Only if side-menu = true
  }
);

$("#slider2").testSlider(
  {
    'min': 0,
    'max': 10000,
    'current-min': 3000,
    'current-max': 7000, //Only if range = true
    'range': true,
    'handelsLabel': true,
    'vertical': false,
    'step': 500,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu2', //Only if side-menu = true
  }
);

$("#slider3").testSlider(
  {
    'min': 0,
    'max': 500,
    'current-min': 150,
    'current-max': 350, //Only if range = true
    'range': true,
    'handelsLabel': true,
    'vertical': false,
    'step': false,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu3', //Only if side-menu = true
  }
);

$("#slider4").testSlider(
  {
    'min': 0,
    'max': 100,
    'range': false,
    'handelsLabel': false,
    'vertical': false,
    'step': false,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu4', //Only if side-menu = true
  }
);

$("#slider5").testSlider(
  {
    'min': 0,
    'max': 1000,
    'current-min': 300,
    'current-max': 700, //Only if range = true
    'range': true,
    'handelsLabel': true,
    'vertical': true,
    'step': 100,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu5', //Only if side-menu = true
  }
);
