import React, { createContext, useReducer, PropsWithChildren } from "react";

export const initialValues = {
	unit: "",
	city: "",
};

export const WeatherContext = createContext({});

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_UNIT_VALUE":
			return { ...state, unit: action.data };

		case "SET_CITY_VALUE":
			return { ...state, city: action.data };
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
	return (
		<WeatherContext.Provider
			value={{
				weatherData: state,
				setUnit,
				setCity,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
