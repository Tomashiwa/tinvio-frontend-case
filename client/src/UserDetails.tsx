import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

import './UserDetails.css'

type Props = {
    name: string,
    phone: string,
    keywords: string[],
    address: string
}

export default function UserDetails(props : Props) {
    return (
        <div className="details">
            <Card>
                <CardImg top height="auto" width="100%" src="image.jpg" alt="banner" />
                <CardBody>
                    <CardTitle tag="h2">{props.name}</CardTitle>
                    <div className="details-row">
                        <img src="phone.svg" alt="phone"/>
                        <CardText>{props.phone}</CardText>
                    </div>
                    <div className="details-row">
                        <img src="category.png" alt="keywords"/>
                        <CardText>{props.keywords.join(" • ")}</CardText>
                    </div>
                    <div className="details-row">
                        <img src="icon-24-shop.svg" alt="address"/>
                        <CardText>{props.address}</CardText>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
