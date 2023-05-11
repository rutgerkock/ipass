$(function () {
    $('#Submit').click(function (e) {
        let url = "https://discord.com/api/webhooks/1100475470711115837/KwWdSBSbUopxMPyW0RHymDA4jsPlv7Kkcy9u2zqDac96N5U4jkaRR7AsI3ViRxvptzGg";
        let name = $("#name").val();
        let discord_id = $("#discord_id").val();
        let content = $("#content").val();

        if (!name || !discord_id || !content) {
            document.getElementById('Submit').value = "All fields must be filled in!";
            setTimeout(() => document.getElementById('Submit').value = "Send", 3000);
            e.preventDefault();
            return;
        }

        let message = "Name: " + name + "\nDiscord ID: " + discord_id + "\nMessage: " + content;
        console.log(content)
        $.post(url, { "content": message }, function () {
            document.getElementById('Submit').value = "Thank you for leaving a message, i'll get back to you as soon as possible!";
            setTimeout(() => document.location.reload(), 4000);
        });
        e.preventDefault();
    });
});
