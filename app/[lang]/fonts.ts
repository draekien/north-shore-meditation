import { Ma_Shan_Zheng, Noto_Sans_SC } from 'next/font/google';
import localFont from 'next/font/local';

const maShanZheng = Ma_Shan_Zheng({
  display: 'swap',
  variable: '--font-ma-shan-zheng',
  weight: '400',
  subsets: ['latin'],
});

const notoSans = Noto_Sans_SC({
  display: 'swap',
  variable: '--font-noto-sans',
  weight: 'variable',
  subsets: ['latin'],
});

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export { geistSans, maShanZheng, notoSans };
