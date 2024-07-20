import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../context/context";
export default function Song(){
    const id = useParams().id;
    const contextData = useContext(MyContext);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [artists, setArtists] = useState("");
    useEffect(() => {
        if(!contextData.isSignedIn){
            navigate("/login");
        }
        const fetchData = async () => {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${id}`, {
                method : "GET",
                headers : {
                    "accept": "application/json",
                    "projectId" : "k2zo0h8zp1pi",
                    "Authorization": `Bearer ${contextData.jwt}`
                }
            });
            const data = await response.json();
            if(data.status === 'fail'){
                navigate('/login');
                return;
            }
            setData(data.data);
            let s = "";
            for(let i = 0; i < data.data.artist.length; i++){
                s += data.data.artist[i].name + ", ";
            }
            s = s.slice(0, s.length - 2);
            setArtists(s);
            console.log(data.data);
        }
        fetchData();
    }, []);
    return (
        <div className=" w-screen h-screen bg-black">
            {data && 
                <div className="flex flex-col items-center gap-10 m-20">   
                    <div className="flex flex-col items-center gap-5">
                        <img className=" w-96 h-96" src={data.thumbnail}/>
                        <h1 className=" text-slate-100 text-4xl">{data.title}</h1>
                        <p className=" text-slate-500">{artists}</p>
                    </div>
                    <audio src={data.audio_url} controls autoPlay={false} loop={false} />
                </div>
            }
        </div>
    );
}