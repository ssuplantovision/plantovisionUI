import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCookie } from 'react-cookie';
export const register = createAsyncThunk(
	'users/register',
	async ({ first_name, email, password }, thunkAPI) => {
		const body = JSON.stringify({
			first_name,
			email,
			password,
		});

		try {
			const res = await fetch('http://localhost:8000/api/users/register', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

			if (res.status === 201) {
				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

const getUser = createAsyncThunk('users/me', async (access, thunkAPI) => {
	
	console.log(access)
	try {
		const res = await fetch('http://localhost:8000/api/users/me', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${access}`,
			},
		});

		const data = await res.json();

		if (res.status === 200) {
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});

// const SingInComponent = (data) =>{
// 	const [cookies, setCookie] = useCookies(['access', 'refresh'])
// 	async function onSubmit(values) {

	
// 		let expires = new Date()
// 		expires.setTime(expires.getTime() + 1000)
// 		setCookie('access', data.access, { path: '/',  expires})
// 		setCookie('refresh', data.refresh, {path: '/', expires})
	
// 		// ...
// 	}
// }


export const login = createAsyncThunk(
	'users/token',
	async ({ email, password }, thunkAPI) => {
		const body = JSON.stringify({
			email,
			password,
		});
		

		try {
			const res = await fetch('http://localhost:8000/api/token/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

			if (res.status === 200) {
				const { dispatch } = thunkAPI;
				console.log(data.access)
				console.log("Cookie data:", data)
				document.cookie = `access_token=${data.access}; path=/`;
        		document.cookie = `refresh_token=${data.refresh}; path=/`;

				dispatch(getUser(data.access));
			
			
	
				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const checkAuth = createAsyncThunk(
	'users/verify',
	async (_, thunkAPI) => {
		const cookies = document.cookie.split(';');
		let access = null;
		for (const cookie of cookies) {
		  const [name, value] = cookie.trim().split('=');
		  if (name === 'access_token') {
			access = value;
			break;
		  }
		}
	
		if (!access) {
		  // Если "access_token" не найден, обработайте это по вашему усмотрению
		  return thunkAPI.rejectWithValue('Access Token не найден');
		}
		const body = JSON.stringify({
			token: access,
		});
		try {
			const res = await fetch('http://localhost:8000/api/token/verify/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

			if (res.status === 200) {
				const { dispatch } = thunkAPI;

				dispatch(getUser(access));

				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const logout = createAsyncThunk('users/logout', async () => {
	try {
		document.cookie = `access_token=${"dasdas"}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
		document.cookie = `refresh_token=${"dasdas"}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
	  return null;
	} catch (error) {
	  throw error;
	}
  });
const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetRegistered: state => {
			state.registered = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, state => {
				state.loading = false;
				state.registered = true;
			})
			.addCase(register.rejected, state => {
				state.loading = false;
			})
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(login.rejected, state => {
				state.loading = false;
			})
			.addCase(getUser.pending, state => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addCase(getUser.rejected, state => {
				state.loading = false;
			})
			.addCase(checkAuth.pending, state => {
				state.loading = true;
			})
			.addCase(checkAuth.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(checkAuth.rejected, state => {
				state.loading = false;
			})
			.addCase(logout.pending, state => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(logout.rejected, state => {
				state.loading = false;
			});
	},
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;