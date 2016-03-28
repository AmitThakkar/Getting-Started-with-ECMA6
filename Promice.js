/**
 * Created by Amit Thakkar on 3/28/16.
 */
(() => {
    'use strict';
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Resolved');
        }, Number.parseInt(Math.random() * 10));
        setTimeout(() => {
            reject('Reject Resolved');
        }, Number.parseInt(Math.random() * 10));
    });
    promise1
        .then((successMessage) => {
            console.log("Success Handler Call with message", successMessage);
        }, (errorMessage) => {
            console.log("Error Handler Call with message", errorMessage);
        });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise Resolved');
        }, Number.parseInt(Math.random() * 10));
        setTimeout(() => {
            reject('Reject Resolved');
        }, Number.parseInt(Math.random() * 10));
    });
    promise2
        .then((successMessage) => {
            console.log("Success Handler Call with message", successMessage);
        })
        .catch((errorMessage) => {
            console.log("Catch Handler Call with message", errorMessage);
        });
})();