"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Banner = () => {
    const router = useRouter();

    const handleBtn = () => {
        const password = prompt("Enter your Password");
        if (password === "1234") {
            router.push("/dashboard");
        }
    }

    return (
        <div className="text-center space-y-5 bg-linear-60 from-sky-300 to-sky-100 text-black p-10 rounded">
            <h2 className="text-4xl font-bold">Welcome to Dev Story</h2>
            <button onClick={handleBtn} className="bg-sky-500 hover:bg-black text-white duration-200 rounded cursor-pointer px-4 py-2">Share Story</button>
        </div>
    );
};

export default Banner;