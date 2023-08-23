import {Provider} from "react-redux";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import Display from "./components/Display";
import store from "./redux/store";


function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Settings />
                <Timer />
                <Display />
            </div>
        </Provider>
    );
}

export default App;
