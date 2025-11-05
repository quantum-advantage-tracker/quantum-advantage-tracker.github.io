'use client';

import { Button } from '@/components/ui/button';
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
    <ul className="border-primary inline-flex flex-row justify-center gap-4 rounded-full border p-2">
      {tabs.map((tab) => {
        const href = `/trackers/${tab.slug}` as const;
        const isActive = pathname === href;

        return (
          <li key={tab.slug}>
            <Button size="lg" asChild variant={isActive ? 'default' : 'ghost'}>
              <Link href={href}>{tab.label}</Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
