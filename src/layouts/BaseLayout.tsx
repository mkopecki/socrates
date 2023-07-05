import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { NavLink, Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <div>
          <Menubar>
            <MenubarMenu>
              <NavItem to="chat">Chat</NavItem>
              <NavItem to="history">History</NavItem>
              <NavItem to="settings">Settings</NavItem>
            </MenubarMenu>
          </Menubar>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

interface NavItemProps {
  children: React.ReactNode;
  to: string;
}

const NavItem = ({ to, children, ...props }: NavItemProps) => {
  return (
    <NavLink to={to} {...props}>
      <button className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
        {children}
      </button>
    </NavLink>
  );
};
