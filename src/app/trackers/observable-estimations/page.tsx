import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import circuitModels from '../../../../data/observable-estimations/circuit-models.json' assert { type: 'json' };
import submissions from '../../../../data/observable-estimations/submissions.json' assert { type: 'json' };
import { SubmissionsTable } from './SubmissionsTable';

export const metadata: Metadata = {
  title: 'Observable estimations',
};

export default async function TrackersOE() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl">Observable estimations 📊</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions in this tracker report expectation values for observables alongside rigorous
        error bars. Validation requires mathematically provable confidence intervals over the
        reported value.
      </h4>

      <div className="mx-auto flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/observable-estimations/circuit-models"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit instances <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=01-submission-path-observable-estimations.yml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open submission ticket <GithubIcon />
          </a>
        </Button>
      </div>

      <div className="mt-14 text-left">
        <SubmissionsTable submissions={submissions} circuitModels={circuitModels} />
      </div>
    </div>
  );
}
