import { AsyncThunkAction, } from "@reduxjs/toolkit";
import Battletag from "../../../models/Battletag";
import IHTTPResponse from "../../../models/responses/HttpResponse";
import axios from "axios";
import battletagSearch from "./battletagSearchThunk";

jest.mock("axios");

const url = "https://playoverwatch.com/en-us/search/account-by-name/";

const mockBattletagArray: Battletag[] = [
	{
		id:          1,
		isPublic:    false,
		level:       2222,
		name:        "Dave",
		platform:    "pc",
		playerLevel: 378246,
		portrait:    "ikwe35852908hjioushrlgoikahnrlkgjhanlkrejg",
		urlName:     "Dave#42069",
	},
];

describe("battletagSearch Thunk", () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it("Should return data if status code equals 200.", async () => {
		const mockSearchInput = "Dave";

		const dispatch = jest.fn();

		const result: IHTTPResponse = {
			status: 200,
			data:   mockBattletagArray,
		};

		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(result);

		const createAccountAsyncThunkAction: AsyncThunkAction<
			unknown,
			unknown,
			Record<string, never>
		> = battletagSearch(mockSearchInput);

		const actual = await createAccountAsyncThunkAction(dispatch, () => "", undefined);

		expect(actual.meta.arg).toEqual(mockSearchInput);

		expect(actual.payload).toEqual(result.data);

		expect(axios.get).toBeCalledWith(url + mockSearchInput);
	});

	it("Should return an error if status code equals anything other than 200.", async () => {
		const mockSearchInput = "Dave";

		const dispatch = jest.fn();

		const result: IHTTPResponse = {
			status: 420,
			data:   [],
		};

		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(result);

		const createAccountAsyncThunkAction: AsyncThunkAction<
			unknown,
			unknown,
			Record<string, never>
		> = battletagSearch(mockSearchInput);

		const actual = await createAccountAsyncThunkAction(dispatch, () => "", undefined);

		expect(actual.meta.arg).toEqual(mockSearchInput);

		expect(actual.payload).toEqual("Something went wrong. (420)");
	});

	it("Should return an error if no results are found.", async () => {
		const mockSearchInput = "Dave";

		const dispatch = jest.fn();

		const result: IHTTPResponse = {
			status: 200,
			data:   [],
		};

		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(result);

		const createAccountAsyncThunkAction: AsyncThunkAction<
			unknown,
			unknown,
			Record<string, never>
		> = battletagSearch(mockSearchInput);

		const actual = await createAccountAsyncThunkAction(dispatch, () => "", undefined);

		expect(actual.meta.arg).toEqual(mockSearchInput);

		expect(actual.payload).toEqual("No Battletags found. Please Try again.");
	});

});
