import React, { Component } from 'react';
import { connect } from 'react-redux';


import Header from './components/Header';

class Home extends Component{
    render(){
        return (
            <Header />
        )
    }
}

const mapState = (state) => ({

});

const mapDispach = (dispach) => ({

});

export default connect(mapState,mapDispach)(Home);