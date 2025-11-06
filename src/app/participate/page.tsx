import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Participate',
};

export default function Participate() {
  return (
    <div>
      <div className="bg-hero-gradient">
        <div className="px-6 py-20 text-center">
          <h1 className="mx-auto max-w-lg text-5xl">
            Submit your quantum advantage candidate
          </h1>
          <h2 className="mx-auto my-6 max-w-xl">
            Learn how to contribute a new advantage candidate from the list of
            provided problem instances or your own circuit specs. All are
            welcome to participate.
          </h2>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-7xl px-6"></div>
      </div>
    </div>
  );
}
