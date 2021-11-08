import React, {useState} from 'react';

export const HideComponents = () => {
    const [components, setComponents] = useState([
        {
            id: 1, title: 'Hello', content: 'React',
        },
        {
            id: 2, title: 'Hi', content: 'JS',
        },
        {
            id: 3, title: 'Bye', content: 'IDE',
        },])

    //task1
//відмалювати компоненти і 2 кнопки, за допомогою 1 кнопки видаляється завжди перший елемент, 2 - останній.
//     const hideItems = (hiddenItem) => {
//         const newArr = [...components];
//         if (hiddenItem !== 'first' && hiddenItem !== 'last') return;
//         hiddenItem === 'first' && newArr.shift();
//         hiddenItem === 'last' && newArr.pop();
//         setComponents(newArr);
//     }
//     return (
//         <div>
//             <br/>
//             <br/>
//             <button onClick={() => hideItems('first')}>delete first component</button>
//             <button onClick={() => hideItems('last')}>delete last component</button>
//             <div>
//                 {components.map(el => (
//                     <div key={el.id}>
//                         <hr/>
//                         {el.title}
//                         <br/>
//                         {el.content}
//                         <hr/>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )

    //task2
//кнопка, яка видаляє завжди перший елемент + кнопка реверт, яка вертає всьо на початковий стан.
//     const [hiddenItems, setHiddenItems] = useState([]);
//     const itemsOnUI = components.filter(el => !hiddenItems.includes(el.id));
//     const hideItems = () => {
//         const hiddenItem = itemsOnUI[0];
//         if (!hiddenItem) return;
//         setHiddenItems([...hiddenItems, hiddenItem.id]);
//     }
//     const revert = () => {
//         setHiddenItems([]);
//     }
//     return (
//         <div>
//             <button onClick={hideItems}>hide item</button>
//             <button onClick={revert}>revert</button>
//             <div>
//                 {
//                     itemsOnUI.map(el => (
//                         <div key={el.id}>
//                             <hr/>
//                             {el.title}
//                             <br/>
//                             {el.content}
//                             <hr/>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )

    //task3
//в кожній комп є кнопка, яка ту компоненту видаляє + реверт.
//     const [hiddenItems, setHiddenItems] = useState([]);
//     const itemsOnUI = components.filter(el => !hiddenItems.includes(el.id));
//     const hideItems = (hiddenItem) => {
//         setHiddenItems([...hiddenItems, hiddenItem.id]);
//     }
//     const revert = () => {
//         setHiddenItems([]);
//     }
//     return (
//         <div>
//             <button onClick={revert}>revert</button>
//             <div>
//                 {
//                     itemsOnUI.map(el => (
//                         <div key={el.id}>
//                             <hr/>
//                             {el.title}
//                             <br/>
//                             {el.content} - <button onClick={() => hideItems(el)}>hide item</button>
//                             <hr/>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )

 }



