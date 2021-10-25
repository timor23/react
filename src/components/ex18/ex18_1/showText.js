import React from "react";

const ShowText = () => {
    const [maxLength, setMaxLength] = React.useState(30);
    const [text, setText] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);
    const [spanStyle, setSpanStyle] = React.useState(
        {
            color: 'blue',
            cursor: 'pointer',
            display: 'none'
        }
    )

    const handleText = (e) => {
        let str = e.target.value;
        setText(str);
        let tempObj = {...spanStyle};
        if (str.length > maxLength) {
            tempObj['display'] = 'block';
        } else {
            tempObj['display'] = 'none';
        }
        setSpanStyle(tempObj);
    }

    return (
        <div>
            <textarea name="text" id="txt" cols="30" rows="10" onChange={handleText}></textarea>
            <div style={{inlineSize: '400px', overflowWrap: 'break-word'}}>
                {showAll ? text : text.substr(0, maxLength)}
                <span style={spanStyle}
                      onClick={() => setShowAll(!showAll)}>{showAll ? '...show less' : '...show more'}</span>
            </div>
        </div>
    )
}

export default ShowText;