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
import type { Metadata } from 'next';
import { submissions } from '../../../../data/observable-estimations/submissions';
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

      <div className="mx-auto mb-16 flex flex-row gap-6">
        <Button variant="secondary" size="lg" asChild>
          <a href="#TODO" target="_blank" rel="noopener noreferrer">
            View circuit options <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a href="#TODO" target="_blank" rel="noopener noreferrer">
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
          <TableHead title="Expectation value">Exp. value</TableHead>
          <TableHead>Runtime</TableHead>
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
              <TableCell>{submission.date}</TableCell>
              <TableCell>
                <a
                  href={submission.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {submission.name}
                </a>
              </TableCell>
              <TableCell className="whitespace-normal">
                {submission.method}
              </TableCell>
              <TableCell className="whitespace-normal">
                {submission.circuit}
              </TableCell>
              <TableCell>
                {submission.observableValue} [{submission.errorBound.high},{' '}
                {submission.errorBound.low}]
              </TableCell>
              <TableCell>
                <div>Q: {submission.runtime.quantum}</div>
                <div>C: {submission.runtime.classic}</div>
              </TableCell>
              <TableCell>
                <div>Q: {submission.computeResources.quantum}</div>
                <div>C: {submission.computeResources.classic}</div>
              </TableCell>
              <TableCell className="whitespace-normal">
                {submission.institution}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
