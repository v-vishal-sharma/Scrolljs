// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksConatiner = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // linksConatiner.classList.toggle('show-links');
    // we can also use the above commented code and set height auto in show-links class
    
    // below steps are for making the height of menu dynamic

    const containerHeight = linksConatiner.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0){
        linksConatiner.style.height = `${linksHeight}px`
    }
    else{
        linksConatiner.style.height = 0;
    }

});

const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link");

// ********** fixed navbar ************

window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 1000){
        topLink.classList.add('show-link');
    }else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);

        const element = document.getElementById(id);
        
        let position = element.offsetTop;
        window.scrollTo({
            left:0,
            top: position,
        });

        linksConatiner.style.height = 0;

    })
})