import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Select from 'react-select'
import { UserContext, UserState } from './UserContext';
import { Option } from './Types'

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
                    return {
                        id: user.id,
                        name: user.name,
                        phone: user.phone.split(" ")[0],
                        address: `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode.split("-")[0]}`,
                        keywords: user.company.bs.split(" ").map((keyword : string) => {
                            	keyword = keyword.charAt(0).toUpperCase() + keyword.substr(1);
                            	return keyword;
                            })
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
            })
    }, [])

    const selectUser = (option : Option | null) => {
        if(option) {
            setUserState(users[option.value - 1]);
        }
    }

    return (
        <>
            <Select 
                options={options}
                onChange={selectUser}
                defaultValue={options[0]}
                isLoading={!hasLoaded}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
            />
        </>
    )
}