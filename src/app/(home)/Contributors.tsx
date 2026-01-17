import submissionsCVP from '../../../data/classically-verifiable-problems/submissions.json' assert { type: 'json' };
import submissionsOE from '../../../data/observable-estimations/submissions.json' assert { type: 'json' };
import submissionsVP from '../../../data/variational-problems/submissions.json' assert { type: 'json' };

const submissions = [...submissionsCVP, ...submissionsOE, ...submissionsVP];

const institutionsSet = new Set<string>();

submissions.forEach((submission) => {
  if (submission.institutions) {
    submission.institutions.split(',').forEach((institution) => {
      institutionsSet.add(institution.trim());
    });
  }
});

const institutions = Array.from(institutionsSet).sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase()),
);

export function Contributors() {
  return (
    <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] pt-6">
      <ul className="animate-marquee flex w-max min-w-full shrink-0 items-center justify-around gap-16 pr-16">
        {/* Duplicate the list to ensure a seamless infinite marquee animation */}
        {[...institutions, ...institutions].map((institution, index) => (
          <li
            key={`${institution}-${index}`}
            className="flex items-center gap-16 text-xl font-light whitespace-nowrap"
          >
            {institution}
            <span className="h-2 w-2 rounded-full bg-green-600" />
          </li>
        ))}
      </ul>
    </div>
  );
}
