import React from 'react'

type Props = {
    name: string,
    phone: string,
    keywords: string[],
    address: string
}

export default function UserDetails(props : Props) {
    return (
        <div>
            <h1>USER DETAILS</h1>
        </div>
    )
}
