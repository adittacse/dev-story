import React from "react";
import Title from "@/components/Title";
import Link from "next/link";

const About = () => {
    return (
        <div>
            <Title>About Page</Title>

            <nav className="space-x-5">
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/teams">teams</Link>
            </nav>
        </div>
    );
};

export default About;