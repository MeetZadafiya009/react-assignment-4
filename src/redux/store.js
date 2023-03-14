import reducer from "./reducers";
import { createStore } from "redux";
const SAMPLE_PRDDUCTS = [{
    id: 'p1',
    price: 126,
    title: 'Man Perfume', 
    description: 'Denver - Hamilton',
},
{
    id: 'p2',
    price: 125,
    title: 'Man Deo',
    description: 'Navia - 24 hours refreshment',
},
];

const store=createStore(reducer,{allproducts:SAMPLE_PRDDUCTS},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;