"use client";
import Login from "@/components/admin-apnel/Login";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";

const layout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
  const isLoading = useAppSelector((store) => store.LoadingReducer);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  if (!session?.user) {
    return <Login />;
  }

  return <div>layout</div>;
};

export default layout;
