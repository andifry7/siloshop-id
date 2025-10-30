"use client";
import Link from "next/link";
import Image from "next/image";
const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-3 border-b border-slate-200 transition-all">
      <Link href="/" className="flex items-center">
        <Image
          src="/siloshop-logo-admin.png"
          alt="SILOSHOP.ID"
          width={140}
          height={40}
        />
                 
      </Link>
      <div className="flex items-center gap-3">
        <p>Hi, Admin</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
