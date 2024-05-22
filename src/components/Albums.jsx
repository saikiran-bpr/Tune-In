import Album from "./Album";
import {Carousel} from 'primereact/carousel'

export default function Albums({Data}){
    const arr = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '576px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
    return(
        <div className="max-w-7xl text-white flex gap-8 overflow-x-auto">
            {Data.map(it => {
                return <Album obj={it}/>
            })}
        </div>
    );
}
