import React from 'react';
import {connect} from 'react-redux';

import './top-city.styles.css';

interface Props {
    isCities: boolean,
    cities: {city_name: string}[],
    errorMessage: string
}

const TopCity: React.FC<Props> = (props: Props) => {

    const {isCities, cities, errorMessage} = props;

    const random = Math.floor(Math.random() * 50)

    return (
        <div className='top-cities-container'>
            <h3>Random Cities</h3>
            <div className='top-cities'>
                {
                    isCities ? cities.slice(random, random + 8).map((city, i)=>(
                        <div className='top-city'>
                        <h4>{city.city_name}</h4>
                        <span>{Math.floor(Math.random() * 200)}+ activities</span>
                        </div>
                    )) : <p> loading... </p>
                }
                {errorMessage.length > 0 && isCities ? <p>{errorMessage}</p> : null}
            </div>
        </div>
    )
}

interface BasicState{
    city: Props
}

const mapStateToProps = (state: BasicState) => ({
    isCities: state.city.isCities,
    cities: state.city.cities,
    errorMessage: state.city.errorMessage
})

export default connect(mapStateToProps)(TopCity)
