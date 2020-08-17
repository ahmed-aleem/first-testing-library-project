import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import {fetchCitiesAsync} from './redux/city.actions';
import Header from './components/header/header.component';
import TopCity from './components/top-city/top-city.component';

interface Props{
  initializeCities: Function
}

const App: React.FC<Props> = (props: Props) => {

  const {initializeCities} = props;

  useEffect(() => {

    initializeCities();
    
  }, [initializeCities])

  return (
    <div className="App">
      <Header />
      <TopCity/>
    </div>
  )
}

const mapDispatchToProps = (dispatchEvent: ThunkDispatch<{}, {}, Action<string>>) => ({
  initializeCities: () => dispatchEvent(fetchCitiesAsync())
})

export default connect(null, mapDispatchToProps)(App);
