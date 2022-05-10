import React from "react";
import Menu from "../componets/layout/Menu";
import Conteudo from "../componets/layout/Conteudo";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Menu />
				<Conteudo />
			</BrowserRouter>
		</div>
	);
}

export default App;