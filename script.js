function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimation();

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

navbarAnimation();

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

function videoAnimation(){
    var p3cnt = document.querySelector("#p3center");
    var vid = document.querySelector("#page3 video");

    p3cnt.addEventListener("click", function(){
        vid.play()
        gsap.to(vid,{
            transform: "scale(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    vid.addEventListener("click", function(){
        vid.pause()
        gsap.to(vid,{
            transform: "scale(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

videoAnimation();

var sec = document.querySelectorAll(".s2right");

sec.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();
    })

    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();
    })
})

function page9Animation(){
    gsap.from("#p9db-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#p9db-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#p9db-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#p9db-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#p9db-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#p9db-part4",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

page9Animation();


function loadingAnimation(){
    var tl = gsap.timeline()

    tl.from("#page1",{
        opacity: 0,
        duration: 0.2,
        delay: 0.1
    })

    tl.from("#page1",{
        transform: "scaleX(0.5) scaleY(0.01) translateY(80%)",
        borderRadius: "50px",
        duration: 1.5,
        ease: "expo.out"
    })

    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })

    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

loadingAnimation();