import Item from '../Item/Item';
import './ItemsList.css';

const Items = () => {

    const items = [
        { _id: 1, category: "item", name: "TV Samsung", finalDate: "23.09.2023", daysLeft: 786 },
        { _id: 2, category: "item", name: "Washing machine LG", finalDate: "18.03.2024", daysLeft: 963 },
        { _id: 3, category: "medicine", name: "Augmentin 1000mg", finalDate: "10.08.2022", daysLeft: 377 },
        { _id: 4, category: "service", name: "Telenor", finalDate: "05.10.2021", daysLeft: 68 },
        { _id: 5, category: "item", name: "GSM Huawei mate 20 lite ", finalDate: "23.11.2021", daysLeft: 117 },
        { _id: 6, category: "service", name: "Assurance car", finalDate: "17.09.2021", daysLeft: 50 },
        { _id: 7, category: "medicine", name: "Panadol baby", finalDate: "15.02.2022", daysLeft: 201 },
        { _id: 8, category: "medicine", name: "Натриев цитрат", finalDate: "26.07.2021", daysLeft: -3 },
        { _id: 9, category: "service", name: "Обслужване кола", finalDate: "08.04.2021", daysLeft: -112 }
    ]

    return (
        <div id="items">
            <h3>List items</h3>
            <ul id="listItems">
                <li className="item-info"><p id="title-paragraph"><span className="span categorySpan">Category</span><span className="span nameSpan">Name</span><span className="span dateSpan">Expiry date</span><span className="span days-left-span">Days left</span><span className="span edit-title-span">Edit</span></p></li>
                {items.map(item =>
                    <Item
                        key={item._id}
                        id={item._id}
                        category={item.category}
                        name={item.name}
                        finalDate={item.finalDate}
                        daysLeft={item.daysLeft}
                    />
                )}
            </ul>
        </div>
    );
}

export default Items;
