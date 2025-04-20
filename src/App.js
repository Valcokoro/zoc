import Route from './components/Route';
import Home from './pages/Home';
import Lenders from './pages/Lenders';

function App(){
    return (
        <div>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/lend">
                <Lenders />
            </Route>
            
        </div>
    
        )
}


export default App