import {Provider} from "react-redux";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import Display from "./components/Display";
import store from "./redux/store";
import TimerWrapper from "./components/TimerWrapper";


function App() {
    return (
        <Provider store={store}>
            <TimerWrapper>
                <Settings />
                <Timer />
                <Display />
            </TimerWrapper>
        </Provider>
    );
}

export default App;
