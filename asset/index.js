define([], function () {
    return {
        init: function ($mod) {

            $mod.on('click', '.bt-back', function (e) {
                var link = this.getAttribute('data-link');
                if (link) {
                    location.href = link;
                } else {

                    history.go(1 - history.length)
                }

            })
        }
    }
})
