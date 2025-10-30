import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
  title: "SILOSHOP.ID - Store Dashboard",
  description: "SILOSHOP.ID - Store Dashboard",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <StoreLayout>{children}</StoreLayout>
    </>
  );
}
