import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import MyContext from '../context/context';
export default function Login(){
    const contextData = useContext(MyContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email : "",
        password: ""
    });
    const [state, setState] = useState(false);
    const checkPassword = (str) => {
        if(str.length < 6) return false;
        let lowerCase = false, upperCase = false, special = false;
        for(let i = 0; i < str.length; i++){
            if(str[i] >= 'a' && str[i] <= 'z') lowerCase = true;
            if(str[i] >= 'A' && str[i] <= 'Z') upperCase = true;
            if (str[i] === '@' || str[i] === '#' || str[i] === '$' || str[i] === '%' || 
                str[i] === '^' || str[i] === '&' || str[i] === '*' || str[i] === '(' || str[i] === ')' || 
                str[i] === '_') {
                special = true;
            }
        }
        return lowerCase && upperCase && special;
    }
    const checkData = (userData) => {
        if(!userData.email || !userData.password) setState(false);
        else if(userData.email.includes('@') && checkPassword(userData.password)) setState(true);
        else setState(false);
    }
    const handleChange = (e) => {
        setUserData(prev => {
            checkData({
                ...prev,
                [e.target.name] : e.target.value
            });
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state){
            alert("All feilds are requried\nEmail must have '@'\nThe password should be at least 6 letters and should include both lower, and uppercase letters and symbols[@#$%^&*()_]");
            return;
        }
        const submitData = async () => {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method : "POST",
                headers : {
                    'accept': 'application/json',
                    'projectID': 'k2zo0h8zp1pi',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({...userData, "appType": "music"}),
            });
            const result = await response.json();
            if(result.status === 'fail'){
                alert(result.message);
                return;
            }
            contextData.updateContext({jwt : result.token, name : result.data.user.name, isSignedIn: true});
            setUserData({
                email : "",
                password: ""
            });
            navigate('/');
        }
        submitData();
    }

    return (
        <div className="text-[rgba(27,27,27,1)] w-screen h-screen flex flex-col justify-center items-center">
            <div style={{
                backgroundImage : "url('/Background.png')"
            }} className="flex flex-col gap-6 justify-center items-center w-[85%] h-[85%] bg-cover bg-center">
                <div className="flex flex-col justify-center items-center gap-6">
                    <img src="/GaanaLogo.png" />
                    <h2 className=" text-[rgba(209,212,212,1)] text-3xl">Listen to Gaana Non-Stop</h2>
                    <h1 className="text-[rgba(219,43,47,1)] text-3xl">Log In</h1>
                </div>
                <form className="flex flex-col gap-3 items-center" onSubmit={handleSubmit}>
                    <input value={userData.name} className="focus:outline-none w-80 h-16 bg-[rgba(28,28,28,1)] border-[1px] pl-4 border-[rgba(227,44,48,1)] text-slate-200" type="text" placeholder="Email" name="email" onChange={handleChange}/>
                    <input value={userData.password} className="focus:outline-none w-80 h-16 bg-[rgba(28,28,28,1)] border-[1px] pl-4 border-[rgba(227,44,48,1)] text-slate-200" type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <button type="submit" className={state ? "w-36 h-12 bg-red-500" : "w-36 h-12 bg-red-200"}>Log In</button>
                </form>
                <p className=' text-[rgba(221,221,221,1)]'>Dont have a account?  <Link to="/signup" className=' text-red-500 font-light underline'>Create one</Link></p>
            </div>
        </div>
    );
}