import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import circuitModels from '../../../../data/classically-verifiable-problems/circuit-models.json' assert { type: 'json' };
import submissions from '../../../../data/classically-verifiable-problems/submissions.json' assert { type: 'json' };
import { SubmissionsTable } from './SubmissionsTable';

export const metadata: Metadata = {
  title: 'Classically verifiable problems',
};

export default async function TrackersCVP() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl">Classically verifiable problems 🗝️</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions must demonstrate quantum advantage by scoring solutions against known answers or
        efficiently checkable witnesses.
      </h4>

      <div className="mx-auto flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-models"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit instances <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=03-submission-path-classically-verifiable-problems.yml"
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
