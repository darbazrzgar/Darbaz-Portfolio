"use client";

import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

function TopNavbar() {
    const handleScrollHome = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="fixed w-full top-0 z-50 right-0 left-0 flex justify-between bg-muted/30 backdrop-blur-lg items-center py-4 px-5 border-b border-muted/30">
            <div className="flex items-center gap-1">
                <Avatar>
                    <AvatarImage sizes="20 40" src={'data:image/jpeg;base64,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'} />
                    <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <button
                    onClick={handleScrollHome}
                    className="font-bold text-2xl cursor-pointer bg-gradient-to-br from-primary/50 to-green-300/80 bg-clip-text text-transparent py-1 px-2"
                >
                    Darbo Dev
                </button>
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default TopNavbar;