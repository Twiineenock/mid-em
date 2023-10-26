import React from "react";
import '../CSS/gallery.css';


export default function Gallarey(){

    const pics = [
        {
            url: "public/b1.jpeg",
            name: "Maria"
        },
        {
            url: "public/b2.jpeg",
            name: "Joan"
        },
        {
            url: "public/b3.jpeg",
            name: "Jane"
        },
        {
            url: "public/b4.jpeg",
            name: "Jennifer"
        },
        {
            url: "public/b5.jpeg",
            name: "Janet"
        },{
            url: "public/b6.jpeg",
            name: "John"
        },
        {
            url: "public/b7.jpeg",
            name: "James"
        },
        {
            url: "public/b8.jpeg",
            name: "Judas"
        },
        {
            url: "public/b9.jpeg",
            name: "Job"
        },
        {
            url: "public/b10.jpeg",
            name: "Jacob"
        },
        {
            url: "public/b11.jpeg",
            name: "Justice"
        },
        {
            url: "public/b12.jpeg",
            name: "Love"
        },
        {
            url: "public/b13.jpeg",
            name: "Blessing"
        },
        {
            url: "public/b14.jpeg",
            name: "Judge"
        },
        {
            url: "public/b15.jpeg",
            name: "Kirabo"
        },
        {
            url: "public/b16.jpeg",
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