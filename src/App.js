import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import { Fragment } from 'react'
import { MainHeader } from './components/MainHeader'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Fragment>
  )
}

export default App
