import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }; 
    const searchCache=useSelector((store)=>store.search);
    useEffect(()=>{
        const timer=setTimeout(()=>{if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestions();
        }},200);
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions=async ()=>{
        console.log("API CALL-"+searchQuery);
        const data=await fetch(SEARCH_API+searchQuery);
        const json=await data.json();
        
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]:json[1],
        }));
    };
    return(
        <div  className="grid grid-flow-col p-5 m-4 shadow-lg">
            <div className="flex col-span-1 cursor-pointer">
                <img className="h-8"
                onClick={()=>toggleMenuHandler()}
                alt="menu"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdqgxY6HhT6trjf7ASBTrRnLnNLXnlT8WYw&s"
                />
                <img className="h-10 ml-3"
                alt="logo"
                src="https://banner2.cleanpng.com/20180626/tui/aay4cy8ep.webp"
                />
            </div>
            <div className="col-span-10 px-10">
                <div>
                <input 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                className="px-4 py-2 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
                <button className="border border-gray-400 p-2 rounded-r-full">search</button>
            </div>
            {showSuggestions && <div className="fixed py-2 px-5 bg-white w-[46rem] shadow-lg rounded-lg">
               <ul>
                {suggestions.map((s)=>(<li key={s} className="py-2 shadow-sm hover:bg-gray-100">{s}</li>))}
               </ul>
            </div>}
            </div>
            <div className="col-span-1">
                <img className="h-8"
                  alt="user"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s"
                  />
            </div>
        </div>
    );
};
export default Head;
