import teacherImage from '@/public/grace.jpg';
import Image from 'next/image';

export type LearnFromGraceSectionProps = {
  title: string;
  paragraphs: string[];
};

export default function LearnFromGraceSection({ title, paragraphs }: LearnFromGraceSectionProps) {
  return (
    <section className="bg-neutral-100/30 py-16 backdrop:blur-3xl dark:bg-neutral-900/30">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Image
            src={teacherImage}
            alt="Meditation instructor"
            className="mb-8 rounded-lg shadow-md md:mb-0 md:w-1/3"
            height={600}
            placeholder="blur"
          />
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-4 text-3xl font-semibold text-primary">{title}</h2>
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
