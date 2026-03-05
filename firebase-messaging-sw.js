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

self.addEventListener("push", function (event) {

    const payload = event.data.json();
    const data = payload.data || {};

    const options = {
        body: data.body,
        image: data.image,
        icon: data.image,
        data: {
            url: data.url
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener("notificationclick", function (event) {

    event.notification.close();

    const url = event.notification.data.url;

    event.waitUntil(
        clients.openWindow(url)
    );
});