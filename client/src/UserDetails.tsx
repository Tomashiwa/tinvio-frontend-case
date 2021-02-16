import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

import phoneIcon from './assets/phone.svg'
import keywordIcon from './assets/category.png'
import addressIcon from './assets/icon-24-shop.svg'
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
                <div className="details-banner" />
                <CardBody>
                    <CardTitle tag="h2">{props.name}</CardTitle>
                    <div className="details-row">
                        <img src={phoneIcon} alt="phone"/>
                        <CardText>{props.phone}</CardText>
                    </div>
                    <div className="details-row">
                        <img src={keywordIcon} alt="keywords"/>
                        <CardText>{props.keywords.join(" • ")}</CardText>
                    </div>
                    <div className="details-row">
                        <img src={addressIcon} alt="address"/>
                        <CardText>{props.address}</CardText>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
