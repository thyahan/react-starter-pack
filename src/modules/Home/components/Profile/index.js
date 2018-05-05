import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import A from '../Test';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                {/* <div className='cover'></div> 
                <div className='content'>
                    <div className='content-left'></div>
                    <div className='content-center'></div>
                    <div className='content-right'></div>
                </div> */}
                <A />
            </div>
        );
    }
}

Profile.propTypes = {

};

export default Profile;