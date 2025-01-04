'use client';

import { GiftCard, useVisibleInDecember } from './gift-card';

const ChristmasGiftCard = () => {
  const visible = useVisibleInDecember();

  return <GiftCard visible={visible} />;
};

export { ChristmasGiftCard };
