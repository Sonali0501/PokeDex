import React from 'react';
import './App.scss';
import CardsList from './components/CardsList';
import Header from './components/Header';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchData, fetchTypes } from './actionCreators';

const App = ({data, types, fetchData, fetchTypes}) => {

  const [type, setType] = React.useState('type');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    fetchTypes();
    fetchData('/pokemon/');
  },[]);

  React.useEffect(() => {
    if(type!='type'){
      fetchData(type);
    } else{
      fetchData('/pokemon/');
    }
  },[type])

  const onNextOrPrevious = (url) => {
    fetchData(url);
  };

  return (
    <div className="App">
      <Header types={types?.results} type={type} search={search} onTypeChange={(e) => setType(e.target.value)} onSearchChange={e => setSearch(e.target.value)} />
      {!data ? 'Loading' :
      <>
        <ButtonToolbar
          className="buttons"
          aria-label="Toolbar with Button groups"
        >
          <Button variant="light" onClick={() => onNextOrPrevious(data?.previous)} style={{ visibility: !(data?.previous) ? 'hidden' : 'visible' }}>Prev</Button>
          <Button variant="light" onClick={() => onNextOrPrevious(data?.next)} style={{ visibility: !(data?.next) ? 'hidden' : 'visible' }}>Next</Button>
        </ButtonToolbar>
        <CardsList data={type!=='type' ? data?.pokemon?.filter(i => i.pokemon.name.toLowerCase().includes(search)) : data?.results?.filter(i => i.name.toLowerCase().includes(search))} />
      </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    data: state.data,
    types: state.types
  }
}

export default connect(mapStateToProps,{ fetchData, fetchTypes })(React.memo(App));
