import React from "react";
import Menu from "../componets/layout/Menu";
import Conteudo from "../componets/layout/Conteudo";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Conteudo />
			</BrowserRouter>
		</div>
	);
}

export default App;