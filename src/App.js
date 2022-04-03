import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

function App(){
    return (
        <div className="container">
            <Header />
            <Introduction />
            <CardContainer/>
        </div>
    );
    }

export default App;