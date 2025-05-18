'use client';

import { useToast } from '@/hooks/use-toast';
import { useState, useTransition } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

type DisableDraftModeProps = {
  enabled: boolean;
};

export const DisableDraftMode = ({ enabled }: DisableDraftModeProps) => {
  const [open, setOpen] = useState(false);
  const [isTransitioning, startTransition] = useTransition();

  const { toast } = useToast();

  const handleExitDraftMode = () => {
    startTransition(async () => {
      const response = await fetch('/api/disable-draft');

      if (response.ok) {
        toast({
          title: 'Draft mode disabled',
          description: 'You have exited draft mode.',
          duration: 5000,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to exit draft mode.',
          duration: 5000,
        });
      }

      setOpen(false);
    });
  };

  if (!enabled) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Draft Mode
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Draft Mode</DialogTitle>
          <DialogDescription>
            You are currently in draft mode. This means you are viewing unpublished content. To exit draft mode, please
            click the button below.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleExitDraftMode} disabled={isTransitioning}>
            Exit Draft Mode
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
