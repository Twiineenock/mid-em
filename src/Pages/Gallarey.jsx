import React from "react";
import '../CSS/gallery.css';


export default function Gallarey(){

    const pics = [
        {
            url: "../../dist/b1.jpeg",
            name: "Maria"
        },
        {
            url: "dist/b2.jpeg",
            name: "Joan"
        },
        {
            url: "dist/b3.jpeg",
            name: "Jane"
        },
        {
            url: "dist/b4.jpeg",
            name: "Jennifer"
        },
        {
            url: "dist/b5.jpeg",
            name: "Janet"
        },{
            url: "dist/b6.jpeg",
            name: "John"
        },
        {
            url: "dist/b7.jpeg",
            name: "James"
        },
        {
            url: "dist/b8.jpeg",
            name: "Judas"
        },
        {
            url: "dist/b9.jpeg",
            name: "Job"
        },
        {
            url: "dist/b10.jpeg",
            name: "Jacob"
        },
        {
            url: "dist/b11.jpeg",
            name: "Justice"
        },
        {
            url: "dist/b12.jpeg",
            name: "Love"
        },
        {
            url: "dist/b13.jpeg",
            name: "Blessing"
        },
        {
            url: "dist/b14.jpeg",
            name: "Judge"
        },
        {
            url: "dist/b15.jpeg",
            name: "Kirabo"
        },
        {
            url: "dist/b16.jpeg",
            name: "Nakimuli"
        },
       
    ];

    const photos = pics.map((pic) => (
        <div className="pic--container">
            <img src={pic.url} alt="picture" className="image"/>
            <span className="name">{pic.name}</span>
        </div>
    ))

    return(
        <div>
            {photos}
        </div>
        
    )
}