import React from 'react';
import './Header.scss';
import { FormControl, Form } from 'react-bootstrap';

const Header = ({types, type, search, onTypeChange, onSearchChange}) => {
    return (
        <div className="header">
            <p className="brand">PokeDex</p>
            <div className="filters">
            <FormControl
                value={search}
                className="searchbar"
                placeholder="Search by name"
                aria-label="Pokemon name"
                aria-describedby="basic-addon2"
                onChange={onSearchChange}
                />
            <Form.Select value={type} onChange={onTypeChange} aria-label="Default select example" style={{ maxWidth:'150px' }}>
                <option value='type'>Type</option>
                {types?.map((type, index) => {
                    return <option value={type.url} key={index}>{type.name}</option>
                })}
            </Form.Select>
            </div>
        </div>
    )
}

export default React.memo(Header);