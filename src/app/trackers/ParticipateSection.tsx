import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export function ParticipateSection() {
  return (
    <div className="flex flex-col gap-6 pt-20">
      <h3 className="text-4xl">Participate</h3>
      <p className="mx-auto max-w-xl">
        Have a quantum advantage candidate? Contribute it using the provided problem instances or
        your own circuit specifications, and help expand the list of verified candidates.
      </p>

      <div>
        <Button size="lg" asChild>
          <Link href="/participate">
            Learn more <ChevronRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
