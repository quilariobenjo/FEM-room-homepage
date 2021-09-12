const menuButton = document.querySelector('.btn--menu');
const headerNav = document.querySelector('.header__nav');
const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const headerActive = function () {
  if (headerNav.classList.contains('header__nav--active')) {
    headerNav.classList.remove('header__nav--active');
    overlay.classList.remove('overlay-open');
    body.classList.remove('no-scroll');
    menuIcon.src = './images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', false);
    menuButton.setAttribute('aria-pressed', false);
  } else {
    headerNav.classList.add('header__nav--active');
    overlay.classList.add('overlay-open');
    body.classList.add('no-scroll');
    menuIcon.src = './images/icon-close.svg';
    menuButton.setAttribute('aria-expanded', true);
    menuButton.setAttribute('aria-pressed', true);
  }
};

document.addEventListener('keydown', (evt) => {
  console.log(evt.key);
  if (evt.key === 'Escape') {
    headerActive();
  }
});

menuButton.addEventListener('click', headerActive);
overlay.addEventListener('click', headerActive);

/*---- ChangeContent Image ----*/

const carouselImg = document.querySelectorAll('.hero__carousel__image--img');
const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--prev');

const heroText = document.querySelector('.hero__text');
const heading = document.querySelector('.heading--xxl');
const paragraph = document.querySelector('.paragraph--hero');
let index = 0;

const dataText = [
  {
    heading: 'Discover innovative ways to decorate',
    paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    heading: 'We are available all across the globe',
    paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    heading: 'Manufactured with the best materials',
    paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  },
];

const changeText = function (index) {
  heroText.classList.add('hero__text--transition');
  setTimeout(() => {
    heroText.classList.remove('hero__text--transition');
    heading.textContent = dataText[index].heading;
    paragraph.textContent = dataText[index].paragraph;
  }, 700);
};

const prevImg = function () {
  carouselImg[index].classList.remove('active');
  index = index === 0 ? carouselImg.length - 1 : index - 1;
  carouselImg[index].classList.add('active');
  changeText(index);
};

const nextImg = function () {
  carouselImg[index].classList.remove('active');
  index = index === carouselImg.length - 1 ? 0 : index + 1;
  carouselImg[index].classList.add('active');
  changeText(index);
};

carouselImg[index].classList.add('active');
prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'a' || evt.key === 'ArrowLeft') {
    prevImg();
  } else if (evt.key === 'd' || evt.key === 'ArrowRight') {
    nextImg();
  }
});
