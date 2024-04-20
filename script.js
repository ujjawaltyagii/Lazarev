function navbarAnimation() {
    var nav = document.querySelector("#expand");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to("#nav-line", {
            height: "22.5vh"
        })
        tl.to("#expand h5", {
            display: "block"
        })
        tl.to("#expand h5 span", {
            y: 0,
            // duration: 0.3,
            stagger: {
                amount: 0.6
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to("#expand h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("#expand h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-line", {
            height: 0,
            duration: 0.2
        })
    })
}

// navbarAnimation();

function bubbleAnimation(){
    var rp = document.querySelectorAll(".rparts");

    rp.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            // elem.childNodes[3].style.opacity = 1;
            gsap.to(elem.childNodes[3],{
                opacity: 1,
                scale: 1,
                zindex: 0
            })
        })
        elem.addEventListener("mouseleave",function(){
            // elem.childNodes[3].style.opacity = 0;
            gsap.to(elem.childNodes[3],{
                opacity: 0,
                scale: 0,
                zindex: 0
            })
        })
        elem.addEventListener("mousemove", function(det){
            // console.log(det);
            gsap.to(elem.childNodes[3],{
                x: det.x - elem.getBoundingClientRect().x-50,
                y: det.y - elem.getBoundingClientRect().y-120
            })
        })
    })
}

bubbleAnimation();