import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import circuitModels from '../../../../data/classically-verifiable-problems/circuit-models.json' with { type: 'json' };
import submissions from '../../../../data/classically-verifiable-problems/submissions.json' with { type: 'json' };
import { SubmissionsTable } from './SubmissionsTable';

export const metadata: Metadata = {
  title: 'Classically verifiable problems',
};

export default async function TrackersCVP() {
  return (
    <>
      <div className="bg-hero-gradient">
        <div className="flex flex-col gap-6 px-6 py-16 text-center">
          <h1 className="mx-auto max-w-xl text-3xl">Classically verifiable problems 🗝️</h1>
          <h2 className="mx-auto max-w-xl">
            Submissions must demonstrate quantum advantage by scoring solutions against known
            answers or efficiently checkable witnesses.
          </h2>

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
        </div>
      </div>

      <div className="mx-auto max-w-384 px-6 pt-8">
        <SubmissionsTable submissions={submissions} circuitModels={circuitModels} />
      </div>
    </>
  );
}
