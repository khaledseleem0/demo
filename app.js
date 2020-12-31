// animation: 1s 123 ease-in-out;
let header = document.getElementById('header');
let open = document.getElementById('open');
let copyIn = document.getElementById('copy-in');
let copyBtn = document.querySelector('.copy-btn');
let fliby = document.querySelectorAll('#fliby');
let more = document.querySelectorAll('#more');
let more2 = document.querySelectorAll('#more2');
let copyContent = `copy link and share with other's  `.toUpperCase();
let close = document.getElementById('close');
let nav = document.getElementById('nav');
let linked = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');
let h1 = document.querySelector('.h1');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let h1_t = ' your health';
let p1_t = 'we care about';
let p2_t = ' please, stay home ';
let p3_t = ' _our clinic ';

let windowHeight = document.body.scrollHeight;
// scrolling into top on window is loading
window.onunload = function() {
    this.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// for nav open btn 
open.addEventListener('click', () => {
    nav.style.transform = 'translateX(0px)';
    linked.forEach((links) => {
        links.style.animationName = 'linked';

    })
});

// for close-nav btn 
close.addEventListener('click', () => {
        nav.style.transform = 'translateX(50vw)';
        linked.forEach((links) => {
            links.style.animationName = '';
        })
    })
    // display the constrol
let topBtn = document.querySelector('.top');
let bottomBtn = document.querySelector('.bottom');
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

bottomBtn.addEventListener('click', () => {
    window.scrollTo({
        top: windowHeight,
        behavior: 'smooth'
    })
})


// on scroll change navbar color 
window.addEventListener('scroll', (e) => {
    let offest = window.pageYOffset;
    if (window.pageYOffset >= sections[0].clientHeight) {
        header.classList.add('light');
        header.classList.remove('transparent')
    } else {
        header.classList.add('transparent')
        header.classList.remove('light')
    }
    if (offest >= (windowHeight / 2)) {
        topBtn.style.transform = 'scale(1)';
        bottomBtn.style.transform = 'scale(0)'

    } else {
        bottomBtn.style.transform = 'scale(1)';
        topBtn.style.transform = 'scale(0)'
    }
})


//on click scroll windwo to the spcifec section
linked.forEach((link, index) => {
    link.addEventListener('click', () => {
        if (link.id == sections[index].dataset.scrolling) {
            let i = sections[index].offsetTop - 100;
            window.scrollTo({
                top: i,
                behavior: 'smooth',
            })
        }
    })
})

// for fliping  doctor's card info
more.forEach((item, i) => {
    more[i].addEventListener('click', () => {
        fliby[i].style.transform = 'rotateY(180deg)';
    })
    more2[i].addEventListener('click', () => {
        fliby[i].style.transform = 'rotateY(0deg)';
    })

});

//slide show for cards 
let slider = document.getElementById('scroling');
let cardes = document.querySelectorAll('#scroling .card');
let counter = 0;
let size = cardes[0].clientWidth;
let slidershow = setInterval(() => {
    counter++;
    slider.style.transition = 'transform 1s ease-in-out'
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter > (cardes.length - 1)) {
        counter = 0;
        slider.style.transform = 'translateX(' + (counter) + 'px)';

    }
}, 4000);

// type wreiter effect
setTimeout(() => {
    copyIn.value = '';
    let letter = Array.from(copyContent)
    let i = 0;
    let writerEff = setInterval(() => {
        if (i >= letter.length) {
            clearInterval(writerEff);
            copyIn.value = '';
            copyIn.value += location.href;
            // copy link function
            copyBtn.style.opacity = 1;
            copyBtn.addEventListener('click', () => {
                copyIn.select();
                copyIn.setSelectionRange(0, 99999)
                let link = copyContent.value;
                document.execCommand("copy");
            })
        } else {
            copyIn.value += letter[i];
            copyBtn.style.opacity = 0;
        }
        i++;
    }, 300);
    console.log('done')
}, 4000)

// type wreiter effect at the end 
p1.textContent = '';
let letter = Array.from(p1_t)
let currunt = 0;
let writerEff = setInterval(() => {
    if (currunt >= letter.length) {
        clearInterval(writerEff);
        // end 1
        h1.textContent = '';
        let letter = Array.from(h1_t)
        let currunt = 0;
        let writerEff1 = setInterval(() => {
            if (currunt >= letter.length) {
                clearInterval(writerEff1);
                // end 2 
                p2.textContent = '';
                let letter = Array.from(p2_t)
                let currunt = 0;
                let writerEff2 = setInterval(() => {
                    if (currunt >= letter.length) {
                        clearInterval(writerEff2);
                        // end 3
                        p3.textContent = '';
                        let letter = Array.from(p3_t)
                        let currunt = 0;
                        let writerEff3 = setInterval(() => {
                            if (currunt >= letter.length) {
                                clearInterval(writerEff3);
                            } else {
                                p3.textContent += letter[currunt].toUpperCase();
                            }
                            currunt++;
                        }, 200);
                    } else {
                        p2.textContent += letter[currunt].toUpperCase();
                    }
                    currunt++;
                }, 200);
            } else {
                h1.textContent += letter[currunt].toUpperCase();
            }
            currunt++;
        }, 200);

    } else {
        p1.textContent += letter[currunt].toUpperCase();
    }
    currunt++;
}, 200);

// end script (*_*)