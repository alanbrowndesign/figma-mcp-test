import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <ThemeToggle />
      <Card className="min-w-[26.25rem] max-w-md bg-card rounded-xl border shadow-sm">
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
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Track local rankings
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Audit local SEO performance
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Build and clean up local citations
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Manage & grow online reviews
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Streamline my clients&#39; reports
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Grow my agency
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-background border-border text-foreground"
            >
              Learn about local SEO
            </Button>
          </div>
          <div className="flex flex-col gap-2 w-full px-0">
            <Button className="w-full rounded-full h-9 bg-primary text-primary-foreground">
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
