import { useState, useContext, useEffect } from 'react';
import { UserContext, UserState } from './UserContext';
import { Option } from './Types'

import axios from 'axios';
import Select from 'react-select'
import { Spinner } from 'reactstrap';

import './css/UserSelector.css'

const URL_USER_DETAILS = "https://jsonplaceholder.typicode.com/users/";

type UserDetails = {
    id: number,
    name: string,
    phone: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    },
    company: {
        bs: string
    }
}

export default function UserSelector() {
    const {setUserState} = useContext(UserContext);

    const [hasLoaded, setHasLoaded] = useState<Boolean>(false);
    const [users, setUsers] = useState<UserState[]>([]);
    const [options, setOptions] = useState<Option[]>([]);

    useEffect(() => {
        axios.get(`${URL_USER_DETAILS}`)
            .then(usersRes => {
                let newUsers : UserState[] = usersRes.data.map((user : UserDetails) => {
                    let address = `${user.address.street}, 
                        ${user.address.suite}, ${user.address.city} 
                        ${user.address.zipcode.split("-")[0]}`
                    let keywords = user.company.bs.split(" ").map((keyword : string) => {
                        keyword = keyword.charAt(0).toUpperCase() + keyword.substr(1);
                        return keyword;
                    }) 
                    return {
                        id: user.id,
                        name: user.name,
                        phone: user.phone.split(" ")[0],
                        address,
                        keywords
                    }
                });

                let newOptions: Option[] = newUsers.map((user: UserState) => {
                    return {
                        label: user.name,
                        value: user.id
                    }
                });

                setUsers(newUsers);
                setOptions(newOptions);
                setHasLoaded(true);
                setUserState(newUsers[0]);
            })
    }, [])

    const selectUser = (option : Option | null) => {
        if(option) {
            setUserState(users[option.value - 1]);
        }
    }

    return (
        <div className="user-selector">
            {
                options.length == 0
                    ? <div className="spinner-area">
                        <Spinner color="secondary"/>
                    </div>
                    : <Select 
                        options={options}
                        onChange={selectUser}
                        defaultValue={options[0]}
                        isLoading={!hasLoaded}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                    />
            }
        </div>
    )
}
