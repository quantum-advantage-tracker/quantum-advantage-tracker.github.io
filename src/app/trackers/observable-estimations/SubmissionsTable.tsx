import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CircuitModels } from '@/types/circuitModels';
import type { OESubmission } from '@/types/submissions';
import { flattenInstances, formatDate, getCircuitInstanceUrl, sortSubmissions } from '@/utils';
import { ArrowDownIcon } from 'lucide-react';

export function SubmissionsTable(props: {
  submissions: OESubmission[];
  circuitModels: CircuitModels;
}) {
  const { submissions, circuitModels } = props;
  const circuitInstances = flattenInstances(circuitModels);

  return (
    <Table className="min-w-330 table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-26">
            Date <ArrowDownIcon size={16} className="float-end mt-0.5" />
          </TableHead>
          <TableHead className="w-64 min-w-64">Name / Institutions</TableHead>
          <TableHead className="w-36">Method</TableHead>
          <TableHead className="w-36">Circuit</TableHead>
          <TableHead className="w-18">Qubits</TableHead>
          <TableHead className="w-18">Gates</TableHead>
          <TableHead className="w-48">
            Expectation value
            <br />
            [upper, lower bound]
          </TableHead>
          <TableHead className="w-28">
            Runtime
            <br />
            (seconds)
          </TableHead>
          <TableHead className="w-56">Compute resources</TableHead>
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
                    <span className="text-by-foreground font-semibold">By:</span>{' '}
                    <span>{submission.institutions}</span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-normal">{submission.method}</TableCell>
                <TableCell className="wrap-break-word whitespace-normal">
                  <a
                    href={getCircuitInstanceUrl('observable-estimations', circuitInstance)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link-foreground hover:underline"
                  >
                    {circuitInstance.id}
                  </a>
                </TableCell>
                <TableCell>{circuitInstance.qubits}</TableCell>
                <TableCell>{circuitInstance.gates}</TableCell>
                <TableCell className="wrap-break-word whitespace-normal">
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
