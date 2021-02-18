const nav = document.querySelector('#navbar');
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

//added code to give nav buttons a cool scrolling animation when clicked

//declare function smoothScroll with paramaters target element & duration
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    //requestAnimationFrame gives acces to the currentTime
    function animation(currentTime) {
        //Set current time to time of page load
        if(startTime === null) startTime = currentTime;
        // console.log(startTime);
        //Calculate the difference between page load time and when button was clicked
        var timeElapsed = currentTime - startTime;
        //assign easing function to variable 
        var run = ease(timeElapsed, startPosition, distance, duration);
        //scroll to y coordinate calcuated by ease function 
        window.scrollTo(0, run);

        //if time elapsed is greater than the duration requestAnimationFrame
        if(timeElapsed < duration) requestAnimationFrame(animation);
        // console.log("timeElapsed : " + timeElapsed + " Duration : " + duration);
    }


    //Easing function credit to https://gizma.com/easing/
    function  ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    // tell the browser we wish to perform an animation and request to to call a function before the next repaint           
    requestAnimationFrame(animation);
    console.log(target);
}


//Adding event listeners for scrolling. Is there a shorter way to do all this?
const logo = document.querySelector(".logo");
logo.addEventListener("click", function(){
    smoothScroll("#home", 500);  
})

const home = document.querySelector("#homeButton");
home.addEventListener("click", function(){
    smoothScroll("#home", 500);  
})

const about = document.querySelector("#aboutButton");
about.addEventListener("click", function(){
    smoothScroll("#about", 500);
})

const gallery = document.querySelector("#galleryButton");
gallery.addEventListener("click", function(){
    smoothScroll("#gallery", 500);
})

const events = document.querySelector("#eventsButton");
events.addEventListener("click", function(){
    smoothScroll("#events", 500);    
})

const contact = document.querySelector("#contactButton");
contact.addEventListener("click", function(){
    smoothScroll("#contact", 500);
})




