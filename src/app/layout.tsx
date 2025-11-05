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
        <nav className="h-14">
          <div className="m-auto flex h-full max-w-7xl flex-row items-center justify-between px-6">
            <Link href="/" className="font-semibold">
              Quantum Advantage Tracker
            </Link>

            <ul className="flex flex-row gap-5">
              <li>
                <Link href="/trackers">Advantage trackers</Link>
              </li>
              <li>
                <Link href="/participate">Participate</Link>
              </li>
              <li>
                <a
                  href="https://github.com/quantum-advantage-pathways/quantum-advantage-pathways.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="size-6" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main>{props.children}</main>
      </body>
    </html>
  );
}
