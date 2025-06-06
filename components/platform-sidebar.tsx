"use client"

import * as React from "react"
import { 
  Home,
  ListChecks, 
  LayoutGrid, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Calendar, 
  Gauge, 
  Users, 
  ShoppingCart,
  ChevronRight,
  Building2,
  Settings,
  BarChart3,
  MessageSquare,
  Clock,
  PenTool
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const Logo = () => (
  <div className="h-[30px] w-[159px] flex items-center">
    <svg
      viewBox="0 0 159 30"
      fill="none"
      className="h-full w-full"
    >
      <path
        d="M66.8311 7.61719C68.666 7.61724 70.0936 8.3098 71.249 9.62598H71.3174V7.8252H75.4629V22.6514C75.4629 24.9376 74.7153 26.7393 73.2881 28.0557C71.8607 29.372 69.9574 29.9961 67.6465 29.9961C64.0441 29.9961 61.5971 28.6101 60.3057 25.7695L63.6367 23.7607C64.4524 25.4232 65.7437 26.2549 67.5107 26.2549C69.6857 26.2548 71.1807 25.0763 71.1807 22.79V20.5732H71.1133C70.0937 21.8896 68.734 22.5136 66.9668 22.5137C64.9278 22.5136 63.2289 21.8201 61.9375 20.3652C60.6461 18.9796 59.9658 17.1781 59.9658 15.0996C59.9659 13.1598 60.5778 11.3582 61.8691 9.90332C63.1606 8.37921 64.792 7.61719 66.8311 7.61719ZM116.449 7.54883C118.624 7.54885 120.528 8.31068 122.023 9.76562C123.519 11.2205 124.334 13.0223 124.334 15.2393C124.334 17.456 123.586 19.3264 122.023 20.7812C120.46 22.2362 118.625 22.999 116.382 22.999C114.139 22.999 112.304 22.3055 110.74 20.7812C109.245 19.3264 108.429 17.5254 108.429 15.3086C108.497 13.0917 109.245 11.2205 110.808 9.76562C112.371 8.24151 114.274 7.54892 116.449 7.54883ZM132.763 7.61719C136.025 7.61723 138.676 9.27987 139.628 12.1895L135.89 13.7832C135.278 12.3285 134.19 11.5664 132.763 11.5664C130.792 11.5666 129.297 13.0215 129.297 15.3076C129.297 17.5245 130.724 19.0486 132.763 19.0488C134.258 19.0488 135.346 18.3562 135.958 16.832L139.696 18.4258C138.609 21.4048 135.958 22.998 132.695 22.998C130.452 22.9288 128.617 22.236 127.122 20.7812C125.627 19.3263 124.946 17.5247 124.946 15.3076C124.946 13.0906 125.695 11.2889 127.258 9.83398C128.753 8.31008 130.656 7.61729 132.763 7.61719ZM31.6191 9.62988H31.7559C32.8434 8.24446 34.3388 7.55176 36.1738 7.55176C38.2127 7.55188 39.8444 8.31382 41.1357 9.90723C42.427 11.4314 43.0381 13.2331 43.0381 15.2422C43.0381 17.2513 42.3588 19.0529 41.0674 20.5771C39.708 22.1013 38.0761 22.9326 36.0371 22.9326C34.1342 22.9325 32.6386 22.2399 31.6191 20.8545H31.5518V22.6553H27.4053V0.0693359H31.6191V9.62988ZM147.105 7.47852C150.912 7.47867 153.427 9.55676 153.427 13.4365V22.582H149.484V20.7803H149.416C148.465 22.1658 146.969 22.9286 145.066 22.9287C143.707 22.8594 142.551 22.5129 141.6 21.6816C140.648 20.8502 140.172 19.8105 140.172 18.4941V18.4248C140.172 16.6928 140.988 15.3765 142.348 14.7529C143.707 14.1296 145.066 13.8526 146.629 13.8525H148.057C148.804 13.8525 149.212 13.5053 149.212 12.7432C149.212 11.7042 148.396 10.9425 146.901 10.9424C145.474 10.9424 144.387 11.6351 143.707 12.9512L140.444 11.0117C141.668 8.65609 143.911 7.47852 147.105 7.47852ZM98.0313 7.8252H101.634V11.5664H98.0313V16.6934C98.0313 18.3561 98.9148 19.0488 100.546 19.0488C100.886 19.0488 101.226 19.0487 101.498 18.9102V22.5137C100.886 22.7215 100.206 22.79 99.5264 22.79C95.7203 22.79 93.7491 20.712 93.749 17.248V11.5664H91.166V7.8252H93.8174V3.18359H98.0313V7.8252ZM81.1738 9.55664C81.7175 8.79459 82.3296 8.24004 83.0771 7.96289C83.8926 7.68584 84.5725 7.54791 85.1162 7.54785C86.8832 7.54788 88.175 8.10177 89.0586 9.2793C89.9421 10.3878 90.4179 11.7738 90.418 13.4365V22.6514H86.2725V14.4072C86.2725 12.7444 85.3881 11.4971 83.7568 11.4971C82.0578 11.4972 81.1738 12.7445 81.1738 14.3379V22.582H76.96V0.0654297H81.1738V9.55664ZM58.6709 22.5869H54.3887V7.8291H58.6709V22.5869ZM52.3535 7.68652C52.6933 7.68652 52.966 7.68664 53.1699 7.8252V12.041C52.8525 11.9846 52.5352 11.9824 52.2178 11.9824C49.4992 11.9825 48.2755 13.7142 48.2754 16.3467V22.583H44.0615V7.8252H48.2754V10.1113C48.8871 8.72577 50.4505 7.68667 52.3535 7.68652ZM107.274 22.582H102.992V0.0654297H107.274V22.582ZM159 22.582H154.718V0.0654297H159V22.582ZM10.8232 22.3809C10.9301 22.4611 11.0382 22.5176 11.1602 22.5176C11.0922 22.5176 11.0236 22.5176 10.8877 22.5176C10.8654 22.5171 10.8449 22.4655 10.8232 22.3809ZM16.1904 3.1875C18.2295 3.18757 20.2684 4.36566 21.4238 6.16699C22.579 8.1069 22.6472 10.7398 21.4238 12.6104C20.8121 13.5801 19.9961 14.3425 19.1807 15.1045C16.666 17.5984 14.0152 19.9542 11.4326 22.3096L11.3643 22.3789C11.2285 22.448 11.0928 22.4479 10.957 22.3789C10.8553 22.3271 10.8004 22.2363 10.7725 22.125C10.7886 22.2258 10.8061 22.314 10.8232 22.3809C10.692 22.2823 10.5618 22.1477 10.4121 22.0332C7.96526 19.7469 5.51814 17.4601 3.07129 15.1045C1.98389 13.9961 0.828017 12.9566 0.28418 11.4326C-0.463468 9.07705 0.284879 6.23615 2.25586 4.64258C3.34333 3.74194 4.70259 3.25689 6.12988 3.25684C8.09474 3.25685 9.99188 4.2898 11.1484 5.94336C12.2055 4.32028 14.1143 3.24974 16.1904 3.1875ZM6.0625 4.57324C4.29527 4.57324 2.59553 5.61257 1.71191 7.27539C0.896526 8.86886 0.964734 10.9475 2.12012 12.4023C2.79971 13.3028 3.61521 14.0652 4.43066 14.8271C6.33376 16.6977 8.30531 18.4995 10.2764 20.3008L10.6162 20.6475C10.6183 20.6758 10.675 21.4454 10.751 21.9883C10.737 21.8282 10.7529 21.6451 10.7529 21.4785C10.549 17.8066 10.2766 14.1339 10.1406 10.5312C10.0869 9.43516 10.1198 8.33902 10.4717 7.31152C10.4545 7.27353 10.4124 7.26129 10.4121 7.20605C9.59646 5.61255 7.89709 4.57325 6.12988 4.57324H6.0625ZM146.629 16.5547C145.406 16.5548 144.454 17.1086 144.454 18.2168C144.454 19.1866 145.202 19.7412 146.289 19.7412C148.124 19.7412 149.212 18.4939 149.212 16.9004V16.5547H146.629ZM35.2217 11.4316C34.2023 11.4317 33.3867 11.778 32.707 12.4707C32.0273 13.1635 31.6875 14.0643 31.6875 15.1729C31.6196 16.2814 32.0273 17.1822 32.707 17.9443C33.3867 18.6371 34.2706 18.9834 35.29 18.9834C36.3095 18.9833 37.1934 18.6371 37.873 17.9443C38.5527 17.2515 38.8926 16.2813 38.8926 15.1729C38.8926 14.0643 38.5523 13.1635 37.8047 12.4707C37.125 11.7779 36.2412 11.4317 35.2217 11.4316ZM116.382 11.3594C115.362 11.3594 114.547 11.7057 113.867 12.4678C113.187 13.1606 112.848 14.0614 112.848 15.1699C112.78 16.2783 113.188 17.1794 113.867 17.9414C114.547 18.6338 115.43 18.9804 116.449 18.9805C118.488 18.9804 119.984 17.3868 119.984 15.1699C119.984 14.0616 119.644 13.1606 118.965 12.4678C118.285 11.775 117.401 11.3595 116.382 11.3594ZM67.7148 11.4277C65.7438 11.4277 64.1798 12.9519 64.1797 15.0303C64.1797 17.2474 65.6757 18.7031 67.7148 18.7031C69.6858 18.7029 71.249 17.2472 71.249 15.0303C71.2489 12.952 69.7537 11.4279 67.7148 11.4277ZM6.0625 6.58301C7.08178 6.58315 8.03298 7.20606 8.50879 8.10645C8.91636 8.93763 8.91681 9.83874 8.57715 10.6699C8.03331 11.7782 6.74182 12.4714 5.51855 12.2637C4.36321 12.0558 3.41154 11.0165 3.27539 9.83887C3.13947 8.93828 3.47963 7.96829 4.15918 7.34473C4.70294 6.85977 5.38282 6.58301 6.0625 6.58301ZM53.2373 12.0518H53.1699V12.041C53.1922 12.045 53.215 12.0472 53.2373 12.0518ZM16.1904 7.13672C14.8991 7.13672 13.9474 8.17583 13.9473 9.42285C14.0155 10.6004 14.9668 11.5712 16.1221 11.6406C17.3454 11.7099 18.3654 10.6697 18.4336 9.42285C18.4335 8.17589 17.4137 7.13682 16.1904 7.13672ZM6.0625 7.83008C5.38279 7.83008 4.70235 8.38431 4.56641 9.07715C4.36326 10.0469 5.24724 11.2243 6.40234 11.0166C7.0138 10.878 7.55727 10.3235 7.69336 9.7002C7.76126 8.79964 7.01389 7.83031 6.0625 7.83008ZM56.4961 0C57.9914 6.53721e-05 59.1465 1.17794 59.1465 2.70215C59.1464 4.15704 57.9914 5.3349 56.4961 5.33496C55.0687 5.33496 53.9131 4.15708 53.9131 2.70215C53.9131 1.24718 55.1367 0 56.4961 0Z"
        fill="#2AE855"
      />
    </svg>
  </div>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6 opacity-70">
    <path
      d="M19.229 8.33926L19.1295 7.9172H9.9558V11.7999H15.437C14.8679 14.5022 12.2272 15.9246 10.0702 15.9246C8.50079 15.9246 6.8464 15.2644 5.7514 14.2033C5.17368 13.6345 4.71381 12.9574 4.39814 12.2106C4.08246 11.4639 3.91717 10.6622 3.91173 9.85149C3.91173 8.21603 4.64672 6.58013 5.71619 5.50406C6.78567 4.42798 8.40088 3.8259 10.0069 3.8259C11.8461 3.8259 13.1642 4.80252 13.6572 5.24791L16.4162 2.50336C15.6069 1.79214 13.3834 0 9.91795 0C7.24426 0 4.6806 1.02414 2.8066 2.89198C0.957246 4.73122 0 7.39082 0 9.85854C0 12.3262 0.905753 14.8529 2.69789 16.7067C4.61283 18.6837 7.3248 19.7171 10.1173 19.7171C12.6581 19.7171 15.0664 18.7215 16.7828 16.9153C18.4702 15.1373 19.343 12.677 19.343 10.098C19.343 9.0122 19.2338 8.36743 19.229 8.33926Z"
      fill="currentColor"
    />
  </svg>
)

export function PlatformSidebar() {
  return (
    <Sidebar className="bg-sidebar min-w-0 max-w-full">
      <SidebarHeader className="p-6 pb-0 mb-12">
        <Logo />
      </SidebarHeader>
      
      <SidebarContent className="px-0 min-w-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <ListChecks className="h-6 w-6" />
                  <span className="truncate">Trial Tasks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  size="lg" 
                  isActive
                >
                  <Home className="h-6 w-6" />
                  <span className="truncate">All Locations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-6 max-w-44" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <LayoutGrid className="h-6 w-6" />
                  <span className="truncate">Location Summary</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="relative">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                      <MapPin className="h-6 w-6" />
                      <span className="truncate">Location Manager</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Building2 className="h-4 w-4" />
                          <span className="truncate">Add Location</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Settings className="h-4 w-4" />
                          <span className="truncate">Manage Locations</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <BarChart3 className="h-4 w-4" />
                          <span className="truncate">Location Analytics</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="relative">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                      <TrendingUp className="h-6 w-6" />
                      <span className="truncate">Rankings</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <BarChart3 className="h-4 w-4" />
                          <span className="truncate">Rank Tracker</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <TrendingUp className="h-4 w-4" />
                          <span className="truncate">Keyword Rankings</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Settings className="h-4 w-4" />
                          <span className="truncate">Ranking Settings</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="relative">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                      <CheckCircle className="h-6 w-6" />
                      <span className="truncate">Citations</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <CheckCircle className="h-4 w-4" />
                          <span className="truncate">Citation Audit</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Building2 className="h-4 w-4" />
                          <span className="truncate">Directory Listings</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Settings className="h-4 w-4" />
                          <span className="truncate">Citation Builder</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="relative">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                      <Star className="h-6 w-6" />
                      <span className="truncate">Reputation Manager</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Star className="h-4 w-4" />
                          <span className="truncate">Review Monitoring</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <MessageSquare className="h-4 w-4" />
                          <span className="truncate">Review Responses</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <BarChart3 className="h-4 w-4" />
                          <span className="truncate">Reputation Analytics</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Calendar className="h-6 w-6" />
                  <span className="truncate">Location Summary</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <GoogleIcon />
                  <span className="truncate">GBP Audit</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="relative">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                      <PenTool className="h-6 w-6" />
                      <span className="truncate">GBP Post Scheduler</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <PenTool className="h-4 w-4" />
                          <span className="truncate">Create Post</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <Clock className="h-4 w-4" />
                          <span className="truncate">Scheduled Posts</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <BarChart3 className="h-4 w-4" />
                          <span className="truncate">Post Analytics</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Gauge className="h-6 w-6" />
                  <span className="truncate">Local Search Audit</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-6 max-w-44" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="min-w-0">
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Users className="h-6 w-6" />
                  <span className="truncate">Clients</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="truncate">Leads</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}