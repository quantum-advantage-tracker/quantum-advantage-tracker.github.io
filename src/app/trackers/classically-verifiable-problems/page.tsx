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
import type { CircuitInstances } from '@/types/circuitInstances';
import type { CVPSubmission } from '@/types/submissions';
import { formatDate, sortSubmissions } from '@/utils';
import type { Metadata } from 'next';
import circuitInstances from '../../../../data/classically-verifiable-problems/circuit-instances.json' assert { type: 'json' };
import submissions from '../../../../data/classically-verifiable-problems/submissions.json' assert { type: 'json' };
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Classically verifiable problems',
};

export default async function TrackersCVP() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Classically verifiable problems 🗝️</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions must demonstrate quantum advantage by scoring solutions
        against known answers or efficiently checkable witnesses.
      </h4>

      <div className="mx-auto mb-16 flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-instances"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit instances <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submission-path-3-classically-verifiable-problems.yml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open submission ticket <GithubIcon />
          </a>
        </Button>
      </div>

      <div className="text-left">
        <SubmissionsTable
          submissions={submissions}
          circuitInstances={circuitInstances}
        />
      </div>

      <ParticipateSection />
    </div>
  );
}

export function SubmissionsTable(props: {
  submissions: CVPSubmission[];
  circuitInstances: CircuitInstances;
}) {
  const { submissions, circuitInstances } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Circuit</TableHead>
          <TableHead>Qubits</TableHead>
          <TableHead>Gates</TableHead>
          <TableHead>Value</TableHead>
          <TableHead title="Runtime (seconds)">Runtime (sec)</TableHead>
          <TableHead>Compute resources</TableHead>
          <TableHead>Institution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.length === 0 ? (
          <TableBodyEmpty />
        ) : (
          sortSubmissions(submissions).map((submission, index) => {
            const circuitInstance = circuitInstances[submission.circuit];

            return (
              <TableRow key={`submission-cvp-${index}`}>
                <TableCell>
                  <time
                    dateTime={submission.createdAt}
                    title={submission.createdAt}
                  >
                    {formatDate(submission.createdAt)}
                  </time>
                </TableCell>
                <TableCell className="whitespace-normal">
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
                    href={`https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-instances/${submission.circuit}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link-foreground hover:underline"
                  >
                    {submission.circuit}
                  </a>
                </TableCell>
                <TableCell className="whitespace-normal">
                  {circuitInstance.qubits}
                </TableCell>
                <TableCell className="whitespace-normal">
                  {circuitInstance.gates}
                </TableCell>
                <TableCell>{submission.value}</TableCell>
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
            );
          })
        )}
      </TableBody>
    </Table>
  );
}

function TableBodyEmpty() {
  return (
    <TableRow>
      <TableCell colSpan={8}>There are no submissions yet.</TableCell>
    </TableRow>
  );
}
