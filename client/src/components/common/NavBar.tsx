"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


function NavBar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Browse Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" }
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };


  const redirectToLogin = () => {
    router.push("/login");
  }

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div className="flex gap-8 items-center">
            <Link href="/" className="w-[120px]">
              <img src="/images/logo.png" alt="logo" className="object-cover" />
            </Link>
            <div className="flex gap-[20px] xl:gap-[24px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  className={`hover:text-primary hover:font-bold text-[20px] cursor-pointer flex items-center gap-2 font-medium transition-colors duration-200
                    ${isActiveLink(link.href)
                      ? "text-primary font-bold"
                      : "text-black"
                    }`}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div></div>
          <button onClick={redirectToLogin}>
            <MainButton text="Try Now" classes="" />
          </button>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${menu ? "bg-primary py-2" : ""
          }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link href="/">
              <img src="/images/logo.png" alt="logo" className="w-[4rem]" />
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  className={`cursor-pointer transition-colors duration-200
                    ${isActiveLink(link.href)
                      ? "text-primary font-bold"
                      : "text-black"
                    }`}
                  key={index}
                  onClick={() => setMenu(false)}
                >
                  <span>{link.name}</span>
                </Link>
              ))}

              <div className="flex flex-col gap-[40px] select-none">
                <button onClick={redirectToLogin}>
                  <MainButton text="Try Now" classes="" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;