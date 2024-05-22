import { useEffect, useState } from "react";
import Box from "./Box";

export default function Main(){
    const [data, setData] = useState({
        Trending : [],
        Soother: [],
        Top50: [],
        Top20: [],
        EverGreen: [],
        happy: [],
        romantic: [],
        excited: [],
        sad : []
    });
    const [isLoading, setIsloading] = useState(true);
    const filterData = (data) => {
        const obj = {
            Trending : [],
            Soother: [],
            Top50: [],
            Top20: [],
            EverGreen: [],
            happy: [],
            romantic: [],
            excited: [],
            sad : []
        }
        console.log(data);
        data.forEach(it => {
            if(it.featured === "Trending songs")
                obj.Trending.push(it);
            else if(it.featured === "Soul soother")
                obj.Soother.push(it);
            else if(it.featured === "Top 50 of this month")
                obj.Top50.push(it);
            else if(it.featured === "Top 20 of this week")
                obj.Top20.push(it);
            else if(it.featured === "Evergreen melodies")
                obj.EverGreen.push(it);
            else
                obj[it.mood].push(it);
        });
        setData(obj);
        setIsloading(false);
    }
    useEffect(() => {
        fetch('https://academics.newtonschool.co/api/v1/musicx/song?limit=1000',{
            method: "GET",
            headers: {
                'accept': 'application/json',
                'projectID': 'k2zo0h8zp1pi'
            }
        })
        .then(response => response.json())
        .then(d => {
            filterData(d.data);
        });
    }, []);
    return (
        <main className="flex flex-col items-center">
            {isLoading ? <p className=" text-white">Loading...</p> : 
            <>
                <Box featured={"Trending Songs"} Data={data.Trending}/>
                <Box featured={"Top 20 of this Week"} Data={data.Top20}/>
                <Box featured={"Top 50 of this Month"} Data={data.Top50}/>
                <Box featured={"Soul soother"} Data={data.Soother}/>
                <Box featured={"Evergreen Melodies"} Data={data.EverGreen}/>
                <Box featured={"Happy"} Data={data.happy}/>
                <Box featured={"Sad"} Data={data.sad}/>
                <Box featured={"Romantic"} Data={data.romantic}/>
                <Box featured={"Exited"} Data={data.excited}/>
            </>
            }
        </main>
    );
}