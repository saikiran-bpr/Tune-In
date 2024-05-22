
import { createContext, useState } from "react";

const MyContext = createContext({
    name : "",
    jwt : "",
    updateContext : () => {}
});

function ContextProvider({children}){
    const [data, setData] = useState({
        name : "",
        jwt : "",
        isSignedIn : false
    });
    const updateContext = (obj) => {
        setData({...obj});
    }
    return (
        <MyContext.Provider value={{...data, updateContext}}>
            {children}
        </MyContext.Provider>
    );
}
export default MyContext;
export {ContextProvider};