import React, { createContext, useReducer, PropsWithChildren } from "react";

export const initialValues = {
	unit: "metric",
	city: "Delhi",
	mode: "light",
} as any;

export const WeatherContext = createContext({ weatherData: initialValues, setUnit: (_val: string) => {}, setCity: (_val: string) => {}, setMode: () => {} });

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_UNIT_VALUE":
			return { ...state, unit: action.data };
		case "SET_CITY_VALUE":
			return { ...state, city: action.data };
		case "SET_MODE_VALUE":
			return { ...state, mode: action.data };
	}
};

export const WeatherContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialValues);

	const setUnit = (input: string) => {
		dispatch({ type: "SET_UNIT_VALUE", data: input });
	};

	const setCity = (input: string) => {
		dispatch({ type: "SET_CITY_VALUE", data: input });
	};

	const setMode = () => {
		dispatch({ type: "SET_MODE_VALUE", data: state.mode === "light" ? "dark" : "light" });
	}

	return (
		<WeatherContext.Provider
			value={{
				weatherData: state,
				setUnit,
				setCity,
				setMode
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
