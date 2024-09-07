import AdminHeader from "./components/admin-header";
import AdminSidebar from "./components/admin-sidebar";

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/80 dark:bg-muted/40">
      <AdminSidebar />
      <AdminHeader />
      <div className="flex flex-col sm:gap-4 sm:py-1 sm:pl-14 m-4">
        {children}
      </div>
    </div>
  );
}
