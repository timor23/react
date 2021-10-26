import React from "react";

const originalItems = ["one", "two", "three", "four", "five"];
const MarkAndDel = () => {

    const [items, setItems] = React.useState(originalItems);

    let itemsToBeDeleted = [];

    const handleChecked = (e) => {
        if (e.target.checked) {
            itemsToBeDeleted.push(e.target.value);
        } else {
            let index = itemsToBeDeleted.indexOf(e.target.value);
            itemsToBeDeleted.splice(index, 1);
        }

    }

    const deleteItems = () => {
        for (let i = 0; i < itemsToBeDeleted.length; i++) {
            let index = items.indexOf(itemsToBeDeleted[i]);
            console.log(index);
            items.splice(index, 1);
            console.log(items);
            itemsToBeDeleted = [];
        }
    }

    const reset = () => {
        setItems(originalItems);
        console.log(items)
    }
    return (
        <>
            <input type="button" value={'Delete'} onClick={deleteItems}/>
            <input type="button" value={'Reset'} onClick={reset}/>
            <ul style={{fontSize: '50px', listStyle: 'none'}}>
                {items.map(item => (
                    <li>
                        <input type="checkBox" value={item} onChange={handleChecked}/>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </>);
}

export default MarkAndDel;