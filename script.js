document.addEventListener("DOMContentLoaded", function() {
    var galleryImages = document.querySelectorAll('.gallery-image');

    var currentIndex = 0;
    function showNextImage() {
        galleryImages[currentIndex].classList.remove('enlarged');
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImages[currentIndex].classList.add('enlarged');
    }

    // Start the automatic enlargement loop after a delay (e.g., 2 seconds)
    setTimeout(function() {
        showNextImage(); // Initial call
        setInterval(showNextImage, 2000); // Repeat every 2 seconds (adjustable)
    }, 2000);
        var navLinks = document.querySelectorAll('.second-nav a');
      
        navLinks.forEach(function(link) {
          var underline = document.createElement('div');
          underline.className = 'nav-underline';
          link.appendChild(underline);
        });
        gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
  
  tl.from(".one,.two,.three,.four", { duration: 1.5, opacity: 0, y: -70, ease: "power2.out" })
    .to(".one,.two,.three,.four", { duration: 1, ease: "elastic" }) // Add another animation
    .to('.one', { y: -15, repeat: -1, yoyo: true }) // Up and down animation
    .to('.two', { y: -30, repeat: -1, yoyo: true }) // Up and down animation
    .to('.three', { y: -20, repeat: -1, yoyo: true }) // Up and down animation
    .to('.four', { y: -15, repeat: -1, yoyo: true }); // Up and down animation

    gsap.timeline({
        scrollTrigger: {
            trigger: ".div4-left,.div4-right>p",
            start: "top 60%", // adjust as needed
            end: "bottom center", // adjust as needed
            scrub: true,
            markers: false // set to true for debugging
        }
    })
    .from(".div4-left", { x: -40, opacity: 0 })
    .from(".div4-right>p", { y: -60, opacity: 0 })
    .from(".cont1,video", { opacity: 0, y: 20 })
    .from(".cont2", { opacity: 0, y: 20 })
    .from(".cont3", { opacity: 0, y: 20 });
    gsap.to('.div5, .card', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.div5',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
    gsap.from('.div4-rightcont', {
      opacity: 0,
      y: 50, // Move elements up 50 pixels initially
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.div4-rightcont',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
gsap.to('footer',{
    opacity: 1,
    y: 40,
    backgroundColor:"#dadada",
    duration: 1,
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
    },
    
})
    gsap.utils.toArray('.footer-cont').forEach((footerCont) => {
      gsap.to(footerCont, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerCont,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.from('.div1 a', {
      opacity: 0,
      y: -20,
      backgroundColor: "#dadada",
      duration: 1,
      stagger: 0.2, // Stagger the animations for a cascading effect
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.div1',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
    gsap.registerPlugin(TextPlugin);

  gsap.to("#mytext", {
    duration: 2,
    text: "Unlimited Access to 100+ Instructors",
    delay: 1,
  });
  gsap.to(".div1 h2", {
    duration: 2,
    text: "Skillex",
    delay: 1,
  });

})
       

  