import React from "react";
export default function OurTeamCard({name, position, age, description}) {
    return (
        <>
        <div className="m-10">
            <div className="p-6  bg-white rounded-lg shadow-2xl h-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <div className="flex justify-between pb-2 border-b-4">
                <h6 className="text-left text-sm text-blue-400">{position}</h6>
                <h6 className="text-right text-sm text-gray-500 ">{age}</h6>
                </div>
                <br />
                <p
                className="font-medium text-gray-400 dark:text-gray-400"
                style={{ textAlign: "justify" }}
                >
                {description}
                </p>
            </div>
        </div>
        </>
    )
}