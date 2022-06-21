import React from "react";
import Menu from "../componets/layout/Menu";
import Conteudo from "../componets/layout/Conteudo";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});


const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={darkTheme}>
					<Conteudo />
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;