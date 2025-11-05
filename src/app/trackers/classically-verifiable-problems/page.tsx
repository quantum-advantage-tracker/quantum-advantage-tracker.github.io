import type { Metadata } from 'next';
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Classically verifiable problems',
};

export default async function TrackersCVP() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Classically verifiable problems 🗝️</h3>
      <h4 className="m-auto max-w-xl">
        Submissions must demonstrate quantum advantage by scoring solutions
        against known answers or efficiently checkable witnesses.
      </h4>

      <div>LINKS</div>

      <div className="text-left">SUBMISSIONS TABLE</div>

      <ParticipateSection />
    </div>
  );
}
