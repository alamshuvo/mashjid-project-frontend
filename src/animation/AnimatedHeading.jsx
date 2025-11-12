

// import { animate, splitText, stagger } from 'animejs';

const AnimatedHeading = () => {


  // const { chars } = splitText('p', {
  //   chars: { wrap: 'clip' },
  // });
  
  // animate(chars, {
  //   y: [
  //     { to: ['100%', '0%'] },
  //     { to: '-100%', delay: 750, ease: 'in(3)' }
  //   ],
  //   duration: 750,
  //   ease: 'out(3)',
  //   delay: stagger(50),
  //   loop: true,
  // });

  return (
    <p
      className="text-3xl s font-bold text-white mb-8 "
    >
      Prayer Timings
    </p>
  );
};

export default AnimatedHeading;
