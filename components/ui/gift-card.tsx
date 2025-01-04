import { useMemo, type ReactNode } from 'react';
import ButtonLink from './button-link';
import { Card, CardContent, CardHeader, CardTitle } from './card';

const useVisibleInDecember = () =>
  useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();
    return currentMonth === 11 && currentDate >= 10 && currentDate <= 24;
  }, []);

type GiftCardProps = {
  visible?: boolean;
  title?: string;
  children?: ReactNode;
};
const GiftCard = ({ visible, title = '🎁 Give the Gift of TM 🎁', children }: GiftCardProps) => {
  if (!visible) return null;

  return (
    <Card className="relative mt-10 overflow-clip border-0 bg-white/30 backdrop-blur-3xl dark:bg-slate-700/30">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col text-center">
          {children || (
            <>
              <span className="text-secondary">Looking for a last minute gift idea for the holiday season?</span>
              <span>Call us to find out how you can gift your loved ones</span>
              <em className="text-secondary">the simplest technique</em>
              <span>that will benefit all aspects of their life</span>
            </>
          )}
          <small className="mt-10">
            Gift the entire TM Course, or give a gift voucher that contributes to part of the tuition to learn TM at
            North Shore TM centre in Lane Cove NSW Australia
          </small>
        </div>
        <p className="text-center">
          Call
          <ButtonLink href="tel:0424450578" variant="link" className="px-2" prefetch={false}>
            0424 450 578
          </ButtonLink>
          or email
          <ButtonLink href="mailto:tm@northshoremeditation.au" variant="link" className="px-2" prefetch={false}>
            tm@northshoremeditation.au
          </ButtonLink>
          for more details
        </p>
      </CardContent>
    </Card>
  );
};

export { GiftCard, useVisibleInDecember };
export type { GiftCardProps };
