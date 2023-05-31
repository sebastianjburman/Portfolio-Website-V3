"use client";
import { Navbar } from "flowbite-react";

export default function TopNavbar() {
  return (
    <div className="bg-zinc-800 sticky top-0">
      <Navbar fluid className="bg-zinc-800 max-w-screen-xl mx-auto  ">
        <Navbar.Brand href="/">
          <img
            alt="Terminal Svg"
            className="mr-3 h-7 w-10 sm:h-9"
            src="/svg/terminal.svg"
          />
          <h2 className="text-white self-center whitespace-nowrap text-2xl font-semibold m-0">
            SB
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle className="hover:bg-zinc-800 focus:ring-teal-400 hover:border-teal-400" />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="text-white rounded border-none hover:bg-teal-400 md:hover:text-teal-400"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/projects"
            className="text-white rounded border-none hover:bg-teal-400 md:hover:text-teal-400"
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            href="/contact"
            className="text-white rounded border-none hover:bg-teal-400 md:hover:text-teal-400"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
