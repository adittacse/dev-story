import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl">Not Found</h2>
            <p>Could not find requested page</p>
            <Link className="py-2 px-3 bg-sky-600" href="/">Return Home</Link>
        </div>
    );
};

export default NotFound;