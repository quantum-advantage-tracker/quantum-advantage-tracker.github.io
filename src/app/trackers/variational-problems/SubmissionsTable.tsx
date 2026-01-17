'use client';

import { RuntimeSeconds } from '@/components/RuntimeSeconds';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Hamiltonians } from '@/types/hamiltonians';
import type { VPSubmission } from '@/types/submissions';
import { flattenInstances, formatDate, getHamiltonianUrl, sortSubmissions } from '@/utils';
import { ArrowDownIcon, RotateCcwIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

export function SubmissionsTable(props: {
  submissions: VPSubmission[];
  hamiltonians: Hamiltonians;
}) {
  const { submissions, hamiltonians } = props;
  const hamiltonianInstances = useMemo(() => flattenInstances(hamiltonians), [hamiltonians]);
  const hamiltonianOptions = useMemo(() => Object.keys(hamiltonians), [hamiltonians]);

  const [hamiltonianFilter, setHamiltonianFilter] = useState(() => {
    return hamiltonianOptions.length === 1 ? hamiltonianOptions[0] : 'all';
  });

  const [instanceFilter, setInstanceFilter] = useState(() => {
    const initialHamiltonian = hamiltonianOptions.length === 1 ? hamiltonianOptions[0] : 'all';
    const initialInstances =
      initialHamiltonian === 'all'
        ? hamiltonianInstances
        : hamiltonians[initialHamiltonian]?.instances || [];
    return initialInstances.length === 1 ? initialInstances[0].id : 'all';
  });

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const instance = hamiltonianInstances.find((inst) => inst.id === submission.hamiltonian);
      if (!instance) return false;

      const matchesHamiltonian = hamiltonianFilter === 'all' || instance.type === hamiltonianFilter;
      const matchesInstance = instanceFilter === 'all' || submission.hamiltonian === instanceFilter;

      return matchesHamiltonian && matchesInstance;
    });
  }, [submissions, hamiltonianInstances, hamiltonianFilter, instanceFilter]);

  const instanceOptions = useMemo(() => {
    if (hamiltonianFilter === 'all') {
      return hamiltonianInstances;
    }
    const filteredInstances = hamiltonians[hamiltonianFilter]?.instances || [];
    return filteredInstances.map((instance) => ({ ...instance, type: hamiltonianFilter }));
  }, [hamiltonianInstances, hamiltonians, hamiltonianFilter]);

  const resetFilters = () => {
    const newHamiltonian = hamiltonianOptions.length === 1 ? hamiltonianOptions[0] : 'all';
    setHamiltonianFilter(newHamiltonian);

    const newInstances =
      newHamiltonian === 'all'
        ? hamiltonianInstances
        : hamiltonians[newHamiltonian]?.instances || [];
    setInstanceFilter(newInstances.length === 1 ? newInstances[0].id : 'all');
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 pb-4">
        <Select
          value={hamiltonianFilter === 'all' ? '' : hamiltonianFilter}
          onValueChange={(value) => {
            setHamiltonianFilter(value);

            const newInstances =
              value === 'all' ? hamiltonianInstances : hamiltonians[value]?.instances || [];
            if (newInstances.length === 1) {
              setInstanceFilter(newInstances[0].id);
            } else {
              setInstanceFilter('all');
            }
          }}
        >
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a hamiltonian" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Hamiltonians</SelectLabel>
              {hamiltonianOptions.map((hamiltonian) => (
                <SelectItem key={hamiltonian} value={hamiltonian}>
                  {hamiltonian}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          value={instanceFilter === 'all' ? '' : instanceFilter}
          onValueChange={setInstanceFilter}
          disabled={hamiltonianFilter === 'all'}
        >
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a hamiltonian instance" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Hamiltonian instances</SelectLabel>
              {instanceOptions.map((instance) => (
                <SelectItem key={instance.id} value={instance.id}>
                  {instance.id.replace(`${instance.type}_`, '')}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button size="lg" variant="ghost" onClick={resetFilters}>
          Reset <RotateCcwIcon />
        </Button>
      </div>

      <Table className="min-w-330 table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-26">
              Date <ArrowDownIcon size={16} className="float-end mt-0.5" />
            </TableHead>
            <TableHead className="w-64 min-w-64">Name / Institutions</TableHead>
            <TableHead className="w-36">Method</TableHead>
            <TableHead className="w-36">Hamiltonian</TableHead>
            <TableHead className="w-18">Qubits</TableHead>
            <TableHead className="w-18">Gates</TableHead>
            <TableHead className="w-48">
              Energy (Eh)
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
          {filteredSubmissions.length === 0 ? (
            <TableBodyEmpty />
          ) : (
            sortSubmissions(filteredSubmissions).map((submission, index) => {
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
                      <span className="font-semibold text-green-600">By:</span>{' '}
                      <span>{submission.institutions}</span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-normal">{submission.method}</TableCell>
                  <TableCell className="wrap-break-word whitespace-normal">
                    <a
                      href={getHamiltonianUrl(hamiltonianInstance)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link-foreground hover:underline"
                    >
                      {submission.hamiltonian}
                    </a>
                  </TableCell>
                  <TableCell>{submission.qubits}</TableCell>
                  <TableCell>{submission.gates}</TableCell>
                  <TableCell className="wrap-break-word whitespace-normal">
                    <div>{submission.energy}</div>
                    <div>
                      [{submission.errorBoundHigh || 'N/A'}, {submission.errorBoundLow || 'N/A'}]
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <span title="Quantum">Q</span>:{' '}
                      <RuntimeSeconds value={submission.runtimeQuantum} />
                    </div>
                    <div>
                      <span title="Classical">C</span>:{' '}
                      <RuntimeSeconds value={submission.runtimeClassical} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-normal">
                    <div>
                      <span title="Quantum">Q</span>: {submission.computeResourcesQuantum || '-'}
                    </div>
                    <div>
                      <span title="Classical">C</span>:{' '}
                      {submission.computeResourcesClassical || '-'}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function TableBodyEmpty() {
  return (
    <TableRow>
      <TableCell colSpan={8}>There are no submissions yet.</TableCell>
    </TableRow>
  );
}
