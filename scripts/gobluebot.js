module.exports = function(robot) {
robot.respond(/Tell me your favorite (.*)/, function(msg) {
    var fav;
    fav = msg.match[1];
    console.log(fav);
    switch (fav) {
      case "joke":
        return msg.reply("I wanna make a jigsaw puzzle that’s 40,000 pieces… and when you finish it, it says ‘go outside.’");
        break;
      case "story":
        return msg.reply("I once opened a book store. I made the mystery novels extremely hard to find.");
        break;
      case "fun fact":
        return msg.reply("The boomarang is Australia’s chief export (and then import.)");
        break;
        case "advice":
        return msg.reply("The worst time to have a hard attack is during a game of charades.");
        break;
      default:
        return msg.reply("I don't know that but I do know this- if you love something set it free. Unless it's a tiger. What's yours?");
    }
  });
}
