import Route from './components/Route';
import Home from './pages/Home';
import Lenders from './pages/Lenders';
import Dashboard from './pages/Dashboard';


function App(){
    return (
        <div>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/lend">
                <Lenders />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            
        </div>
    
        )
}


export default App