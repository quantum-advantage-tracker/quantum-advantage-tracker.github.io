import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GithubIcon } from '@/icons';
import type { OESubmission } from '@/types/submissions';
import { formatDate } from '@/utils';
import type { Metadata } from 'next';
import submissions from '../../../../data/observable-estimations/submissions.json' assert { type: 'json' };
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Observable estimations',
};

export default async function TrackersOE() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Observable estimations 📊</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions in this tracker report expectation values for observables
        alongside rigorous error bars. Validation requires mathematically
        provable confidence intervals over the reported value.
      </h4>

      <div className="mx-auto mb-16 flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/observable-estimations/circuit-instances"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit instances <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submission-path-1-observable-estimations.yml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open submission ticket <GithubIcon />
          </a>
        </Button>
      </div>

      <div className="text-left">
        <SubmissionsTable submissions={submissions} />
      </div>

      <ParticipateSection />
    </div>
  );
}

export function SubmissionsTable(props: { submissions: OESubmission[] }) {
  const { submissions } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Circuit</TableHead>
          <TableHead title="Expectation value [upper, lower bound]">
            Exp. value [upper, lower bound]
          </TableHead>
          <TableHead title="Runtime (seconds)">Runtime (sec)</TableHead>
          <TableHead>Compute resources</TableHead>
          <TableHead>Institution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8}>There are no submissions yet.</TableCell>
          </TableRow>
        ) : (
          submissions.map((submission, index) => (
            <TableRow key={`submission-oe-${index}`}>
              <TableCell>{formatDate(submission.createdAt)}</TableCell>
              <TableCell>
                <a
                  href={submission.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-foreground hover:underline"
                >
                  {submission.name}
                </a>
              </TableCell>
              <TableCell className="whitespace-normal">
                {submission.method}
              </TableCell>
              <TableCell className="whitespace-normal">
                <a
                  href={`https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/observable-estimations/circuit-instances/${submission.circuit}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-foreground hover:underline"
                >
                  {submission.circuit}
                </a>
              </TableCell>
              <TableCell>
                <div>{submission.observableValue}</div>
                <div>
                  [{submission.errorBoundHigh || 'N/A'},{' '}
                  {submission.errorBoundLow || 'N/A'}]
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <span title="Quantum">Q</span>:{' '}
                  {submission.runtimeQuantum || '-'}
                </div>
                <div>
                  <span title="Classical">C</span>:{' '}
                  {submission.runtimeClassical || '-'}
                </div>
              </TableCell>
              <TableCell className="whitespace-normal">
                <div>
                  <span title="Quantum">Q</span>:{' '}
                  {submission.computeResourcesQuantum || '-'}
                </div>
                <div>
                  <span title="Classical">C</span>:{' '}
                  {submission.computeResourcesClassical || '-'}
                </div>
              </TableCell>
              <TableCell className="whitespace-normal">
                {submission.institutions}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
