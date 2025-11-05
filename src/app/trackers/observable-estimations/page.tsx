import type { Metadata } from 'next';
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Observable estimations',
};

export default async function TrackersOE() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Observable estimations 📊</h3>
      <h4 className="m-auto max-w-xl">
        Submissions in this tracker report expectation values for observables
        alongside rigorous error bars. Validation requires mathematically
        provable confidence intervals over the reported value.
      </h4>

      <div>LINKS</div>

      <div className="text-left">SUBMISSIONS TABLE</div>

      <ParticipateSection />
    </div>
  );
}
