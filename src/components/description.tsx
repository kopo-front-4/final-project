import { Fortune } from '../types';

interface DescriptionProps {
  hover: number;
  fortunes: Array<Fortune>;
}

export const Description: React.FC<DescriptionProps> = ({ hover, fortunes }) => {
  return (
    <div>
      {fortunes.map((item, idx) => {
        return (
          <article
            key={item.title}
            className={`
            descr glass
            w-[500px] bg-slate-300 flex flex-col gap-5

            ${hover == idx ? 'duration-300 opacity-100' : 'duration-300 opacity-0 delay-200'}

              ${hover == -1 ? 'delay-300' : 'delay-0'}
              
              `}
          >
            <h2 className='text-2xl text-zinc-800 pl-2'>{item.title}</h2>
            <div className='w-full bg-black/70'>
              <div className='bg-rose-300 p-2 text-right text-zinc-800 ' style={{ width: item.score + '%' }}>
                {item.score}%
              </div>
            </div>
            <p className='text-base text-zinc-800 mt-5 leading-8'>{item.message}</p>
          </article>
        );
      })}
    </div>
  );
};
