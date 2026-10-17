"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine, RiSupabaseFill, RiTailwindCssLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

function HeroSection() {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleScrollProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    if (loading) {
        return (
            <motion.section
                className="min-h-screen w-full flex p-4 flex-col lg:flex-row justify-between items-center gap-10 px-20 pt-32 border-b border-muted/80 animate-pulse"
            >
                <div className="flex flex-col gap-4 max-w-xl w-full">
                    <div className="w-40 h-4 bg-zinc-800 rounded-full" />

                    <div className="space-y-3">
                        <div className="w-72 h-8 bg-zinc-800 rounded-md" />
                        <div className="w-60 h-8 bg-zinc-800 rounded-md" />
                        <div className="w-48 h-6 bg-zinc-800 rounded-md" />
                    </div>

                    <div className="space-y-2 mt-2">
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="w-5/6 h-3 bg-zinc-800 rounded" />
                        <div className="w-4/6 h-3 bg-zinc-800 rounded" />
                    </div>

                    <div className="flex gap-2 mt-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="w-10 h-8 bg-zinc-800 rounded-md" />
                        ))}
                    </div>

                    <div className="w-80 h-3 bg-zinc-800 rounded mt-4" />

                    <div className="flex gap-4 mt-4">
                        <div className="w-36 h-10 bg-zinc-800 rounded-md" />
                        <div className="w-36 h-10 bg-zinc-800 rounded-md" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-60 h-60 md:w-80 md:h-80 bg-zinc-800 rounded-full border-2 border-zinc-700" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-6 bg-zinc-800 rounded-md mb-2" />
                    <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                </div>
            </motion.section>
        );
    }
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="home"
            className="min-h-screen mx-auto w-full flex p-4 flex-col lg:flex-row justify-between items-center gap-10 px-20 pt-32 border-b border-muted/80"
        >
            <div className="flex flex-col gap-2 max-w-xl">
             

                <h1 className="text-3xl md:text-5xl font-thin text-foreground/90 leading-tight">
                    Hi, I&apos;m <span className="font-bold">Darbaz</span> —
                    <br />
                    <span className="font-semibold">
                        Full Stack Developer
                    </span>{" "}
                    <span className="bg-gradient-to-tr font-medium from-primary/60 to-green-400 bg-clip-text text-transparent  tracking-tight">
                        `MERN <span className="font-black dark:text-white text-zinc-800">+</span> Supabase`
                    </span>
                </h1>

                <p className="text-muted-foreground mt-3 mb-5 tracking-wide leading-relaxed">
                    I build fast, scalable web applications with a focus on real-time features,
                    secure authentication, and clean backend architecture.
                    <br /><br />
                    Specialized in building production-ready apps using Next.js, React, and modern backend tools —
                    with strong attention to performance and user experiencce.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 items-center text-lg">
                    <Badge variant={'outline'}><RiNextjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiSupabaseFill /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiReactjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiNodejsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><DiMongodb /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiTailwindCssLine /></Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                    Real-time apps • Secure auth (RLS) • Scalable database design
                </p>

                <div className="flex gap-4 items-center">
                    <Button
                        onClick={handleScrollProjects}
                        className="px-6 py-3 bg-primary text-white rounded-md"
                    >
                        View Projects
                    </Button>

                    <Button
                        onClick={handleScrollServices}
                        variant={'outline'}
                        className="px-6 py-3 border rounded-sm"
                    >
                        See Services
                    </Button>
                </div>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-2 border-primary"
                    src="data:image/jpeg;base64,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"
                    alt="Darbaz"
                />
            </div>

            <div>
                <Button onClick={handleScrollProjects} variant={'ghost'} className="animate-bounce font-mono flex gap-2 items-center">
                    Scroll <BiDownArrow />
                </Button>
            </div>
        </motion.section>
    );
}

export default HeroSection;