import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashboardNav from "./dashboardNav";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <DashboardNav />
            {children}
        </div>
    );
}