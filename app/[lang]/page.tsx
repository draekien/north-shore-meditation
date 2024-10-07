import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import type { Locale } from '@/lib/constants';
import { cn } from '@/lib/utils';
import academicsSvg from '@/public/academics.svg';
import creativeSvg from '@/public/creative.svg';
import dreamerSvg from '@/public/dreamer.svg';
import teacherImage from '@/public/grace.jpg';
import heroImage from '@/public/hero.jpg';
import meditateSvg from '@/public/meditate.svg';
import relationshipSvg from '@/public/relationship.svg';
import relaxSvg from '@/public/relax.svg';
import resilientSvg from '@/public/resilient.svg';
import Image from 'next/image';
import { getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[calc(100vh-80px)] items-center justify-center">
        <Image
          src={heroImage}
          alt="Serene meditation background"
          style={{
            objectFit: 'cover',
          }}
          className="absolute inset-0 z-0"
          placeholder="blur"
          fill
        />
        <div className="absolute inset-0 bg-amber-600 opacity-5"></div>
        <div className="relative z-20 text-center text-yellow-900">
          <h1 className="mb-4">{dict.tagline}</h1>
          <p className="mb-8 text-xl">Discover the power of transcendental meditation®</p>
          <Button className="px-8 py-3 text-lg font-semibold" size="lg">
            {dict.callToAction}
          </Button>
        </div>
      </section>

      {/* Benefits Section */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-primary">Why choose Transcendental Meditation®</h2>
          <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                color: 'text-sky-500',
                bg: 'bg-sky-500',
                src: dreamerSvg,
              },
              {
                color: 'text-emerald-600',
                bg: 'bg-emerald-600',
                src: resilientSvg,
              },
              {
                color: 'text-pink-500',
                bg: 'bg-pink-500',
                src: relationshipSvg,
              },
              {
                src: relaxSvg,
                bg: 'bg-teal-400',
                color: 'text-teal-400',
              },
              {
                src: creativeSvg,
                bg: 'bg-purple-500',
                color: 'text-purple-500',
              },
              {
                src: academicsSvg,
                bg: 'bg-indigo-600',
                color: 'text-indigo-600',
              },
              {
                src: meditateSvg,
                bg: 'bg-rose-600',
                color: 'text-rose-600',
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={cn(
                  `row-span-1 ${index === 3 || index === 6 ? 'md:col-span-2' : ''}`,
                  'border-0 bg-white/30 backdrop:blur-3xl'
                )}
              >
                <CardHeader>
                  <Image src={benefit.src} alt="" style={{ objectFit: 'contain' }} />
                </CardHeader>
                <CardContent>
                  <h4 className={cn(`${benefit.color}`)}>{dict.whyTmSection[index].title}</h4>
                  <p> {dict.whyTmSection[index].description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-neutral-100 py-16 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <Image src={teacherImage} alt="Meditation instructor" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="mb-4 text-3xl font-semibold text-primary">Begin your journey with Grace</h2>
              <p className="mb-4">
                A customer once told Grace that &quot;meditation is a very personal thing&quot;. We understand that. We
                are attentive to your needs in understanding and developing the habits for this simple and natural
                technique.
              </p>
              <p>
                Join us in our serene, cozy studio and discover the transformative power of meditation for your personal
                and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-emerald-50 py-16 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Ready to Transform Yourself?</h2>
          <p className="mb-8 text-xl">Book your personalized transcendental meditation session today.</p>
          <form className="mx-auto max-w-md">
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-neutral-800" />
              <Button className="bg-emerald-800 font-semibold hover:bg-emerald-700 dark:bg-emerald-50 dark:hover:bg-emerald-100">
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
