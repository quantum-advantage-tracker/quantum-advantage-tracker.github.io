'use client';

import clsx from 'clsx/lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  {
    slug: 'observable-estimations',
    label: 'Observable estimations',
  },
  {
    slug: 'variational-problems',
    label: 'Variational problems',
  },
  {
    slug: 'classically-verifiable-problems',
    label: 'Classically verifiable problems',
  },
] as const;

export function TrackerTabs() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row justify-center gap-4">
      {tabs.map((tab) => {
        const href = `/trackers/${tab.slug}` as const;
        const isActive = pathname === href;

        return (
          <li key={tab.slug}>
            <Link href={href} className={clsx(isActive && 'underline')}>
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
