
$(function () {
    $('#btn').click(function () {
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link == null || link == "", content == null || content == "") {
            alert("MAKE SURE TO FILL OUT IMPORTANT OPTIONS!");
            return false;
        }

        let i = 0;
        let inteval = setInterval(function () {
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });

    
      
        }, 50)



    });
});
