import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./Sidebaritem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-5 items-center">
        <div className="pr-2 fill-purple-600"><LogoIcon /></div>
        <div className="pb-1 font-bold">Brainly</div>
      </div>
      <div className="pt-4 pl-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}


