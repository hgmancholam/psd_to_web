"use client";

import { Navbar } from "flowbite-react";

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded className=" md:mx-10 sm:mx-1 bg-transparent">
      <Navbar.Brand href="#">
        <img alt="Logo website" src="./images/Logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="md:pr-96 md: bg-transparent sm:bg-[#41506b]">
        <Navbar.Link href="#" active className="text-white">
          1. HYSTORY
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          2. TEAM
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
