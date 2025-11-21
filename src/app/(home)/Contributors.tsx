import Image from 'next/image';
import AlgorithmiqLogo from './logo_algorithmiq.png';
import BluequbitLogo from './logo_bluequbit.png';
import IbmLogo from './logo_ibm.png';

const contributors = [
  { name: 'Algorithmiq', logo: AlgorithmiqLogo },
  { name: 'Bluequbit', logo: BluequbitLogo },
  { name: 'Ibm', logo: IbmLogo },
];

export function Contributors() {
  return (
    <ul className="mx-auto inline-flex flex-row flex-wrap justify-center pt-2">
      {contributors.map((contributor) => (
        <li key={contributor.name}>
          <Image
            src={contributor.logo}
            alt={`${contributor.name} logo`}
            className="h-16 w-auto grayscale"
          />
        </li>
      ))}
    </ul>
  );
}
