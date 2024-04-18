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