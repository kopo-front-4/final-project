import { useState } from 'react';
import { UserInputModal } from '../components/user-input-modal';

const RootPage = () => {
  const [start, setStart] = useState(false);

  document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') setStart(true);
  });

  return (
    <section className='w-full h-full flex items-center justify-center flex-col gap-10'>
      {start && <UserInputModal closeModal={() => setStart(false)} start={start} />}

      <img
        src='images/fourTUNE.png'
        alt='Logo'
        className={`${start ? 'opacity-0' : 'opacity-100'} hover:scale-110 duration-500 ease-in-out`}
      />
      <button
        onClick={() => setStart(true)}
        className='text-2xl sm:text-4xl text-white hover:text-white/70 duration-300  font-bold z-20'
      >
        {!start && 'Press Enter to Start'}
      </button>
    </section>
  );
};

export default RootPage;
