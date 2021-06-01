
module.exports={
    name:'warn',
    description: "Command ini digunakan untuk Ping",
    execute(message, args){
    let dUser = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
    if (!dUser) return message.channel.send("Can't find user!")
    let dMessage = args.join(" ").slice(22);
    if (dMessage.length < 1) return message.reply('what is the reason???')

    dUser.send(`${dUser}, You have been warned for doing ${dMessage} in the server ${message.guild.name}`)

    message.channel.send(`${dUser} has been warned Reason: ${dMessage} `)
}
    }

    