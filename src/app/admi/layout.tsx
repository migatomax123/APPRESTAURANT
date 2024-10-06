import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IChildren } from "../../interfaces/IChildren";
import { ILink } from "../../interfaces/ILinks";
import AsideAdmin from "../../components/admi/asideadmin";

export default function AdminLayout({ children }: IChildren,) {
  const links: ILink[] = [
    { name: 'DashBoard', href: '/admin' },
    { name: 'Menu', href: '/admin/menu' },
    { name: 'Products', href: '/admin/products' },
    { name: 'Categories', href: '/admin/categories' },
    { name: 'Clients', href: '/admin/clients' },
    { name: 'Tags', href: '/admin/tags' },
    { name: 'Sign Out', href: '/public' }
  ]
  return (
    <>
      <main>
        <AsideAdmin links={links} />
        {children}
      </main>
    </>
  );
}
