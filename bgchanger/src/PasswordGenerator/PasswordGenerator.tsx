import { useCallback, useEffect, useRef, useState } from "react";


const PasswordGenerator = () => {

    const [lenght , setLenght] = useState<any>(8);
    const [number , setNumber] = useState<boolean>(false);
    const [inputchar , setInputChar] = useState<boolean>(false);
    const [inputPassword, setInputPassword] = useState<string>("");

    const passwordRef = useRef<HTMLInputElement>(null);
    const [passwordArray , setPasswordArray] = useState<string[]>([]);

    const passwordGenerator = useCallback(() =>{
        let pass="";
        let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(number){
            str += "1234567890";
        }
        if(inputchar){
            str += `+=!@#$%^&*(){}:"?.,"`;
        }

        for(let i=1; i <= lenght ; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setInputPassword(pass);

    },[lenght , number , inputchar , setInputPassword])


    useEffect(() => {
        passwordGenerator();
    },[lenght,number,inputchar]);

    const rangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setLenght(e.target.value)
    }

    const numberCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.checked)
    }

    const inputCharHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputChar(e.target.checked)
    }

    const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setInputPassword(e.target.value)
    }

    const copyButtonHandler = () => {
        //setPasswordArray((prev) => [...prev, inputPassword]);

        setPasswordArray((prev) => prev.includes(inputPassword) ? prev : [...prev, inputPassword]);
        
        passwordRef.current?.select();
        navigator.clipboard.writeText(inputPassword);
    }

    return(
        <>
            <div className="fix top-0 left-0 bg-black h-screen w-screen flex items-center justify-center text-white">
                <div className="bg-gray-700 rounded-[20px] p-5 max-w-[500px] w-full relative">
                    <h2 className="text-[32px] font-bold text-white text-center mb-4">Password Generator</h2>
                    <div className="flex rounded-[10px] overflow-hidden mb-4">
                        <div className="relative w-full">
                            <input type="text" className="bg-white  text-base text-black px-4 py-2 w-full" value={inputPassword} onChange={inputPasswordHandler} ref={passwordRef} />
                            <button className="cursor-pointer absolute top-[10px] right-[10px]" onClick={passwordGenerator}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <button className="bg-orange-700 p-2 text-white min-w-[100px] cursor-pointer" onClick={copyButtonHandler}>Copy</button>
                    </div>

                    <div className="flex gap-3 flex-wrap justify-center">
                        <div className="text-white text-base flex gap-1 w-full justify-center">
                            <input type="range" min={6} max={100} value={lenght} onChange={rangeInputHandler} />
                            <label>Password Lenght({lenght})</label>
                        </div>
                        <div className="text-white text-base flex gap-1 align-center">
                            <input type="checkbox" checked={number} className="h-5 w-5" onChange={numberCheckHandler} />
                            <label>Number</label>
                        </div>
                        <div className="text-white text-base flex gap-1 align-center">
                            <input type="checkbox" checked={inputchar} className="h-5 w-5" onChange={inputCharHandler} />
                            <label>Charactor</label>
                        </div>
                    </div>
                    <ul>
                        {passwordArray.map((password , index) => {
                            return <li key={index}><strong className="min-w-[20px] inline-block">{index} - </strong> {password}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PasswordGenerator;