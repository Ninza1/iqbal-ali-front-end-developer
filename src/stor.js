import { createStore } from "redux"
import { rootred } from "./redux/reducer/index";

const store = createStore(
    rootred
)
export default store;