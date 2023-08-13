import { useEffect, useState } from "react";
import React from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/7uqt4f.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        console.log("go");
    }, []);

    function getMemeImage() {
        const random = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[random].url;
        console.log("go image");
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {

        const { name, value } = event.target;
        console.log("go event");
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }
        ))
    }

    return (
        <div className="main">
            <div className="form">
                <input type="text"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText} />
                <input type="text"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText} />
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>

                </div>

                <div className="meme">
                    <h2 className="meme-toptext">{meme.topText}</h2>
                    <img src={meme.randomImage} alt="" className="meme--img" />
                    <h2 className="meme-bottomtext">{meme.bottomText}</h2>


            </div>

        </div>
    )
}


