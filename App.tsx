import "./App.css";
import Counter from "./components/Counter";

function App() {
  // const arr = [
  //   {
  //     inventoryItem: {
  //       inventoryLevel: [
  //         { quantity: 123 },
  //         { quantity: 14 },
  //         { quantity: 121 },
  //       ],
  //     },
  //   },
  //   {
  //     inventoryItem: {
  //       inventoryLevel: [{ quantity: 21 }, { quantity: 21 }, { quantity: 11 }],
  //     },
  //   },
  //   {
  //     inventoryItem: {
  //       inventoryLevel: [{ quantity: 23 }, { quantity: 14 }, { quantity: 12 }],
  //     },
  //   },
  // ];

  // const sum = arr.reduce((acc, item) => {
  //   const result = item.inventoryItem.inventoryLevel;
  //   const newItem = result.reduce((accItem, currItem) => {
  //     return accItem + currItem.quantity;
  //   }, 0);
  //   return acc + newItem;
  // }, 0);
  // console.log(sum);

  return <Counter />;
}

export default App;
