import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackerTabs } from './TrackerTabs';

export const metadata: Metadata = {
  description:
    'Track verifiable quantum advantage claims across three pathways, with clear evidence requirements and contributing institutions.',
};

export default function TrackersLayout(props: LayoutProps<'/trackers'>) {
  return (
    <div>
      <div className="bg-hero-gradient">
        <div className="px-6 py-20 text-center">
          <h1 className="mx-auto max-w-md text-5xl">Advantage trackers</h1>
          <h2 className="mx-auto my-6 max-w-xl">
            Track verifiable quantum advantage claims across three pathways, with clear evidence
            requirements and contributing institutions.
          </h2>

          <TrackerTabs />
        </div>
      </div>

      <div className="mx-auto max-w-384 px-6 py-20 text-center">
        {props.children}

        <div className="flex flex-col gap-6 pt-20">
          <h3 className="text-4xl">Participate</h3>
          <p className="mx-auto max-w-xl">
            Have a quantum advantage candidate? Contribute it using the provided problem instances
            or your own circuit specifications, and help expand the list of verified candidates.
          </p>

          <div>
            <Button size="lg" asChild>
              <Link href="/participate">
                Learn more <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
