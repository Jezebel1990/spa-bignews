import { Card } from "../../Card/Card";
import {  Navbar } from "../../Navbar/Navbar";
import { news } from "../../../Datas.js";
import { HomeBody } from "./HomeStyled";

export default function Home() {
    return (
        <>
    <Navbar/>
    <HomeBody>
    {news.map((item, index) => (<Card key={index} news={item}/>))}
    </HomeBody>
         </>
   
    );
}