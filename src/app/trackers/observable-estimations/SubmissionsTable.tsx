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
import type { CircuitModels } from '@/types/circuitModels';
import type { OESubmission } from '@/types/submissions';
import { flattenInstances, formatDate, getCircuitInstanceUrl, sortSubmissions } from '@/utils';
import { ArrowDownIcon, RotateCcwIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

export function SubmissionsTable(props: {
  submissions: OESubmission[];
  circuitModels: CircuitModels;
}) {
  const { submissions, circuitModels } = props;
  const circuitInstances = useMemo(() => flattenInstances(circuitModels), [circuitModels]);
  const modelOptions = useMemo(() => Object.keys(circuitModels), [circuitModels]);

  const [modelFilter, setModelFilter] = useState(() => {
    return modelOptions.length === 1 ? modelOptions[0] : 'all';
  });

  const [instanceFilter, setInstanceFilter] = useState(() => {
    const initialModel = modelOptions.length === 1 ? modelOptions[0] : 'all';
    const initialInstances =
      initialModel === 'all' ? circuitInstances : circuitModels[initialModel]?.instances || [];
    return initialInstances.length === 1 ? initialInstances[0].id : 'all';
  });

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const instance = circuitInstances.find((inst) => inst.id === submission.circuit);
      if (!instance) return false;

      const matchesModel = modelFilter === 'all' || instance.type === modelFilter;
      const matchesInstance = instanceFilter === 'all' || submission.circuit === instanceFilter;

      return matchesModel && matchesInstance;
    });
  }, [submissions, circuitInstances, modelFilter, instanceFilter]);

  const instanceOptions = useMemo(() => {
    if (modelFilter === 'all') {
      return circuitInstances;
    }
    const modelInstances = circuitModels[modelFilter]?.instances || [];
    return modelInstances.map((instance) => ({ ...instance, type: modelFilter }));
  }, [circuitInstances, circuitModels, modelFilter]);

  const resetFilters = () => {
    const newModel = modelOptions.length === 1 ? modelOptions[0] : 'all';
    setModelFilter(newModel);

    const newInstances =
      newModel === 'all' ? circuitInstances : circuitModels[newModel]?.instances || [];
    setInstanceFilter(newInstances.length === 1 ? newInstances[0].id : 'all');
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 pb-4">
        <Select
          value={modelFilter === 'all' ? '' : modelFilter}
          onValueChange={(value) => {
            setModelFilter(value);

            const newInstances =
              value === 'all' ? circuitInstances : circuitModels[value]?.instances || [];
            if (newInstances.length === 1) {
              setInstanceFilter(newInstances[0].id);
            } else {
              setInstanceFilter('all');
            }
          }}
        >
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a circuit model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Circuit models</SelectLabel>
              {modelOptions.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          value={instanceFilter === 'all' ? '' : instanceFilter}
          onValueChange={setInstanceFilter}
          disabled={modelFilter === 'all'}
        >
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a circuit instance" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Circuit instances</SelectLabel>
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
          {filteredSubmissions.length === 0 ? (
            <TableBodyEmpty />
          ) : (
            sortSubmissions(filteredSubmissions).map((submission, index) => {
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
                      <span className="font-semibold text-green-600">By:</span>{' '}
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
