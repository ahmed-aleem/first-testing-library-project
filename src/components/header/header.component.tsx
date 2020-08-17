import React, { ComponentType } from 'react';
import {connect} from 'react-redux';
import {setSearch} from '../../redux/city.actions';
import { Dispatch } from 'redux';

import './header.styles.css';

interface Props {
    searchKey: string,
    filteredCities: [{city_name: string}],
    setSearch: Function
}

const Header: React.ComponentType<Props> = (props) => {

    const {searchKey, filteredCities, setSearch} = props;

    return (
        <div className='header'>
            <h1>Welcome to Telangana!</h1>
            <p>Explore activities in 50+ cities across the state with us</p>
            <div className='search-section'>
                <input className='search-input' type='search' name='search' placeholder='search for a city in telangana' value={searchKey} onChange={(event) => setSearch(event.target.value)}/>
                <div className='search-results-container'>
                {
                    filteredCities.length > 0 && filteredCities[0].city_name && filteredCities.map((city, i) => (
                    <a key={i} href='/' className='search-result'>{city.city_name}</a>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

interface BasicState {
    city: {
        searchKey: string,
        filteredCities: {city_name: string}[]
    }
}

const mapStateToProps = (state: BasicState) => ({
    searchKey: state.city.searchKey,
    filteredCities: state.city.filteredCities
})

const mapDispatchToProps = (dispatchEvent: Dispatch) => ({
    setSearch: (key: string) => dispatchEvent(setSearch(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header as ComponentType<{}>);
