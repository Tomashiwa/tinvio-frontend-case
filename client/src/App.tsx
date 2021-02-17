import { useState } from 'react';
import './App.css';
import { UserContext, UserState, USERSTATE_BLANK } from './UserContext';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserSelector from './UserSelector';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [userState, setUserState] = useState<UserState>(USERSTATE_BLANK);

  	return (
		<div className="App">
			<UserContext.Provider value={{userState, setUserState}}>
				<div className="user-container">
					{
						userState.id == -1
							? <></>
							: <>
								<UserDetails name={userState.name} phone={userState.phone} keywords={userState.keywords} address={userState.address}/>
								<UserPosts id={userState.id} name={userState.name}/>
							</>
					}
				</div>
				<UserSelector />
			</UserContext.Provider>
		</div>
  	);
}

export default App;
