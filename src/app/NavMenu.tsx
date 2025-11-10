'use client';

import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMenu() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row gap-4">
      <li>
        <Button
          asChild
          variant="ghost"
          className={clsx(
            pathname.startsWith('/trackers') &&
              'text-nav-menu-selected-foreground hover:text-nav-menu-selected-foreground hover:bg-inherit',
          )}
        >
          <Link href="/trackers">Advantage trackers</Link>
        </Button>
      </li>
      <li>
        <Button
          asChild
          variant="ghost"
          className={clsx(
            pathname === '/participate' &&
              'text-nav-menu-selected-foreground hover:text-nav-menu-selected-foreground hover:bg-inherit',
          )}
        >
          <Link href="/participate">Participate</Link>
        </Button>
      </li>
      <li>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-6" />
          </a>
        </Button>
      </li>
    </ul>
  );
}
