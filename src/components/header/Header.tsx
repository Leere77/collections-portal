"use client";

import Link from "next/link";
import { IHeaderLink } from "./types";
import { useEffect, useRef, useState } from "react";

export default function Header({ links }: { links: IHeaderLink[] }) {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (menuState && !menuRef.current?.contains(target as Node)) setMenuState(false);
    }

    window.addEventListener('click', clickHandler);

    return () => window.removeEventListener('click', clickHandler);
  }, [menuState]);

  return (
    <header ref={menuRef}>
      <div className="container mx-auto h-24 flex items-center px-6 py-2 border-b-2">
        <div className="font-bold grow md:grow-0">Collections</div>
        <div className="hidden grow md:flex justify-center gap-4 ">
          {links.map(({ href, title }) => <Link className="" key={href} href={href}>{title}</Link>)}
        </div>
        <div className="hidden md:flex justify-center gap-4">
          <Link className="" href={'/signIn'}>Sign in</Link>
          <Link className="" href={'/signUp'}>Sign up</Link>
        </div>
        <button onClick={() => setMenuState((menuState) => !menuState)}>{menuState ? 'close' : 'open'}</button>
      </div>
      <div hidden={!menuState} className="absolute bg-white w-full px-6 py-2 md:hidden sm:block">
        <div className="flex gap-4 flex-col">
          {links.map(({ href, title }) => <Link className="" key={href} href={href}>{title}</Link>)}
        </div>
        <div className="flex gap-4 mt-4">
          <Link className="" href={'/signIn'}>Sign in</Link>
          <Link className="" href={'/signUp'}>Sign up</Link>
        </div>
      </div>
    </header>
  )
}