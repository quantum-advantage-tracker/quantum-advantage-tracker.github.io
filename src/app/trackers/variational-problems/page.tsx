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
import type { VPSubmission } from '@/types/submissions';
import {
  flattenCircuitInstances,
  formatDate,
  getCircuitInstanceUrl,
  sortSubmissions,
} from '@/utils';
import type { Metadata } from 'next';
import circuitModels from '../../../../data/variational-problems/circuit-models.json' assert { type: 'json' };
import submissions from '../../../../data/variational-problems/submissions.json' assert { type: 'json' };
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Variational problems',
};

export default async function TrackersVP() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Variational problems 🌀</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions must bound the ground-state energy from above. Verified entries include evidence
        that the ansatz and optimization respect the variational principle.
      </h4>

      <div className="mx-auto mb-16 flex flex-row flex-wrap justify-center gap-x-6 gap-y-3">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/variational-problems/circuit-instances"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit instances <GithubIcon />
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

      <div className="text-left">
        <SubmissionsTable submissions={submissions} circuitModels={circuitModels} />
      </div>

      <ParticipateSection />
    </div>
  );
}

export function SubmissionsTable(props: {
  submissions: VPSubmission[];
  circuitModels: CircuitModels;
}) {
  const { submissions, circuitModels } = props;
  const circuitInstances = flattenCircuitInstances(circuitModels);

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
          <TableHead>Energy (Eh) [upper, lower bound]</TableHead>
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
            const circuitInstance = circuitInstances.find(
              (instance) => instance.id === submission.circuit,
            )!;

            return (
              <TableRow key={`submission-vp-${index}`}>
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
                </TableCell>
                <TableCell className="whitespace-normal">{submission.method}</TableCell>
                <TableCell className="whitespace-normal">
                  <a
                    href={getCircuitInstanceUrl('variational-problems', circuitInstance)}
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
                  <div>{submission.energy}</div>
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
                <TableCell className="whitespace-normal">{submission.institutions}</TableCell>
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
