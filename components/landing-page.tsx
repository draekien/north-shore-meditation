import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpenText, Brain, Coffee, Heart, Leaf, Palette, Sun } from 'lucide-react';
import Image from 'next/image';

export function LandingPageComponent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Serene meditation background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-amber-600 opacity-5"></div>
        <div className="relative z-20 text-center text-yellow-900">
          <h1 className="text-5xl font-bold mb-4">The Heaven of Kingdom is Within</h1>
          <p className="text-xl mb-8">Discover the power of transcendental meditation®</p>
          <Button className="font-semibold text-lg px-8 py-3" size="lg">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-primary">
            Why choose Transcendental Meditation®
          </h2>
          <div className="flex flex-wrap gap-8 justify-around">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-primary" />,
                title: 'Find inner peace and happiness',
                description:
                  'The regular practice of TM is a proven natural and effective approach to increasing happiness',
              },
              { icon: <Sun className="w-10 h-10 text-amber-400" />, title: 'Develop resilience', description: '' },
              { icon: <Heart className="w-10 h-10 text-rose-400" />, title: 'Improve relationships', description: '' },
              {
                icon: <Coffee className="w-10 h-10 text-neutral-500" />,
                title: 'Reduce stress and anxiety',
                description: '',
              },
              {
                icon: <Palette className="w-10 h-10 text-purple-500" />,
                title: 'Widen your creativity',
                description: '',
              },
              {
                icon: <BookOpenText className="w-10 h-10 text-blue-500" />,
                title: 'Excel at academics',
                description: '',
              },
              { icon: <Brain className="w-10 h-10 text-indigo-500" />, title: 'Better mental health', description: '' },
            ].map((benefit, index) => (
              <div key={index} className=" w-80">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/grace.jpg"
                alt="Meditation instructor"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4 text-primary">Begin your journey with Grace</h2>
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
      <section className="py-16 bg-emerald-50 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Yourself?</h2>
          <p className="text-xl mb-8">Book your personalized transcendental meditation session today.</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-neutral-800" />
              <Button className="bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-50 dark:hover:bg-emerald-100 font-semibold">
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
