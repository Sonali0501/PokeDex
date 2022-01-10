import React from 'react';
import { Card, Button, Modal, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPokemonDetails, resetPokemonDetails } from '../../actionCreators';
import StatItem from '../StatItem';
import './PokeCard.scss';

const PokeCard = ({id, name, img, url, details, fetchPokemonDetails, resetPokemonDetails}) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => {
        resetPokemonDetails();
        setShow(false)
    };
    const handleShow = () => {
        fetchPokemonDetails(url);
        setShow(true);
    };

    return (
        <>
        <Card className="card">
        <Card.Img variant="top" className="cardImg" src={img} alt='Image Unavailable' />
        <Card.Body style={{ paddingBottom:'0px' }}>
            <Card.Title className="cardTitle">{name}</Card.Title>
            <Button className="cardBtn" variant="dark" onClick={handleShow}>Show Details</Button>
        </Card.Body>
        </Card>
        <Modal
            className="modal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title style={{ textTransform:'uppercase' }}>{details?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="wrapper">
                    <div className="basicInfo">
                        <div className="top">
                            <p className="id">#{details?.id}</p>
                            <img className="img" src={img} alt='Image Unavailable' />
                        </div>
                        <div className="bottom">
                            {details?.types.map((item, index) => {
                                return <Badge key={index} >{item.type.name}</Badge>
                            })}
                        </div>
                    </div>
                    <div className="statList">
                        {details?.stats.map((item, index) => {
                            return <StatItem key={index} value={item.base_stat} title={item.stat.name} />
                        })
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return { 
      details: state.details
    }
  }

export default connect(mapStateToProps,{ fetchPokemonDetails, resetPokemonDetails })(React.memo(PokeCard));