new Vue({
    // Link this Vue instance to the div made in the HTML
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },

    methods: {
        increase: function(step, event) {
            this.counter += step;
            console.log(event)
        },

        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        alertMe: function (event) {
            alert("Alert!");
        }
    }
});