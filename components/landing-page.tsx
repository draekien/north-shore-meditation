"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookOpenText, Brain, Coffee, Heart, Leaf, Palette, Sparkles, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs: { title: string; href: string; description: string }[] = [
  {
    title: "Private Sessions",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Group Sessions",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Corporate Sessions",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-700">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-600">
            North Shore Transcendental Meditation®
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Transcendental Meditation®</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/tm">
                          <Sparkles className="w-6 h-6 text-amber-400" />
                          <div className="mb-2 mt-4 text-lg font-medium">Effortlessly Yours</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Easy to learn and enjoyable to practice. Experience the peacefulness of your awareness and get to know your innermost self.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <NavigationMenuListItem href="/tm/your-choice" title="It's your choice">
                      Get to know the reasons you should consider TM.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="/tm/your-way" title="It's personal">
                      Each person experiences TM in a unique way. Discover yours.
                    </NavigationMenuListItem>
                    <NavigationMenuListItem href="/tm/your-community" title="It's for everyone">
                      Discover how TM is helping to improve the lives of ADHD children.
                    </NavigationMenuListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {programs.map((component) => (
                      <NavigationMenuListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </NavigationMenuListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Book Session</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <Image src="/hero.jpg" alt="Serene meditation background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-amber-600 opacity-5"></div>
        <div className="relative z-20 text-center text-yellow-900">
          <h1 className="text-5xl font-bold mb-4">The Heaven of Kingdom is Within</h1>
          <p className="text-xl mb-8">Discover the power of transcendental meditation®</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-3">Start Your Journey</Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-emerald-600">Why choose Transcendental Meditation®</h2>
          <div className="flex flex-wrap gap-8 justify-around">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-emerald-500" />,
                title: "Find inner peace and happiness",
                description: "The regular practice of TM is a proven natural and effective approach to increasing happiness",
              },
              { icon: <Sun className="w-10 h-10 text-amber-400" />, title: "Develop resilience", description: "" },
              { icon: <Heart className="w-10 h-10 text-rose-400" />, title: "Improve relationships", description: "" },
              { icon: <Coffee className="w-10 h-10 text-neutral-500" />, title: "Reduce stress and anxiety", description: "" },
              { icon: <Palette className="w-10 h-10 text-purple-500" />, title: "Widen your creativity", description: "" },
              { icon: <BookOpenText className="w-10 h-10 text-blue-500" />, title: "Excel at academics", description: "" },
              { icon: <Brain className="w-10 h-10 text-indigo-500" />, title: "Better mental health", description: "" },
            ].map((benefit, index) => (
              <div key={index} className=" w-80">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-600 text-center">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/grace.jpg" alt="Meditation instructor" width={600} height={400} className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4 text-emerald-600">Begin your journey with Grace</h2>
              <p className="text-neutral-700 mb-4">
                A customer once told Grace that &quot;meditation is a very personal thing&quot;. We understand that. We are attentive to your needs in understanding and developing
                the habits for this simple and natural technique.
              </p>
              <p className="text-neutral-700">Join us in our serene, cozy studio and discover the transformative power of meditation for your personal and professional growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-emerald-50 text-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Yourself?</h2>
          <p className="text-xl mb-8">Book your personalized transcendental meditation session today.</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-neutral-800" />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Get Started</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">North Shore Transcendental Meditation</h3>
              <p className="text-emerald-100">The heaven of kingdom is within</p>
            </div>
            <div className="text-center md:text-right">
              <p>133 Longueville Rd, Lane Cove NSW 2066</p>
              <p>
                Email: <Link href="mailto:tm@northshoremeditation.com">tm@northshoremeditation.com</Link>
              </p>
              <p>
                Phone: <Link href="tel:+61424450578">+61 424 450 578</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
