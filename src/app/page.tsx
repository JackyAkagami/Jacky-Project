"use client";
import Navbar from "@/components/front-end/Navbar";
import React, { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
    </main>
  );
};

export default Home;
