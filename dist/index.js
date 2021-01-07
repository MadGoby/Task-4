$("#slider").testSlider(
  {
    'min': -1000,
    'max': -100,
    'current-min': -900,
    'current-max': -200, //Only if range = true
    'range': true,
    'handelsLabel': true,
    'vertical': true,
    'valueScale': false,
    'step': 50,
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
    'handelsLabel': false,
    'vertical': false,
    'valueScale': true,
    'step': 1000,
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
    'valueScale': true,
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
    'valueScale': true,
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
    'valueScale': false,
    'step': 100,
    'side-menu': true,
    'sideMenuContainer': '#sliderMenu5', //Only if side-menu = true
  }
);
