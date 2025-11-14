import type { Metadata } from 'next';
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
            Track verifiable quantum advantage claims across three pathways,
            with clear evidence requirements and contributing institutions.
          </h2>

          <TrackerTabs />
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-384 px-6">{props.children}</div>
      </div>
    </div>
  );
}
