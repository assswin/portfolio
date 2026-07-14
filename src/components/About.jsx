import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <div className="max-w-4xl">
      <p className="text-2xl md:text-4xl text-brand-text leading-tight font-light tracking-tight">
        {portfolioData.about}
      </p>
    </div>
  );
}
