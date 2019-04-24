import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import firebase from 'firebase';


function hasAccountToken() {
    if (!localStorage.getItem('accountToken')) {
        return false;
    }
    return true;
    

    //let bool = false;
    //firebase.auth().onAuthStateChanged(function(user) {
    //    if (user) {
            /*
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            */
     //     bool = true;
    //    } else {
          // User is signed out.
         
     //   }
//}, function(error) {
       // console.log(error);
        
     // });
      
     // return bool;
}

export {hasAccountToken};