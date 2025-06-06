import { ThemeToggle } from "@/components/theme-toggle";
import { SurveyCard } from "@/components/survey-card";
import { PlatformSidebar } from "@/components/platform-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-background">
        <PlatformSidebar />
        <SidebarInset className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <ThemeToggle />
            <SurveyCard />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
