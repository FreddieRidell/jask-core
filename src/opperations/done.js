import R from "ramda";

import { setProp, } from "../actionCreators";
import createFilterFunction from "../createFilterFunction";

export default ({ filter, }) => ({
	opperationFilter: createFilterFunction(filter),
	returnFilter: R.T,
	opperationActionCreator: R.map(({ uuid, }) =>
		setProp({
			uuid,
			prop: "done",
			value: new Date().getTime(),
		}),
	),
});
