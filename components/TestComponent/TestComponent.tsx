import { Input, } from "@ui-kitten/components";
import { Button, Text, } from "react-native";
import React, { useState, } from "react";
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	incrementIfOdd,
	selectValue,
} from "../../redux/reducers/test/testSlice";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks";

export function TestComponent() {
	const count = useAppSelector(selectValue);

	const dispatch = useAppDispatch();

	const [ incrementAmount, setIncrementAmount, ] = useState("2");

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<>

			<Button title={"Decrement value"} onPress={() => dispatch(decrement())}
			>
                -
			</Button>
			<Text>{count}</Text>
			<Button title={"Increment value"} aria-label={"Increment value"} onPress={() => dispatch(increment())}>
                +
			</Button>
			<Input
				label={"Set increment amount"}
				aria-label={"Set increment amount"}
				value={incrementAmount}
				onChange={(e: any) => setIncrementAmount(e.target.value)}
			/>
			<Button title={"Add Amount"} onPress={() => dispatch(incrementByAmount(incrementValue))}>
                Add Amount
			</Button>
			<Button title={"Add with Async"} onPress={() => dispatch(incrementAsync(incrementValue))}>
                Add with Async
			</Button>
			<Button title={"Add If Odd"} onPress={() => dispatch(incrementIfOdd(incrementValue))}>
                Add If Odd
			</Button>
		</>
	);
}
