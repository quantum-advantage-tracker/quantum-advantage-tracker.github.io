'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GithubIcon } from '@/icons';
import clsx from 'clsx/lite';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMenu() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row gap-4">
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={clsx(
                'group data-[state=open]:bg-secondary-dark',
                pathname.startsWith('/trackers') && 'text-green-600 hover:text-green-600',
              )}
            >
              Advantage trackers
              <ChevronDownIcon className="transition-transform group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              asChild
              className={clsx(
                pathname === '/trackers/observable-estimations' &&
                  'text-green-600 focus:text-green-600',
              )}
            >
              <Link href="/trackers/observable-estimations">Observable estimations</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={clsx(
                pathname === '/trackers/variational-problems' &&
                  'text-green-600 focus:text-green-600',
              )}
            >
              <Link href="/trackers/variational-problems">Variational problems</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className={clsx(
                pathname === '/trackers/classically-verifiable-problems' &&
                  'text-green-600 focus:text-green-600',
              )}
            >
              <Link href="/trackers/classically-verifiable-problems">
                Classically verifiable problems
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li>
        <Button
          asChild
          variant="ghost"
          className={clsx(
            pathname === '/participate' && 'text-green-600 hover:bg-inherit hover:text-green-600',
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
