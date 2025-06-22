"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    function setTheme(theme: string) {
        const body = document.querySelector("body");
        if (theme === 'dark') {
            body?.classList.remove("light", "blue");
            body?.classList.add("dark");
        } else if (theme === 'blue') {
            body?.classList.remove("dark", "light");
            body?.classList.add("blue");
        } else {
            body?.classList.remove("dark", "blue");
        }
    }

    return (
        <footer className="flex gap-4">
            <Button variant={pathname === "/" ? "active" : "default"} asChild>
                <Link href="/">Home</Link>
            </Button>
            <Button variant={pathname === "/login" ? "active" : "default"} asChild>
                <Link href="/login">Log in</Link>
            </Button>
            <Button variant={pathname.includes("/dashboard") ? "active" : "default"} asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant={pathname.includes("/resources") ? "active" : "default"} asChild>
                <Link href="/resources">Resources</Link>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild><Button>Themes</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Button onClick={() => setTheme('light')}>Light</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Button onClick={() => setTheme('dark')}>Dark</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Button onClick={() => setTheme('blue')}>Blue</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </footer>
    )
}