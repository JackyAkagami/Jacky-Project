import React from "react";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

const menus = {
  {
    title: "Dashboard"
    icon: <MdDashboard />
    href: "admin/dashboard"
  }
  {
    title: "Products"
    icon: <RiShoppingCartLine />
    href: "admin/products"
  }
  {
    title: "Accounts"
    icon: <MdManageAccounts />
    href: "#"
  }
  {
    title: "Transactions"
    icon: <GrTransaction />
    href: "#"
  }
  {
    title: "Analytics"
    icon: <IoAnalytics />
    href: "#"
  }
  {
    title: "Settings"
    icon: <IoSettings />
    href: "#"
  }
  
}

const Sidebar = () => {
  return <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
    <div className="flex items-center gap-4">
      <img className="size-12 rounded-lg" src="/logo.jpg" alt="logo" />
    </div>
    <ul>
    {menus.map(menu => <link key={menu.title} href={menu.href} className={"flex gap-2 item-center
    p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${}"></link>)}
    </ul>
  </div>;

  

};

export default Sidebar;
