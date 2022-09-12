import './style.scss';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import './node_modules/waypoints/lib/noframework.waypoints'
import * as bootstrap from 'bootstrap';
import 'animate.css';
import  Swal from 'sweetalert2';

ScrollReveal().reveal('.reveal', { 
  duration : 500,
  delay : 300,
  interval :300,
  origin : 'top',
  distance: '30px'

});

ScrollReveal().reveal('.toLeft',{
  duration : 500,
  delay: 300,
  interval : 400,
  origin : 'right',
  distance : '50px'
})

ScrollReveal().reveal('.toRight',{
  duration:500,
  delay: 300,
  interval : 400,
  origin : 'left',
  distance : '50px'
})

ScrollReveal().reveal('.toTop', { 
  duration : 500,
  delay : 400,
  interval :100,
  origin : 'bottom',
  distance: '30px',
  mobile: false

});



let options = {
  strings: ['Food...','Drink...'],
  typeSpeed: 100,
  backSpeed: 100,
  loop : true,
  loopCount : Infinity,
  backDelay : 1000
};

let typed = new Typed('.element', options);

let array = ['home','about','service','menu','app','contact'];
array.forEach(function(arr,index){
   new Waypoint({
    element: document.getElementById(arr),
    handler: function(direction) {
      if(direction === "down"){
        let previous = document.querySelector('.nav-link.active');
        let next = document.querySelector(`[href="#${arr}"]`);
        if(previous != null){
          previous.classList.remove('active');
        }
        next.classList.add('active');
      }else if(direction === "up"){
        let next = document.querySelector('.nav-link.active');
        let previous = document.querySelector(`[href="#${array[index-1]}"]`);
        previous.classList.add('active');
        next.classList.remove('active');
      }
    },
    offset: '50%'
  })
})

//another waypoint
new Waypoint({
  element : document.getElementById('app'),
  handler : function(direction){
    if(direction === 'down'){
     document.querySelector('.upButton').style.position = "fixed";
    }else{
    document.querySelector('.upButton').style.position = "static";
  }
  },
  offset: '50%'
})

// Breakpoints
const breakpoint = window.matchMedia('(max-width: 560px)');

// Breakpoint checker
const breakpointMutations = () => {
  let side = document.querySelector('.site-navbar');
  let nav =  document.querySelector('.navbar-nav');
  let home = document.querySelector('.home');
  if (breakpoint.matches === true) {
     side.classList.remove('fixed-top');
     nav.classList.remove('nav-pills');
     home.classList.add('home-active');
     home.classList.remove('active');
  }else{
    nav.classList.add('nav-pills');
    home.classList.add('active');
    home.classList.remove('home-active');
    side.classList.add('fixed-top');
  }
}

// Run breakpoint checker if media changes
breakpoint.onchange = function (event) {
    breakpointMutations();
}

// Run breakpoint checker on load
window.onload = breakpointMutations();

