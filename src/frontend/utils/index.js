import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

function hasAccountToken() {
    if (!localStorage.getItem('accountToken')) {
        return false;
    }
    return true;
}

export {hasAccountToken};