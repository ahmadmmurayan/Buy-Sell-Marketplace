import { useState } from 'react';
import CreateListingDialog from '../CreateListingDialog';
import { Button } from '@/components/ui/button';

export default function CreateListingDialogExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <CreateListingDialog 
        open={open}
        onOpenChange={setOpen}
        onSubmit={(listing) => console.log('New listing:', listing)}
      />
    </div>
  );
}
