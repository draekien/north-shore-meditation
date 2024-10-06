import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import teacherImage from '@/public/grace.jpg';
import heroImage from '@/public/hero.jpg';
import { BookOpenText, Brain, Coffee, Heart, Leaf, Palette, Sun } from 'lucide-react';
import Image from 'next/image';

export function LandingPageComponent() {
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
          <h1 className="mb-4 text-5xl font-bold">The Kingdom of Heaven is Within</h1>
          <p className="mb-8 text-xl">Discover the power of transcendental meditation®</p>
          <Button className="px-8 py-3 text-lg font-semibold" size="lg">
            Start Your Journey
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
                title: 'Discover Inner Peace and Joy',
                description:
                  'Transcendental Meditation helps you tap into a deep sense of calm and inner contentment. By quieting the mind and letting go of external distractions, you can experience a profound state of peace and lasting happiness from within.',
              },
              {
                icon: <Sun className="h-10 w-10 text-emerald-600" />,
                title: 'Build Resilience from Whithin',
                description:
                  "Life's challenges become more manageable when you develop a strong foundation of resilience. Through regular practice of transcendental meditation, you cultivate the mental strength and emotional balance to stay grounded and composed, even in the face of adversity.",
              },
              {
                icon: <Heart className="h-10 w-10 text-pink-500" />,
                title: 'Enhance Your Relationships',
                description:
                  'A calm and centered mind naturally improves the quality of your interactions with others. Transcendental meditation helps reduce reactive tendencies and promotes greater empathy, patience, and understanding, leading to deeper, more fulfilling relationships.',
              },
              {
                icon: <Coffee className="h-10 w-10 text-teal-400" />,
                title: 'Experience Stress and Anxiety Relief',
                description:
                  'In a fast-paced world, stress and anxiety are common challenges. Transcendental meditation offers a scientifically proven way to calm the nervous system, lower cortisol levels, and bring a sense of ease and relaxation into your daily life.',
              },
              {
                icon: <Palette className="h-10 w-10 text-purple-500" />,
                title: 'Expand Your Creative Potential',
                description:
                  'Creativity flourishes when the mind is free from distractions and mental blocks. Transcendental meditation encourages a state of relaxed alertness, allowing ideas to flow more freely and enabling you to tap into your natural creative potential.',
              },
              {
                icon: <BookOpenText className="h-10 w-10 text-indigo-600" />,
                title: 'Achieve Academic Excellence',
                description:
                  'A clear and focused mind is key to excelling in academics. By reducing mental clutter and enhancing cognitive functioning, transcendental meditation sharpens your concentration, improves memory, and boosts your ability to learn and retain information.',
              },
              {
                icon: <Brain className="h-10 w-10 text-rose-600" />,
                title: 'Nurture Mental Health and Well-being',
                description:
                  'Regular practice of transcendental meditation supports better mental health by reducing symptoms of depression, anxiety, and burnout. It fosters emotional stability, self-awareness, and a balanced outlook on life, promoting long-term psychological well-being.',
              },
            ].map((benefit, index) => (
              <div key={index} className="w-80">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="mb-2 text-center text-xl font-semibold text-primary">{benefit.title}</h3>
                <p>{benefit.description}</p>
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
