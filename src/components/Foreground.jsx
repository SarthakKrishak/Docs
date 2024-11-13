import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);

    const data = [
        {
            desc: "This is the first Docs",
            fileSize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            },
        },
        {
            desc: "This is the Second Docs",
            fileSize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "blue",
            },
        },
    ];

    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] bg-transparent p-10 flex gap-5 flex-wrap">
                {data.map((items, index) => (
                    <Card data={items} reference={ref } />
                ))}
            </div>
        </>
    );
};

export default Foreground;
