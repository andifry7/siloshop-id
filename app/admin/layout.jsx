import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "SILOSHOP.ID - Admin",
  description: "SILOSHOP.ID - Admin",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
