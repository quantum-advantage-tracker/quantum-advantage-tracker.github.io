import type { Metadata } from 'next';
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Variational problems',
};

export default async function TrackersVP() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Variational problems 🌀</h3>
      <h4 className="m-auto max-w-xl">
        Submissions must bound the ground-state energy from above. Verified
        entries include evidence that the ansatz and optimization respect the
        variational principle.
      </h4>

      <div>LINKS</div>

      <div className="text-left">SUBMISSIONS TABLE</div>

      <ParticipateSection />
    </div>
  );
}
