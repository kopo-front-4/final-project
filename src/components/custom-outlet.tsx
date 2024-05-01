import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const CustomOutlet = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    // @ts-expect-error JQuery 사용
    $('main').ripples({
      // 리플의 반복 효과 여부
      dropRadius: 50, // 리플 반지름 크기
      perturbance: 0.04, // 물결의 왜곡 정도
    });
  }

  return (
    <>
      <main className='h-full w-full bg'>
        <Outlet />
      </main>
    </>
  );
};

export default CustomOutlet;
