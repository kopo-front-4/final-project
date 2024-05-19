import styles from './loading.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    const storedInfo = localStorage.getItem('userInfo'); // 로컬 스토리지 받아옴
    if (storedInfo == null) navigate('/');
    const userInfo = JSON.parse(storedInfo!);
    const userName = userInfo.name;
    if (userName == null) navigate('/');
    setName(userName);

    setTimeout(() => {
      navigate('/result?code=' + code);
    }, 5000);
  }, []);

  setTimeout(() => {
    setProgress((cur) => cur + 1);
  }, 1.5);

  return (
    <>
      <progress max={5000} value={progress} className='fixed top-0 w-full bg-white'></progress>
      <section className='h-full w-full flex2'>
        <article className='h-96 p-10 glass-black rounded-2xl flex2 flex-col'>
          <div className={styles.loader}>
            <div className={styles.loaderInside}>
              <div className={styles.loaderReverse} />
            </div>
          </div>
          <p className='px-5 text-sm sm:text-2xl text-center mt-20 text-white'>
            {name}
            <br /> 님의 운세를 분석 중입니다...
          </p>
        </article>
      </section>
    </>
  );
};

export default LoadingPage;
