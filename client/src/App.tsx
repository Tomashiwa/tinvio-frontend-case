import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Post } from './Types';
import { UserContext, UserState, USERSTATE_BLANK } from './UserContext';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserSelector from './UserSelector';



function App() {
	const [userState, setUserState] = useState<UserState>(USERSTATE_BLANK);

	const [id, setId] = useState(1);
	const [details, setDetails] = useState({
		name: "",
		phone: "",
		keywords: [],
		address: ""
	});
	const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	Promise.all([axios.get(`${URL_USER_DETAILS}${id}`), axios.get(`${URL_USER_POSTS}${id}`)])
	// 		.then(results => {
	// 			const receivedDetails = results[0].data;
	// 			const capitalisedKeywords = receivedDetails.company.bs.split(" ").map((keyword : string) => {
	// 				keyword = keyword.charAt(0).toUpperCase() + keyword.substr(1);
	// 				return keyword;
	// 			})
	// 			const cleanDetails = {
	// 				name: receivedDetails.name,
	// 				phone: receivedDetails.phone.split(" ")[0],
	// 				address: `${receivedDetails.address.street}, ${receivedDetails.address.suite}, ${receivedDetails.address.city} ${receivedDetails.address.zipcode.split("-")[0]}`,
	// 				keywords: capitalisedKeywords
	// 			};

	// 			const receivedPosts = results[1].data;
	// 			const cleanPosts = receivedPosts.map((post : Post) => { return {
	// 				id: post.id,
	// 				title: post.title,
	// 				body: post.body
	// 			}})

	// 			setDetails(cleanDetails);
	// 			setPosts(cleanPosts);
	// 			console.log(cleanDetails);
	// 			console.log(cleanPosts);
	// 		});
	// }, [id])

  	return (
		<div className="App">
			<UserContext.Provider value={{userState, setUserState}}>
				{
					userState.id == -1
						? <></>
						: <>
							<UserDetails name={userState.name} phone={userState.phone} keywords={userState.keywords} address={userState.address}/>
							{/* <UserPosts name={userState.name} posts={userState.posts}/> */}
						</>
				}
				<UserSelector />
			</UserContext.Provider>
		</div>
  	);
}

export default App;
