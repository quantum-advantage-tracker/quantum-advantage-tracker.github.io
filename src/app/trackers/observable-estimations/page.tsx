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
import type { CircuitModels } from '@/types/circuitModels';
import type { OESubmission } from '@/types/submissions';
import { flattenInstances, formatDate, getCircuitInstanceUrl, sortSubmissions } from '@/utils';
import { ArrowDownIcon } from 'lucide-react';
import type { Metadata } from 'next';
import circuitModels from '../../../../data/observable-estimations/circuit-models.json' assert { type: 'json' };
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
        Submissions in this tracker report expectation values for observables alongside rigorous
        error bars. Validation requires mathematically provable confidence intervals over the
        reported value.
      </h4>

      <div className="mx-auto mb-16 flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
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

      <div className="text-left">
        <SubmissionsTable submissions={submissions} circuitModels={circuitModels} />
      </div>

      <ParticipateSection />
    </div>
  );
}

export function SubmissionsTable(props: {
  submissions: OESubmission[];
  circuitModels: CircuitModels;
}) {
  const { submissions, circuitModels } = props;
  const circuitInstances = flattenInstances(circuitModels);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Date <ArrowDownIcon size={16} className="float-end mt-0.5" />
          </TableHead>
          <TableHead>Name / Institutions</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Circuit</TableHead>
          <TableHead>Qubits</TableHead>
          <TableHead>Gates</TableHead>
          <TableHead>
            <div>Expectation value</div>
            <div>[upper, lower bound]</div>
          </TableHead>
          <TableHead>
            <div>Runtime</div>
            <div>(seconds)</div>
          </TableHead>
          <TableHead>Compute resources</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.length === 0 ? (
          <TableBodyEmpty />
        ) : (
          sortSubmissions(submissions).map((submission, index) => {
            const circuitInstance = circuitInstances.find(
              (instance) => instance.id === submission.circuit,
            )!;

            return (
              <TableRow key={`submission-oe-${index}`}>
                <TableCell>
                  <time dateTime={submission.createdAt} title={submission.createdAt}>
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

                  <div className="mt-2">
                    <span className="font-semibold">By:</span>{' '}
                    <span>{submission.institutions}</span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-normal">{submission.method}</TableCell>
                <TableCell className="whitespace-normal">
                  <a
                    href={getCircuitInstanceUrl('observable-estimations', circuitInstance)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link-foreground hover:underline"
                  >
                    {circuitInstance.id}
                  </a>
                </TableCell>
                <TableCell className="whitespace-normal">{circuitInstance.qubits}</TableCell>
                <TableCell className="whitespace-normal">{circuitInstance.gates}</TableCell>
                <TableCell>
                  <div>{submission.observableValue}</div>
                  <div>
                    [{submission.errorBoundHigh || 'N/A'}, {submission.errorBoundLow || 'N/A'}]
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <span title="Quantum">Q</span>: {submission.runtimeQuantum || '-'}
                  </div>
                  <div>
                    <span title="Classical">C</span>: {submission.runtimeClassical || '-'}
                  </div>
                </TableCell>
                <TableCell className="whitespace-normal">
                  <div>
                    <span title="Quantum">Q</span>: {submission.computeResourcesQuantum || '-'}
                  </div>
                  <div>
                    <span title="Classical">C</span>: {submission.computeResourcesClassical || '-'}
                  </div>
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
