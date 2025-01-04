'use client';

import giftCardSvg from '@/assets/undraw_gifts_0twc.svg';
import Image from 'next/image';
import { GiftCard, useVisibleInDecember } from './gift-card';

const EverydayGiftCard = () => {
  const visible = !useVisibleInDecember();

  return (
    <GiftCard visible={visible} title="Gift the Gift of TM">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Image src={giftCardSvg} alt="" width={300} />
        <div className="flex flex-col text-left">
          <span className="text-secondary">Looking for a gift that will last a lifetime?</span>
          <span>Call us to find out how you can gift your loved ones</span>
          <em className="text-secondary">the simplest technique</em>
          <span>that will benefit all aspects of their life</span>
        </div>
      </div>
    </GiftCard>
  );
};

export { EverydayGiftCard };
