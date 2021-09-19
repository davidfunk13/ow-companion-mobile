import React from "react";
import { Button, Text, } from "react-native";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	selectValue,
} from "../../redux/reducers/test/testSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

export function TestComponent() {
	const count = useAppSelector(selectValue);

	const dispatch = useAppDispatch();

	const incrementValue = 5;

	return (
		<>
			<Text>Total: {count}</Text>
			<Text>Increment by: {incrementValue}</Text>
			<Button title={"Decrement value"} onPress={() => dispatch(decrement())}/>
			<Button title={"Increment value"} aria-label={"Increment value"} onPress={() => dispatch(increment())}/>
			<Button title={"Add with Async"} onPress={() => dispatch(incrementAsync(incrementValue))}/>
			<Button title={"Add Amount"} onPress={() => dispatch(incrementByAmount(incrementValue))}/>			
		</>
	);
}
