document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // You can perform further actions with the entered data here
        // For this example, we'll just log the values to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // You can also send the data to a server using AJAX or fetch
        // For simplicity, we'll just show an alert
        alert('Data sent successfully!');
    });
});
