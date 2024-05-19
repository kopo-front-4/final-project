import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa6';
import axios from 'axios';

interface UserInputModalProps {
  start: boolean;
  closeModal: () => void;
}

export const UserInputModal: React.FC<UserInputModalProps> = ({ closeModal, start }) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [birthTime, setBirthTime] = useState<string>('모름');
  const [isSolar, setIsSolar] = useState(true);

  const [errorName, setErrorName] = useState('');
  const [errorBirthDate, setErrorBirthDate] = useState('');

  const handleSubmit = async () => {
    if (birthDate.trim() == '') {
      setErrorBirthDate('생년월일은 필수 값입니다.');
      return;
    }

    console.log(birthDate);

    const result = await axios.get('/api/code?birth_date=' + birthDate);

    if (result.status == 200) {
      const obj = {
        name,
        birthDate,
        birthTime,
        isSolar,
      };

      const code = result.data.code;

      localStorage.setItem('userInfo', JSON.stringify(obj));
      navigate('/loading?code=' + code);
    }
  };

  const handleClose = () => {
    setName('');
    setBirthDate('');
    setBirthTime('모름');
    setIsSolar(true);
    setErrorName('');
    setErrorBirthDate('');
    closeModal();
  };

  const handleNext = () => {
    if (name.trim() == '') {
      setErrorName('이름은 필수 값입니다.');
      return;
    }

    if (name.length >= 10) {
      setErrorName('이름은 10자를 초과하실 수 없습니다.');
      return;
    }

    setFlipped(true);
  };

  const handleNameInput = (value: string) => {
    setErrorName('');
    setName(value);
  };

  return (
    <section className={`${start ? 'opacity-100' : 'opacity-0'} inset-0 flex2 duration-1000 z-20 relative`}>
      {/* 카드 앞면 */}
      <article
        className={`absolute top-0 h-[600px] w-96 glass-black text-white bfv duration-500 ${flipped && 'flipped'}`}
      >
        <div className='h-full w-full flex flex-col items-center justify-between p-10 bg-black/10 rounded-lg'>
          <hgroup>
            <h2 className='text-center'>FOURTUNE</h2>
            <h2 className='text-center'>성명 입력란</h2>
          </hgroup>
          <span>이름을 입력해주세요 :)</span>

          <div className='w-full flex flex-col'>
            <label htmlFor='name'>성명</label>
            <input
              type='text'
              id='name'
              className='mt-2 rounded-md w-full px-5 py-2 text-zinc-800 text-center'
              placeholder='이름을 입력해주세요'
              onChange={(e) => handleNameInput(e.target.value)}
              value={name}
            />
            <span className='mt-1 h-8 text-sm flex items-center'>{errorName}</span>
          </div>

          <div className='w-full flex gap-5 text-zinc-800'>
            <button className='w-72 py-1 bg-white rounded-md hover:bg-white/70 duration-200' onClick={handleClose}>
              Back
            </button>
            <button className='w-72 py-1 bg-white rounded-md hover:bg-white/70 duration-200' onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </article>
      {/* 카드 뒷면 */}
      <article
        className={`absolute top-0 h-[600px] w-96 glass-black text-white bfv duration-500 ${!flipped && 'flipped'}`}
      >
        <div className='h-full w-full flex flex-col items-center justify-between p-10 bg-black/10 rounded-lg'>
          <hgroup>
            <h2 className='text-center'>FOURTUNE</h2>
            <h2 className='text-center'>
              {name}님의
              <br /> 기본 정보를 입력해주세요
            </h2>
          </hgroup>
          <span>선택란</span>

          <div className='w-full flex flex-col'>
            <label htmlFor='birthDate'>생년월일</label>
            <input
              type='date'
              id='birthDate'
              className='mt-2 rounded-md w-full px-5 py-2 text-zinc-800 text-center'
              placeholder='생년월일:'
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
            />
            {errorBirthDate.trim().length > 0 && (
              <span className='mt-1 h-8 text-sm flex items-center'>{errorBirthDate}</span>
            )}
          </div>

          <div className='w-full flex flex-col'>
            <label htmlFor='birthTime'>태어난 시간</label>
            <select
              className='mt-2 rounded-md w-full px-5 py-2.5 text-zinc-800 text-center'
              onChange={(e) => setBirthTime(e.target.value)}
              id='birthTime'
            >
              <option value='모름'>태어난 시간 모름</option>
              <option value='자시'>밤 11시 30분 ~ 새벽 1시 30분</option>
              <option value='축시'>새벽 1시 30분 ~ 새벽 3시 30분</option>
              <option value='인시'>새벽 3시 30분 ~ 새벽 5시 30분</option>
              <option value='묘시'>새벽 5시 30분 ~ 오전 7시 30분</option>
              <option value='진시'>오전 7시 30분 ~ 오전 9시 30분</option>
              <option value='사시'>오전 9시 30분 ~ 오전 11시 30분</option>
              <option value='오시'>오전 11시 30분 ~ 오후 1시 30분</option>
              <option value='미시'>오후 1시 30분 ~ 오후 3시 30분</option>
              <option value='신시'>오후 3시 30분 ~ 오후 5시 30분</option>
              <option value='유시'>오후 5시 30분 ~ 저녁 7시 30분</option>
              <option value='술시'>저녁 7시 30분 ~ 밤 9시 30분</option>
              <option value='해시'>밤 9시 30분 ~ 밤 11시 30분</option>
            </select>
          </div>

          <div className='w-full flex justify-evenly'>
            <input
              type='radio'
              id='solar'
              name='solar'
              value='양력'
              checked={isSolar}
              className='hidden'
              onChange={() => {
                setIsSolar(true);
              }}
            />
            <input
              type='radio'
              id='lunar'
              name='solar'
              value='음력'
              checked={!isSolar}
              className='hidden'
              onChange={() => {
                setIsSolar(false);
              }}
            />

            <label htmlFor='solar' className='flex items-center cursor-pointer'>
              <div
                className={`h-8 w-8 rounded-full flex2 text-zinc-800 duration-200 ${
                  isSolar ? 'bg-blue-300' : 'bg-white'
                }`}
              >
                <MdSunny />
              </div>
              <span className='ml-2'>양력</span>
            </label>
            <label htmlFor='lunar' className='flex items-center cursor-pointer'>
              <div
                className={`h-8 w-8 rounded-full flex2 text-zinc-800 duration-200  ${
                  !isSolar ? 'bg-blue-300' : 'bg-white'
                }`}
              >
                <FaMoon />
              </div>
              <span className='ml-2'>음력</span>
            </label>
          </div>

          <div className='w-full flex gap-5 text-zinc-800'>
            <button
              className='w-72 py-1 bg-white rounded-md'
              onClick={() => {
                setFlipped(false);
                setErrorBirthDate('');
              }}
            >
              Back
            </button>
            <button className='w-72 py-1 bg-white rounded-md' onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
