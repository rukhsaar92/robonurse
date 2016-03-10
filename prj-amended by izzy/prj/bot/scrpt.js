<script>
  var pb = new Pandorabot("aiaas.pandorabots.com", YOUR_APP_ID, YOUR_BOTNAME, YOUR_USER_KEY); // These should match the creds with which you created the bot
  function doTalk() {
    var input = document.getElementById("yousay").value;
    document.getElementById("yousay").value = "";
    pb.talk(input, function(data) {
      var response = data["responses"];
      document.getElementById("response").innerHTML = response;
      console.log(response);
    });
  }
</script>