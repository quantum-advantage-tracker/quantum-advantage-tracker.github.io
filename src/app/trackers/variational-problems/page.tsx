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
import type { Hamiltonians } from '@/types/hamiltonians';
import type { VPSubmission } from '@/types/submissions';
import { flattenInstances, formatDate, getHamiltonianUrl, sortSubmissions } from '@/utils';
import { ArrowDownIcon } from 'lucide-react';
import type { Metadata } from 'next';
import hamiltonians from '../../../../data/variational-problems/hamiltonians.json' assert { type: 'json' };
import submissions from '../../../../data/variational-problems/submissions.json' assert { type: 'json' };

export const metadata: Metadata = {
  title: 'Variational problems',
};

export default async function TrackersVP() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl">Variational problems 🌀</h3>
      <h4 className="mx-auto max-w-xl">
        Submissions must bound the ground-state energy from above. Verified entries include evidence
        that the ansatz and optimization respect the variational principle.
      </h4>

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

      <div className="mt-14 text-left">
        <SubmissionsTable submissions={submissions} hamiltonians={hamiltonians} />
      </div>
    </div>
  );
}

export function SubmissionsTable(props: {
  submissions: VPSubmission[];
  hamiltonians: Hamiltonians;
}) {
  const { submissions, hamiltonians } = props;
  const hamiltonianInstances = flattenInstances(hamiltonians);

  return (
    <Table className="min-w-332 table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-28">
            Date <ArrowDownIcon size={16} className="float-end mt-0.5" />
          </TableHead>
          <TableHead className="w-64 min-w-64">Name / Institutions</TableHead>
          <TableHead className="w-36">Method</TableHead>
          <TableHead className="w-36">Hamiltonian</TableHead>
          <TableHead className="w-18">Qubits</TableHead>
          <TableHead className="w-18">Gates</TableHead>
          <TableHead className="w-48">
            <div>Energy (Eh)</div>
            <div>[upper, lower bound]</div>
          </TableHead>
          <TableHead className="w-28">
            <div>Runtime</div>
            <div>(seconds)</div>
          </TableHead>
          <TableHead className="w-56">Compute resources</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.length === 0 ? (
          <TableBodyEmpty />
        ) : (
          sortSubmissions(submissions).map((submission, index) => {
            const hamiltonianInstance = hamiltonianInstances.find(
              (instance) => instance.id === submission.hamiltonian,
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

                  <div className="mt-2">
                    <span className="text-by-foreground font-semibold">By:</span>{' '}
                    <span>{submission.institutions}</span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-normal">{submission.method}</TableCell>
                <TableCell className="break-all whitespace-normal">
                  <a
                    href={getHamiltonianUrl(hamiltonianInstance)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link-foreground hover:underline"
                  >
                    {submission.hamiltonian}
                  </a>
                </TableCell>
                <TableCell className="whitespace-normal">{submission.qubits}</TableCell>
                <TableCell className="whitespace-normal">{submission.gates}</TableCell>
                <TableCell>
                  <div className="break-all whitespace-normal">{submission.energy}</div>
                  <div className="break-all whitespace-normal">
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
