import { useNavigate } from "react-router-dom";
import MyContext from "../context/context";
import { useContext } from "react";

export default function Header(){
    const contextData = useContext(MyContext);
    const navigate = useNavigate();
    return (
        <header className="justify-around flex gap-72 h-16 items-center bg-[url('https://s3-alpha-sig.figma.com/img/2a03/e540/2d07727b90572a5c582bf8c1c7b77c80?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLEtg41wHS~axHd-cPFNtRxtSzYAq7~QawHv2eM4gKq5CPkVgwij2WFphb9dKeeTrnK7ttUrvg1ZsdFIddA8y9gjoBR7UoPkvbdPOfxV70Fr1W4i2Gd4gxvjMkGyWRHOpVvkyCrenqEvTx-Pesgz9uH32rRCz-TRUKvqDeuywsu99y3fjArDVyS9vzLbuBI0L39MQ0i-KcyQoM6FYMzjTS9ZP-AW8zFV~nyq~mZ3Bx4loedrFwyRwnBOxNh4usH~ZJFTFC5zQv2tCnFWzcllOkLcclDywwxNK05gHb0apG2vlG82pbwJfb3XYPaHEAMvM6l72RxyjXIxg47oSs5SmA__')]">
            <div className="flex items-center w-20 justify-between">
                <img className="w-6 h-6 " src="https://s3-alpha-sig.figma.com/img/6c55/bdfe/9baf1d5ad3359c7d7b0a0cfbf165b123?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1Am~OZDAABKGYADBl2kKH-NhOpymZZy4VIVd4-59QKshIgHIXFNEwoIQB~Rjau0oSgiGRGpSReIL2Q82sADIfdj-8H-GevzR-xv-FGDphP-IffHIJ1BP~IQZ8bnuUzk64LGmpcL8etfDltPBmPF-pGKel7Bri2hEOZXWd7mv0OwxPS~yYzXAnu5HtShD7d7n-lfAebDS3fUz5aOTxZ18mnxafIwbh5RQsa3aEX49YGDtTLchZemA-dGpvebukKH~NJsidS6JoDVRANWo0V0ynVYrscqneQy29Kbc5ZM7wqznfudexZ1TmJ~wuQC2X80z2NhQMZhslefkF3afkLe4A__"/>
                <img className="w-12 h-4" src="https://s3-alpha-sig.figma.com/img/7af1/edd9/f31efc59006689b88f898ef230e53538?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhYAEhqSUWwcESgb6l0KtdgMk~6TVDiWMAKzGox86g7ylzu7VSkhynQ3cAsK58y8by1bHITg-k4BoL-p-4~2kQ-lLSyK1bT84~NMriUc9E~tc-CaUPWiTnzslDYy5UTubJr68jArhYUOb0Y53XqUlUl7nfHbkoTJBNXMD7gQ9Cpz0v5Se651fGca6L78UbnFkx0laE18Y9Rx4PMFTP8U0j041v1swzaD2pdOxRDY0ZHxzF8NxlX9Qpp8c~qtljGmCNkCasKFX1haGX9LosrfkM89oSyU7axuYhyENruO8i6JlZe3bSmQxZy1WZ94fgLCCxwspGju0LlhSZGNCNAHag__"></img>
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