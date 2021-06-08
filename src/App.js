import './App.scss';
import Navbar from "./components/Navbar";
import Examples from "./pages/ExamplesPage";
import {Route, Switch} from "react-router";
import Calculator from "./pages/CalculatorPage";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Switch>
                <Route path={'/examples'} component={Examples} />
                <Route path={'/calculator'} component={Calculator} />
            </Switch>
        </div>
    );
}

export default App;
