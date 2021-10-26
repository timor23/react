
const MarkAndDel = () => {

    const originalItems = ["one", "two", "three", "four", "five"];
    let items = originalItems;
    const itemsToBeDeleted = [];

    const handleChecked = (e) => {
        if (e.target.checked) {
            itemsToBeDeleted.push(e.target.value);
        } else {
            let index = itemsToBeDeleted.indexOf(e.target.value);
            itemsToBeDeleted.splice(index, 1);
        }
        console.log(itemsToBeDeleted);
    }

    const deleteItems = () => {
        for (let i = 0; i < itemsToBeDeleted.length; i++) {
            let index = items.indexOf(itemsToBeDeleted[i]);
            console.log(index);
            items.splice(index, 1);
            console.log(items);
        }
    }

    const reset = () => {
        items = originalItems;
    }
    return (
        <>
            <input type="button" value={'Delete'} onClick={deleteItems}/>
            <input type="button" value={'Reset'} onClick={reset}/>
            <ul style={{fontSize: '50px'}}>
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