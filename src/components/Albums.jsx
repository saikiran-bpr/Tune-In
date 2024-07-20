import Album from "./Album";
import {Carousel} from 'primereact/carousel'

export default function Albums({Data}){
    return(
        <div className="max-w-7xl text-white flex gap-8 overflow-x-auto">
            {Data.map(it => {
                return <Album obj={it}/>
            })}
        </div>
    );
}
