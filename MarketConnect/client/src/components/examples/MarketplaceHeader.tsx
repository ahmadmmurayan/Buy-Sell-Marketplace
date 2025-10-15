import MarketplaceHeader from '../MarketplaceHeader';

export default function MarketplaceHeaderExample() {
  return (
    <MarketplaceHeader 
      onSearchChange={(value) => console.log('Search:', value)}
      onCreateClick={() => console.log('Create listing clicked')}
    />
  );
}
