import Image from 'next/image';
import AlgorithmiqLogo from './logo-algorithmiq.png';
import BluequbitLogo from './logo-bluequbit.png';
import FlatironLogo from './logo-flatiron.png';
import IbmLogo from './logo-ibm.png';

const contributors = [
  { name: 'Algorithmiq', logo: AlgorithmiqLogo },
  { name: 'Bluequbit', logo: BluequbitLogo },
  { name: 'Flatiron', logo: FlatironLogo },
  { name: 'Ibm', logo: IbmLogo },
];

export function Contributors() {
  return (
    <ul className="mx-auto inline-flex flex-row gap-10 pt-4">
      {contributors.map((contributor) => (
        <li key={contributor.name}>
          <Image
            src={contributor.logo}
            alt={`${contributor.name} logo`}
            className="max-h-8 w-full grayscale"
          />
        </li>
      ))}
    </ul>
  );
}
