const the_animation2 = document.querySelectorAll('.icon-wrapper2')

const observer2 = new IntersectionObserver(x => {
    x.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation2')
        }
            else {
                entry.target.classList.remove('scroll-animation2')
            }
        
    })
}, { threshold: 1});

  for (let i = 0; i < the_animation2.length; i++) {
   const elements = the_animation2[i];

    observer2.observe(elements);
  }


  const the_animation3 = document.querySelectorAll('.icon-wrapper')

const observer3 = new IntersectionObserver(x => {
    x.forEach(y => {
        if (y.isIntersecting) {
            y.target.classList.add('scroll-animation3')
        } else {
            y.target.classList.remove('scroll-animation3')
            }
        
    })
}, { threshold: 0.5});
//
  for (let i = 0; i < the_animation3.length; i++) {
   const elements = the_animation3[i];

    observer3.observe(elements);

  }


  const animateP = e => {

    const textInTimer = 1000, textOutTimer = 800
    const txts = e.children
    const txtsLen = txts.length
    let index = 0
  
    const animateSpan = () => {
      for (let i = 0; i < txtsLen; i++)
        txts[i].classList.remove("text-in", "text-out")
      txts[index].classList.add("text-in")
  
      setTimeout(function () {
        txts[index].classList.add("text-out")
      }, textOutTimer)
  
      setTimeout(function () {
        if (index == txtsLen - 1)
          index = 0
        else
          index++
        animateSpan()
      }, textInTimer)
    }
  
    animateSpan()
  }
  
  document.querySelectorAll(".animate-text").forEach(e => {
    animateP(e)
  })
