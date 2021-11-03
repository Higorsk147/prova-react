import React from "react"
import { Switch, Route} from "react-router-dom"
import Blocks from './pages/blocks'



export const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/" component={ndex} exact/>
            <Route path="/home" component={index}/> */}
            <Route path="/blocks" component={Blocks}/>
            {/* <Route path="/cards" component={cards}/>
            <Route path="/forms" component={forms}/>
            <Route path="/pricing" component={pricing}/> */}
        </Switch>
    )
}