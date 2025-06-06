import { ThemeToggle } from "@/components/theme-toggle";
import { PlatformSidebar } from "@/components/platform-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { MobileOverlay } from "@/components/mobile-overlay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="max-w-[1840px] mx-auto relative min-h-screen flex">
      <MobileNav />
      <MobileOverlay />
      <PlatformSidebar />
      <SidebarInset className="flex-1 items-start justify-center pt-18 md:pt-8">
        <div className="px-3 max-w-[1280px] mx-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default function Home() {
  return (
    <AppShell>
      <ThemeToggle />
      <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-4 grid-rows-[auto_1fr]">
        <Card className="grid grid-rows-subgrid row-span-2">
          <CardHeader className="row-start-1">
            <CardTitle className="heading-sm text-2xl leading-8 text-card-foreground">
              What are you most interested in doing with BrightLocal?
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm leading-5 font-normal">
              Please select at least one.
            </CardDescription>
          </CardHeader>
          <CardContent className="row-start-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full">
              {[
                "Track local rankings",
                "Audit local SEO performance",
                "Build and clean up local citations",
                "Manage & grow online reviews",
                "Streamline my clients' reports",
                "Grow my agency",
                "Learn about local SEO",
              ].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="w-full rounded-full h-9 bg-background border-border text-foreground"
                >
                  {option}
                </Button>
              ))}
            </div>
            <Button className="w-full rounded-full h-9 bg-primary text-primary-foreground">
              Continue
            </Button>
          </CardContent>
        </Card>
        <Card className="grid grid-rows-subgrid row-span-2">
          <CardHeader className="row-start-1">
            <CardTitle className="heading-sm text-2xl leading-8 text-card-foreground">
              A Card title
            </CardTitle>
          </CardHeader>
          <CardContent className="row-start-2">
            A communi observantia non est recedendum. Petierunt uti sibi
            concilium totius Galliae in diem certam indicere. Quam temere in
            vitiis, legem sancimus haerentia.
          </CardContent>
        </Card>
        <Card className="grid grid-rows-subgrid row-span-2">
          <CardHeader className="row-start-1">
            <CardTitle className="heading-sm text-2xl leading-8 text-card-foreground">
              A Card title
            </CardTitle>
          </CardHeader>
          <CardContent className="row-start-2">
            A communi observantia non est recedendum. Petierunt uti sibi
            concilium totius Galliae in diem certam indicere. Quam temere in
            vitiis, legem sancimus haerentia.
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
