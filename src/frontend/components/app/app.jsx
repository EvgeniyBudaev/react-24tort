import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "@/frontend/components/header";
import styles from './app.module.scss'
import Registration from '@/frontend/components/auth/registration'


const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} exact />
      </Switch>
    </div>
  )
}

export default App
