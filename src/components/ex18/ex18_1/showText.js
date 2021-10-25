import React from "react";
import TextInput from "./textInput";

const ShowText = () => {
    const [maxLength, setMaxLength] = React.useState(80);
    const [text, setText] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);

    const handleText = (e) => {
        let str = e.target.value;
        // if (str.length > maxLength) {
        //     setText(str.slice(0, maxLength));
        //     setShowAll(false);
        // } else {
        //     setText(e.target.value);
        // }
        setText(str);
    }

    return (
        <div>
            <textarea name="text" id="txt" cols="30" rows="10" onChange={handleText}></textarea>
            <div style={{inlineSize: '400px', overflowWrap: 'break-word'}}>
                {showAll ? text : text.substr(0, maxLength)}
                <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => setShowAll(!showAll)}>{showAll ? '...show less' : '...show more'}</span>
            </div>
        </div>
    )
}

export default ShowText;