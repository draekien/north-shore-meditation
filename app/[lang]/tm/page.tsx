import type { Locale } from '@/lib/constants';
import { getDictionary } from '../dictionaries';

export default async function Tm({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return <div>{dict.transcendentalMeditation}</div>;
}
