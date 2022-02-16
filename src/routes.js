import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom";

import Login from './pages/Login';
import NewBook from './pages/NewBook';

import Book from "./pages/Book";

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login}/>
                <Route path ="/book" exact component = {Book}/>
                <Route path = "/book/new" component = {NewBook} />
            </Switch>
        </BrowserRouter>
        );
}