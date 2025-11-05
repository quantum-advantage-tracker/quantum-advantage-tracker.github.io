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
import type { VPSubmission } from '@/types/submissions';
import type { Metadata } from 'next';
import { submissions } from '../../../../data/variational-problems/submissions';
import { ParticipateSection } from '../ParticipateSection';

export const metadata: Metadata = {
  title: 'Variational problems',
};

export default async function TrackersVP() {
  return (
    <div className="flex flex-col gap-4 py-20 text-center">
      <h3 className="text-3xl">Variational problems 🌀</h3>
      <h4 className="m-auto max-w-xl">
        Submissions must bound the ground-state energy from above. Verified
        entries include evidence that the ansatz and optimization respect the
        variational principle.
      </h4>

      <div className="m-auto mb-16 flex flex-row gap-6">
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-pathways"
            target="_blank"
            rel="noopener noreferrer"
          >
            View circuit options <GithubIcon />
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <a
            href="https://github.com/quantum-advantage-pathways"
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

export function SubmissionsTable(props: { submissions: VPSubmission[] }) {
  const { submissions } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Circuit</TableHead>
          <TableHead>Energy</TableHead>
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
            <TableRow key={`submission-vp-${index}`}>
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
                {submission.energyValue} [{submission.errorBound.high},{' '}
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
