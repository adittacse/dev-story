import React from "react";
import Title from "@/components/Title";

const TutorialsTopic = async ({ params }) => {
    const { slug } = await params;
    const [technology, topic, , page_no, subject] = slug || [];

    return (
        <div>
            <Title>{technology} tutorials</Title>
            <h2>{topic}</h2>
            <hr/>
            <div className="flex justify-between">
                <h3 className="font-bold">{subject}</h3>
                <p>Page no: {page_no}</p>
            </div>
        </div>
    );
};

export default TutorialsTopic;