export const createPromiseThunk = (type, promiseFn) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	return param => async (dispatch, getState) => {
		dispatch({ type, param });

		try {
			const payload = await promiseFn(param);
			dispatch({ type: SUCCESS, payload });
		} catch (e) {
			dispatch({ type: ERROR, error: e });
		}
	};
};

/* Reducer에서 사용할 상태 관련 함수들 */
export const reducerUtils = {
	init: (initialData = null) => ({
		loading: false,
		data: initialData,
		error: null,
	}),

	/* 로딩 중
	 * prevState에 값을 입력하여 기존 값 유지 가능 */
	loading: (prevState = null) => ({
		loading: true,
		data: prevState,
		error: null,
	}),

	/* 성공 */
	success: payload => ({
		loading: false,
		data: payload,
		error: null,
	}),

	/* 실패 */
	error: error => ({
		loading: false,
		data: null,
		error: error,
	}),
};

/* 비동기 관련 액션들을 처리하는 Reducer
 * keepData : 기존 데이터가 있는 경우 이를 유지하며 새로운 데이터를 호출 함 */
export const handleAsyncActions = (type, key, keepData = false) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

	return (state, action) => {
		switch (action.type) {
			case type:
				return {
					...state,
					[key]: reducerUtils.loading(
						keepData ? state[key].data : null,
					),
				};
			case SUCCESS:
				return {
					...state,
					[key]: reducerUtils.success(action.payload),
				};
			case ERROR:
				return {
					...state,
					[key]: reducerUtils.error(action.error),
				};
			default:
				return state;
		}
	};
};
