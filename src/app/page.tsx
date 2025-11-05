import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="bg-hero-gradient">
        <div className="px-6 py-20 text-center">
          <h1 className="m-auto max-w-lg text-5xl">
            Benchmarking quantum advantage
          </h1>
          <h2 className="m-auto my-6 max-w-xl">
            As claims of quantum advantage emerge, this project provides a
            platform-agnostic framework to collect, validate, and compare
            experimental results.
          </h2>
          <div>
            <Button size="lg" asChild>
              <Link href="/trackers">
                View trackers <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="m-auto max-w-2xl px-6 py-20 text-center">
        <h3 className="mb-6 text-4xl">What is quantum advantage?</h3>
        <p>
          Quantum advantage refers to performing an information processing task
          more efficiently, cost-effectively, or accurately using a quantum
          computer than is known to be possible with classical computers alone.
        </p>
        <p className="mt-4">
          But achieving this milestone requires more than raw performance - it
          demands trust in the output of noisy quantum devices and scientific
          rigor in how we validate results.
        </p>
      </section>

      <section className="m-auto max-w-2xl px-6 py-20 text-center">
        <h3 className="mb-6 text-4xl">Why is it hard to verify?</h3>
        <p>
          Quantum advantage isn’t a single milestone - it’s a falsifiable
          scientific hypothesis that must be tested through rigorous
          experimentation. Because quantum computers tackle problems that
          classical systems can’t easily replicate, direct comparison is
          challenging. Verifying any claim of advantage therefore demands
          several multiple points of analysis.
        </p>
      </section>

      <section className="m-auto max-w-2xl px-6 py-20 text-center">
        <h3 className="mb-6 text-4xl">Three pathways to quantum advantage</h3>
        <p>
          To build confidence in advantage claims, this project explores three
          pathways for analysis. Learn more about how these pathways were
          identified in{' '}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            our paper
          </a>
          .
        </p>
      </section>
    </>
  );
}
