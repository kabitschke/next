'use client'

import { login } from "@/actions/login";
import Cookie from "@/components/cookie";
import Login from "@/components/login";
import React from "react";

export default function HomePage() {

  return (

    <main >
      <h1>Home</h1>
      <Cookie />
      <Login />




    </main>


  );
}
