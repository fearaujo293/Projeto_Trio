const items = [
{ id: 1, name: 'Item 1', description: 'Description 1' },
{ id: 2, name: 'Item 2', description: 'Description 2' },
{ id: 3, name: 'Item 3', description: 'Description 3' },
];

export const getItems = () => {
return new Promise((resolve) => {
setTimeout(() => {
resolve(items);
}, 1000);
});
};

export const createItem = (name, description) => {
const newItem = { id: items.length + 1, name, description };
items.push(newItem);
return newItem;
};

export const updateItem = (id, name, description) => {
const itemIndex = items.findIndex((item) => item.id === id);
if (itemIndex !== -1) {
items[itemIndex] = { id, name, description };
return items[itemIndex];
}
return null;
};