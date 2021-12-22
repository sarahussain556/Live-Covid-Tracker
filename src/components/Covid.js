import React, { useEffect,useState }  from "react";
import './Covid.css';

const Covid=()=>{

    const[data,setData]=useState([]);

    const getCovidData=async ()=>{
        try{
        const res= await fetch('https://data.covid19india.org/data.json')//returns promise
        const actualData=await res.json();
        console.log(actualData.cases_time_series[0]);
        setData(actualData.cases_time_series[0]);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);


    return(
        <>
        <section>
            <h1 className="h1"> 🔴LIVE </h1>
            <h2 className="h2">COVID 19 CASES TRACKER </h2>
    

         <ul>
             <li className="card1">
                 <div className="card__main" >

                     <div className="card__inner" >
                         <p className="card_name" > <span>
                             OUR
                             </span>
                             <b>  COUNTRY</b>
                             </p>
                        <p className="card__total card__small" >
                            INDIA
                        </p>
                     </div>

                 </div>
             </li>

             <li className="card2">
                 <div className="card__main">

                     <div className="card__inner">
                         <p className="card_name"> <span>
                             Total 
                             </span>
                            <b>  RECOVERED CASES</b>
                             </p>
                        <p className="card__total card__small" color="black">
                            {data.totalrecovered}
                    

                        </p>
                     </div>

                 </div>
             </li>

             <li className="card3">
                 <div className="card__main">

                     <div className="card__inner">
                         <p className="card_name"> <span>
                             Total 
                             </span>
                             <b>  CONFIRMED CASES</b>
                             </p>
                        <p className="card__total card__small">
                            {data.totalconfirmed}
                        </p>
                     </div>

                 </div>
             </li>

              <li className="card4">
                 <div className="card__main">

                     <div className="card__inner">
                         <p className="card_name"> <span>
                             Total
                             </span>
                            <b>  DEATHS</b>
                             </p>
                        <p className="card__total card__small">
                        {data.totaldeceased}
                        </p>
                     </div>

                 </div>
             </li>

            
             <li className="card5">
                 <div className="card__main">

                     <div className="card__inner">
                         <p className="card_name"> <span>
                             Total
                             </span>
                            <b>  ACTIVE CASES</b>
                             </p>
                        <p className="card__total card__small">
                            {data.totalconfirmed -(data.totaldeceased+data.totalrecovered)}
                        </p>
                     </div>

                 </div>
             </li>

             <li className="card6">
                 <div className="card__main">

                     <div className="card__inner">
                         <p className="card_name"> <span>
                             Daily
                             </span>
                            <b>  RECOVERED </b>
                             </p>
                        <p className="card__total card__small">
                            {data.dailyrecovered}
                        </p>
                     </div>

                 </div>
             </li>
        </ul>
        </section>
        </>
    )
}
export default Covid