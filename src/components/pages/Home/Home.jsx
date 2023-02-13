import {  Navbar } from "../../Navbar/Navbar";
import { Card } from "../../Card/Card";
import { news } from "../../../Datas.js";


export default function Home() {
    return (
        <>
         <Navbar/>
    
 {news.map((item, index) => (<Card key={index} news={item}/>))}
         </>
   
    );
}