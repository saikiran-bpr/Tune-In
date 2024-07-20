import { useNavigate } from "react-router-dom";
import MyContext from "../context/context";
import { useContext } from "react";

export default function Header(){
    const contextData = useContext(MyContext);
    const navigate = useNavigate();
    return (
        <header className="justify-around flex gap-72 h-16 items-center bg-[url('https://s3-alpha-sig.figma.com/img/2a03/e540/2d07727b90572a5c582bf8c1c7b77c80?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLEtg41wHS~axHd-cPFNtRxtSzYAq7~QawHv2eM4gKq5CPkVgwij2WFphb9dKeeTrnK7ttUrvg1ZsdFIddA8y9gjoBR7UoPkvbdPOfxV70Fr1W4i2Gd4gxvjMkGyWRHOpVvkyCrenqEvTx-Pesgz9uH32rRCz-TRUKvqDeuywsu99y3fjArDVyS9vzLbuBI0L39MQ0i-KcyQoM6FYMzjTS9ZP-AW8zFV~nyq~mZ3Bx4loedrFwyRwnBOxNh4usH~ZJFTFC5zQv2tCnFWzcllOkLcclDywwxNK05gHb0apG2vlG82pbwJfb3XYPaHEAMvM6l72RxyjXIxg47oSs5SmA__')]">
            <div className="flex items-center w-20 justify-between">
                <img className="w-6 h-6 " src="/Logo.png" />
                <img className="w-12 h-4" src="/Gaana.png" />
            </div>
            <button className="text-[rgba(152,158,162,1)] text-xs" onClick={() => {
                if(contextData.isSignedIn) contextData.updateContext({
                    name : "",
                    jwt : "",
                    isSignedIn : false
                });
                else navigate("/login");
            }} >{contextData.isSignedIn ? "Log out" : "Log In"}</button>
        </header>
    );
}