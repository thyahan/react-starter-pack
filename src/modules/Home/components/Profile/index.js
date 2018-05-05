import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <div className='cover'></div> 
                <div className='content'>
                    <div className='content-left'></div>
                    <div className='content-center'></div>
                    <div className='content-right'></div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {

};

export default Profile;