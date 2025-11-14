import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Participate',
  description:
    'Learn how to contribute a new advantage candidate from the list of provided problem instances or your own circuit specs. All are welcome to participate.',
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
            <span className="text-primary">01</span> Choose a pathway and
            circuit instance
          </h3>
          <p className="max-w-2xl">
            Select the pathway below that best aligns with your submission. Each
            link takes you to a Github folder with circuit instances for you to
            run your experiment with.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/observable-estimations/circuit-instances"
                target="_blank"
                rel="noopener noreferrer"
              >
                Observable estimations <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/variational-problems/circuit-instances"
                target="_blank"
                rel="noopener noreferrer"
              >
                Variational problems <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/classically-verifiable-problems/circuit-instances"
                target="_blank"
                rel="noopener noreferrer"
              >
                Classically verifiable problems <GithubIcon />
              </a>
            </Button>
          </div>
          <p className="max-w-2xl">
            To submit your own circuit instance, fill out the following issue
            template. Once it has been reviewed and moved to the relevant folder
            above, you can link to it in your advantage tracker submission.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submit-new-cirtcuit-instance.yml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a new circuit instance <GithubIcon />
              </a>
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <span className="text-primary">02</span> Enter your submission
          </h3>
          <p className="max-w-2xl">
            Fill out the relevant issue template below and submit it. Don’t
            worry about filling out any assignees, tags, etc. on the right side
            of the template.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submission-path-1-observable-estimations.yml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Observable estimations <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submission-path-2-variational-problems.yml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Variational problems <GithubIcon />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new?template=submission-path-3-classically-verifiable-problems.yml"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  href="https://github.com/orgs/quantum-advantage-tracker/projects/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-foreground hover:underline"
                >
                  Github project board
                </a>{' '}
                and reviewing the status tag
              </li>
              <li>
                Once your submission has been verified, it will show up in the{' '}
                <Link
                  href="/trackers"
                  className="text-link-foreground hover:underline"
                >
                  Advantage Tracker
                </Link>
              </li>
            </ul>
            <p className="mt-6 font-medium">Status details:</p>
            <ul className="ml-5 list-disc">
              <li>Backlog: awaiting review or review in progress</li>
              <li>In review: project reviewer has been assigned</li>
              <li>Incomplete: submission missing details</li>
              <li>Verified: submission approved and added to tracker</li>
              <li>
                Closed: submission closed due to technical issues or
                incompleteness
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
              href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-foreground hover:underline"
            >
              other issues in the repo
            </a>{' '}
            to provide your thoughts or{' '}
            <a
              href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-foreground hover:underline"
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
