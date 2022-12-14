import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="grid"
            href="/member"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
      </div>
    </section>
  );
}
