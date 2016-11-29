(function($) {

    var userList = "https://jsonplaceholder.typicode.com/users";
    var div = $("div");

    function showUsers(data){
        var list = $("<ul></ul>");
        div.append(list);

        var response = $(data);
        response.each(function(i, elem) {

            var text = elem.name + " | Username: " + elem.username + " | Mail: " + elem.email + " | Phone: " + elem.phone;

            var li = $("<li></li>");
            li.text(text);

            li.appendTo(list);
        });

    }

    $("#getUsers").on("click", function() {

        $.getJSON(userList)
            .done(function(data) {
                showUsers(data);
            })
            .fail(function() {
                $(".container").append("<ul><li>Wystąpił błąd</li></ul>");
            });

    });

})(jQuery);