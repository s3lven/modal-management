import { createContext, useContext, useReducer } from 'react';

const ItemsContext = createContext(null);
const ItemsDispatchContext = createContext(null);

export function ItemsProvider({ children }) {
    const [items, dispatch] = useReducer(
        itemsReducer,
        initialItems
    );

    return (
        <ItemsContext.Provider value={items}>
        <ItemsDispatchContext.Provider value={dispatch}>
            {children}
        </ItemsDispatchContext.Provider>
        </ItemsContext.Provider>
    );
}

// Hooks
export function useItems() { return useContext(ItemsContext) }

export function useItemsDispatch() { return useContext(ItemsDispatchContext) }

function itemsReducer(items, action) {
    switch (action.type) {
        case 'added': {
            return [...items, {
                id: action.id,
                name: action.name,
                category: action.category,
                number: action.number
            }];
        }
        case 'changed': {
            return items.map(t => {
                if (t.id === action.item.id) {
                return action.item;
                } else {
                return t;
                }
            });
        }
        case 'deleted': {
            return items.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialItems = [];
