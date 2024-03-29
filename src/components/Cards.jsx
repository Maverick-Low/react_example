import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Check out these epic destinations</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src = 'images/img-9.jpg' text = 'Explore the hidden waterfall deep inside thw Amazon Jungle' label = 'Adventure' path = '/services' />
                        <CardItem src = 'images/img-3.jpg' text = 'Yes' label = 'Adventure' path = '/services' />
                        <CardItem src = 'images/img-6.jpg' text = 'Explore the hidden waterfall deep inside thw Amazon Jungle' label = 'Adventure' path = '/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
    }

export default Cards
