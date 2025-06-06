import { ThemeToggle } from "@/components/theme-toggle";
import { SurveyCard } from "@/components/survey-card";
import { PlatformSidebar } from "@/components/platform-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="max-w-[1840px] mx-auto relative min-h-screen flex">
      <PlatformSidebar />
      <SidebarInset className="flex-1 items-start justify-center pt-8">
        <div className="px-3 max-w-[1280px] mx-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default function Home() {
  return (
    <AppShell>
      <ThemeToggle />
      <SurveyCard />
    </AppShell>
  );
}
