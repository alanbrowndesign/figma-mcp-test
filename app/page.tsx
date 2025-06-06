import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdfc]">
      <Card className="min-w-[26.25rem] w-[419px] bg-[#f2f7f3] rounded-xl border shadow-sm">
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5 w-full">
            <CardTitle className="text-[24px] leading-[32px] font-semibold font-[Poppins,sans-serif] text-[#111412]">
              What are you most interested in doing with BrightLocal?
            </CardTitle>
            <CardDescription className="text-[#657568] text-[14px] leading-[20px] font-normal font-[Inter,sans-serif]">
              Please select at least one.
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2 w-full px-0">
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Track local rankings
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Audit local SEO performance
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Build and clean up local citations
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Manage & grow online reviews
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Streamline my clients&#39; reports
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Grow my agency
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full h-9 bg-[#fcfdfc] border-[#e6ede8] text-[#111412]"
            >
              Learn about local SEO
            </Button>
          </div>
          <div className="flex flex-col gap-2 w-full px-0">
            <Button className="w-full rounded-full h-9 bg-[#2ae855] text-[#032a0c]">
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
