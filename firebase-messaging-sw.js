importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCWtxW8Fu4A0cGRbY_EI7Y2wJSbyqQShXk",
    authDomain: "test-c0d7c.firebaseapp.com",
    projectId: "test-c0d7c",
    storageBucket: "test-c0d7c.firebasestorage.app",
    messagingSenderId: "684690322210",
    appId: "1:684690322210:web:b3df589bfad23ba73eeb7b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body
    });

});