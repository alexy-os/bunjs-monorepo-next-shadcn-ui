

import { Button } from "@bun-monorepo/ui/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bun-monorepo/ui/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@bun-monorepo/ui/components/ui/alert-dialog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to Bun Monorepo
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Button Component</h2>
          <div className="flex gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Alert Dialog Component</h2>
          <AlertDialog>

            <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Accordion Component</h2>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion Item 1</AccordionTrigger>
              <AccordionContent>
                <p>Accordion Item 1 Content</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion Item 2</AccordionTrigger>
              <AccordionContent>
                <p>Accordion Item 2 Content</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
