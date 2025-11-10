import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/icons';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import './globals.css';

const interSans = Inter({
  variable: '--font-inter-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Quantum Advantage Tracker',
    default: 'Quantum Advantage Tracker',
  },
  description:
    'As claims of quantum advantage emerge, this project provides a platform-agnostic framework to collect, validate, and compare experimental results.',
};

export default function RootLayout(props: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} font-sans antialiased`}>
        <header>
          <nav className="py-6">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
              <Link href="/" className="font-semibold">
                📐 Quantum Advantage Tracker
              </Link>

              <ul className="flex flex-row gap-4">
                <li>
                  <Button asChild variant="ghost">
                    <Link href="/trackers">Advantage trackers</Link>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
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
            </div>
          </nav>
        </header>

        <main>{props.children}</main>

        <footer className="px-6 py-6 text-center">
          <div>Quantum Advantage Tracker © 2025</div>
        </footer>
      </body>
    </html>
  );
}
