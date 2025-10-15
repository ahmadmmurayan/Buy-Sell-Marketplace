import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection onBrowseClick={() => console.log('Browse clicked')} />
  );
}
