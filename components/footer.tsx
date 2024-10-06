import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-emerald-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold">North Shore Transcendental Meditation</h3>
          <p className="text-emerald-50">The heaven of kingdom is within</p>
        </div>
        <div className="text-center md:text-right">
          <p>133 Longueville Rd, Lane Cove NSW 2066</p>
          <p>
            Email: <Link href="mailto:tm@northshoremeditation.com">tm@northshoremeditation.com</Link>
          </p>
          <p>
            Phone: <Link href="tel:+61424450578">+61 424 450 578</Link>{' '}
          </p>
        </div>
      </div>
    </div>
  </footer>
);
