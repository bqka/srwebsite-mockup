import { info } from '@/public/constants/index';
import Stats from './Stats';
import { div, h2 } from 'framer-motion/client';
import styles, { layout } from '@/styles/styles';

export interface InfoType {
  id: string;
  title: string;
  content: string;
  classes: string;
}

const Info = () => {
  return (
    <section className={`text-white ${styles.boxWidth}`}>
      {info.map((item: InfoType, index: number) => (
        <div className={`flex ${item.id === 'info-1' ? 'flex-row' : `flex-row-reverse`}`}>
          <div className={`w-[520px] flex flex-col gap-2`}>
            <h2 className="text-[60px] font-semibold text-gradient font-pixel tracking-wider">{item.title}</h2>
            <p className={`text-[24px] text-dimWhite leading-[24px] font-pixel`}>{item.content}</p>
            {item.title === "About" ? <Stats /> : <></>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Info;
