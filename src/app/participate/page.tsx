import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Participate',
};

export default function Participate() {
  return (
    <>
      <header className="bg-hero-gradient">
        <div className="px-6 py-20 text-center">
          <h1 className="mx-auto max-w-lg text-5xl">
            Submit your quantum advantage candidate
          </h1>
          <h2 className="mx-auto my-6 max-w-xl">
            Learn how to contribute a new advantage candidate from the list of
            provided problem instances or your own circuit specs. All are
            welcome to participate.
          </h2>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-20">
        <section className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <span className="text-primary">01</span> Choose a pathway
          </h3>
          <p className="max-w-2xl">
            Select the pathway below that best aligns with your submission. Each
            link takes you to a Github folder with a readme outlining submission
            requirements and circuit/problem files for your experiment. The
            readme also includes circuit criteria if you choose to submit a
            custom circuit.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Observable estimations <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Variational problems <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Classically verifiable problems <GithubIcon />
              </a>
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <span className="text-primary">02</span> Enter your submission
          </h3>
          <p className="max-w-2xl">
            Select and fill out an issue template below and submit it. Don’t
            worry about filling out any assignees, tags, etc. on the right side
            of the template. For submitting custom circuits, make sure to
            provide X, Y, Z in the relevant field and follow the standard naming
            schema “circuit type_qubits_gates”
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Observable estimations <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Variational problems <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Classically verifiable problems <GithubIcon />
              </a>
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <span className="text-primary">03</span> Track your submission
            status
          </h3>
          <div className="max-w-2xl">
            <p className="font-medium">
              There are two ways to track the status of your submission:
            </p>
            <ul className="ml-5 list-disc">
              <li>
                By looking up your submission name in the{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Github project board
                </a>{' '}
                and reviewing the status tag
              </li>
              <li>
                Once your submission has been verified, it will show up in the{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Advantage Tracker
                </a>
              </li>
            </ul>
            <p className="mt-6 font-medium">Status details:</p>
            <ul className="ml-5 list-disc">
              <li>
                Verified: meets submission criteria and approved by reviewers,
                added to relevant tracker
              </li>
              <li>Pending: awaiting review or review in progress</li>
              <li>
                Unverifiable: results cannot be repeated or deemed inaccurate
              </li>
              <li>
                Incomplete: submission missing criteria for verification, issue
                will be closed
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <span className="text-primary">04</span> Join the conversation
          </h3>
          <p className="max-w-2xl">
            You can review and comment on{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              other issues in the repo
            </a>{' '}
            to provide your thoughts or{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              contribute to the discussion board
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
