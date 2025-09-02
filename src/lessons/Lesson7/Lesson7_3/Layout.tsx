import { ReactNode } from "react";

export default function Layout({ children, isPending }: { children: ReactNode, isPending: boolean }) {
  return (
    <div className="">
      <section className={`bg-slate-300 text-center`}>Music Browser</section>
      <main>{isPending ? "Transistion Loading..." : children}</main>
    </div>
  );
}
