import React from "react"
import { Switch, Route} from "react-router-dom"
import Blocks from './pages/blocks'
import Cards from './pages/blocks'
import Forms from './pages/blocks'
import Pricing from './pages/blocks'
import Index from './pages/blocks'



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/home" component={Index}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}