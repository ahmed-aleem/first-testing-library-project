import React, { Props, ReactElement } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header.component';
import rootReducer from '../../redux/root-reducer';

afterEach(cleanup);

function renderWithRedux( component: ReactElement, {store = createStore(rootReducer)} ={}){
    return {
    ...render(<Provider store={store}>{component}</Provider>)
    }
}

it('renders', () => {
    const {asFragment} = renderWithRedux(<Header />);
    expect(asFragment()).toMatchSnapshot();
})