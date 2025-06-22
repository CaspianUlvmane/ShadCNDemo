"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
    const pathname = usePathname();
    return (
        <nav>
            <Button variant={pathname === "/dashboard" ? "active" : "default"} asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant={pathname === "/dashboard/points" ? "active" : "default"} asChild>
                <Link href="/dashboard/points">Points</Link>
            </Button>
            <Button variant={pathname === "/dashboard/cards" ? "active" : "default"} asChild>
                <Link href="/dashboard/cards">Cards</Link>
            </Button>
        </nav>
    );
}