import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";

const Navbar = () => {
  return (<nav className="p-4 flex justify-between items-center">
    {/*LEFT SIDE*/}
    collapse button
    {/*RIGHT SIDE*/}
    <div className="flex items-center gap-4">
      <Link href="/">Dashboard</Link>
      <Moon />

      <DropdownMenu>
        <DropdownMenuTrigger><Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar></DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="h-[1.2rem] w-[1.2rem] mr-2"
            /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  </nav>)

};

export default Navbar;
