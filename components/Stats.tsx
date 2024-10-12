import React from 'react'
import { stats } from '@/public/constants';

export interface StatType {
  id: string;
  data: string;
  title: string;
}

const Stats = () => {
  return (
    <div className='flex flex-row gap-6'>
        {stats.map((item: StatType, index: number) => (
        <div key={item.id} className='flex flex-row justify-center items-center mt-4'>
          <h4 className='font-pixel font-semibold xs:text-[40px] text-[40px] xs:leading-[53px] leading-[43px] text-white'>
            {item.data}
          </h4>
          <p className='font-pixel xs:text-[20px] text-[28px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Stats