import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Locale } from '@/lib/constants';
import teacherImage from '@/public/grace.jpg';
import heroImage from '@/public/hero.jpg';
import { BookOpenText, Brain, Coffee, Heart, Leaf, Palette, Sun } from 'lucide-react';
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
          <h1 className="mb-4 text-5xl font-bold">{dict.tagline}</h1>
          <p className="mb-8 text-xl">Discover the power of transcendental meditation®</p>
          <Button className="px-8 py-3 text-lg font-semibold" size="lg">
            {dict.callToAction}
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold text-primary">
            Why choose Transcendental Meditation®
          </h2>
          <div className="flex flex-wrap justify-around gap-8">
            {[
              {
                icon: <Leaf className="h-10 w-10 text-sky-500" />,
              },
              {
                icon: <Sun className="h-10 w-10 text-emerald-600" />,
              },
              {
                icon: <Heart className="h-10 w-10 text-pink-500" />,
              },
              {
                icon: <Coffee className="h-10 w-10 text-teal-400" />,
              },
              {
                icon: <Palette className="h-10 w-10 text-purple-500" />,
              },
              {
                icon: <BookOpenText className="h-10 w-10 text-indigo-600" />,
              },
              {
                icon: <Brain className="h-10 w-10 text-rose-600" />,
              },
            ].map((benefit, index) => (
              <div key={index} className="w-80">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="mb-2 text-center text-xl font-semibold text-primary">
                  {dict.whyTmSection[index].title}
                </h3>
                <p>{dict.whyTmSection[index].description}</p>
              </div>
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
