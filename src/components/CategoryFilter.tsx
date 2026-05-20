'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const CATEGORIES = ['active', 'baseline', 'superseded'] as const;

export type Category = (typeof CATEGORIES)[number];

const LABELS: Record<Category, string> = {
  active: 'Active',
  baseline: 'Baseline',
  superseded: 'Superseded',
};

export function CategoryFilter(props: {
  value: Category;
  onChange: (value: Category) => void;
  counts: Record<Category, number>;
}) {
  const { value, onChange, counts } = props;

  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as Category)}>
      <TabsList>
        {CATEGORIES.map((category) => (
          <TabsTrigger key={category} value={category}>
            {LABELS[category]} ({counts[category]})
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
