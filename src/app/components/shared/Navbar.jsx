"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  console.log(session?.data?.user?.name);
  const userName = session?.data?.user?.name;

  return (
    <div className="bg-base-100 text-slate-900 font-bold">
      <div className=" mx-10">
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}> {item.title} </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/">
              <Image src={"assets/logo.svg"} width={60} height={50} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}> {item.title} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span> {userName} </span> 
            <Link href="/appointment" className="btn btn-outline btn-primary">
              Appointment
            </Link>
            {session?.data ? (
              <div>
                 
                
                <button className="btn bg-red-400" onClick={() => signOut()}>
                   
                  Logout 
                </button> 
              </div>
            ) : (
              <Link href="/login" className="btn  btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/service",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default Navbar;
