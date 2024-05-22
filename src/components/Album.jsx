import { useNavigate } from "react-router-dom";

export default function Album({obj}){
    const navigate = useNavigate();
    let s = "";
    for(let i = 0; i < obj.artist.length; i++){
        s += obj.artist[i].name + ", ";
    }
    s = s.slice(0, s.length - 2);
    const handleClick = () => {
        navigate(`/song/${obj._id}`);
    }
    return(
        <div className="cursor-pointer mr-3" onClick={handleClick}>
        <div className="relative">
            <img className="w-full h-auto sm:w-80 sm:h-64 rounded-lg" src={obj.thumbnail} alt={obj.title}/>
            <img
                className="w-10 h-10 sm:w-12 sm:h-12 absolute bottom-2 right-2 sm:bottom-3 sm:right-3"
                src="https://s3-alpha-sig.figma.com/img/d612/caa0/1492ddbe823c4f0eed58dc67ee7bcbb7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhzfWH0bmYTuwW1oIzW17Y55uE80h6URrOfOkuWWPGCJpBxwjRiCWVBC7YnnIwjkacnRVZmnc~hf7lapqbGy7wf~mhA1aQECKexEWY0N0XOXcnGMNrejQFccUYsdd-8YlRc5~QAwsC4Vm3CrPAG-X0sr-2rU3tD~d1m7yPf7XaD~ip2uwiOWe4YH0OWEFgkTFwnhVXjNBi8sMGuGSJ21S3cA48np7-W0~oqE~6pqytneGmJRTYDLwj6ViDFx06ONxw8ArO5FI5EXnOdv-qZauPCgENzqdsMZO-RGlm38ePOHQo26maXd-ic98ml~yWszwagfbGy3eeIKZT-jkqFByA__"
                alt="Play Icon"
            />
        </div>
        <h1 className="text-[rgba(186,195,193,1)] text-lg sm:text-xl font-normal ml-1 mt-2 w-full sm:w-44 h-8 whitespace-nowrap overflow-hidden text-ellipsis">{obj.title}</h1>
        <p className="text-[rgba(114,113,117,1)] text-xs sm:text-sm font-normal ml-1 whitespace-nowrap overflow-hidden text-ellipsis">{s.length > 25 ? s.slice(0, 25) + "..." : s}</p>
        </div>
    );
}