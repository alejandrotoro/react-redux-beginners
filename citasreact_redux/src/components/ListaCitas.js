import React, {Component} from 'react';
import Cita from './Cita';

// Redux
import { connect } from 'react-redux';
import { getAppointments } from '../actions/appointmentsActions'

// localStorage
import store from '../store';
store.subscribe(() => {
    localStorage.setItem('citas', JSON.stringify(store.getState()));
})

class ListaCitas extends Component {

    componentDidMount() {
        this.props.getAppointments();
    }
    render() { 

        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';
    
        return ( 
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className="card-title text-center">{mensaje}</h2>
                        <div className="lista-citas">
                                {Object.keys(this.props.citas).map(cita => (
                                    <Cita
                                        key={cita}
                                        info={this.props.citas[cita] }
                                        idCita={cita}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
         )
    }
}

const mapStateToProps = state => ({
    citas: state.citas.citas
})
export default connect(mapStateToProps, {getAppointments}) (ListaCitas);
