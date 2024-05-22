import Albums from "./Albums";

export default function Box({featured, Data}){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
            <h1 className="text-2xl sm:text-3xl text-[rgba(242,242,242,1)] mb-4 mt-8">{featured}</h1>
            <Albums Data={Data} />
        </div>
    );
}