import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const surveyOptions = [
  "Track local rankings",
  "Audit local SEO performance",
  "Build and clean up local citations",
  "Manage & grow online reviews",
  "Streamline my clients' reports",
  "Grow my agency",
  "Learn about local SEO",
];

export function SurveyCard({ className }: { className?: string }) {
  return (
    <Card
      className={cn("max-w-md bg-card rounded-xl border shadow-sm", className)}
    >
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <CardTitle className="heading-sm text-2xl leading-8 text-card-foreground">
            What are you most interested in doing with BrightLocal?
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm leading-5 font-normal">
            Please select at least one.
          </CardDescription>
        </div>
        <div className="flex flex-col gap-2 w-full px-0">
          {surveyOptions.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full px-0">
          <Button className="w-full rounded-full h-9 bg-primary text-primary-foreground">
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
