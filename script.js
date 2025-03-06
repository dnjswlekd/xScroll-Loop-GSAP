gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.visual .img-box',
      start: '60% 50%',
      end: '150%',
      // 스크럽은 스크롤을 내렸다가 다시 되감기할때
      scrub: 1,
      pin: true,
      markers: false,
    },
  })
  .fromTo(
    '.visual .img-box img',
    {
      transform: 'rotateY(-40deg) rotateX(50deg)',
      width: '50%',
      opacity: 0.2,
    },
    { transform: 'rotateY(0deg) rotateX(0deg)', width: '100%', opacity: 1 },
    0
  );
