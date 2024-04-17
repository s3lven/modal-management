import { useItems, useItemsDispatch } from '../context/ItemsContext'
import { useModalContext } from '../context/ModalContext'

let nextId = 0

export default function Home() {
    const {openModal} = useModalContext()
    const items = useItems()
    
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <button onClick={() => {
                openModal("AddItemModal", {nextId: nextId})
                nextId++
            }}
                className='bg-emerald-500 text-center rounded border-none box-border
                    text-white text-2xl outline-none px-12 py-8 font-semibold
                    hover:bg-emerald-700 focus:bg-emerald-700'>
                Add Item
            </button>
            <div className="p-5">
                <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Item item={item} />    
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

function Item({ item }) {
    const {openModal} = useModalContext()
    const dispatch = useItemsDispatch();
    
    return (
        <label>
            <>
                {item.id}
                {item.name}
                {item.number}
                {/* Open update modal */}
                <button onClick={() => openModal("UpdateItemModal", {item})}>
                    Edit
                </button>
            </>
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: item.id
                });
            }}>
            Delete
            </button>
        </label>
    )
}