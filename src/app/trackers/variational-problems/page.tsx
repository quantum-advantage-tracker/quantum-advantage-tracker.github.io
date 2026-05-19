import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import hamiltonians from '../../../../data/variational-problems/hamiltonians.json' with { type: 'json' };
import submissions from '../../../../data/variational-problems/submissions.json' with { type: 'json' };
import { SubmissionsTable } from './SubmissionsTable';

export const metadata: Metadata = {
  title: 'Variational problems',
};

export default async function TrackersVP() {
  return (
    <>
      <div className="bg-hero-gradient">
        <div className="flex flex-col gap-6 px-6 py-16 text-center">
          <h1 className="mx-auto max-w-xl text-3xl">Variational problems 🌀</h1>
          <h2 className="mx-auto max-w-xl">
            Submissions must bound the ground-state energy from above. Verified entries include
            evidence that the ansatz and optimization respect the variational principle.
          </h2>

          <div className="mx-auto flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/variational-problems/hamiltonians"
                target="_blank"
                rel="noopener noreferrer"
              >
                View hamiltonians <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=02-submission-path-variational-problems.yml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open submission ticket <GithubIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-384 px-6 pt-8">
        <SubmissionsTable submissions={submissions} hamiltonians={hamiltonians} />
      </div>
    </>
  );
}
