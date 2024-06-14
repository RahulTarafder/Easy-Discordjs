const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  User,
  EmbedBuilder,
  Options,
} = require("discord.js");

class BOT extends Client {
  constructor() {
    super({
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
      ],
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      shards: "auto",
      failIfNotExists: false,
      allowedMentions: {
        parse: ["everyone", "roles", "users"],
        users: [],
        roles: [],
        repliedUser: false,
      },
    });
    this.send(interaction, message) = interaction.channel.send(message);
    this.reply(interaction, message) = interaction.reply(message);
    this.embed(message, color) = new EmbedBuilder().setColor(color).setDescription(`${message.substring(0, 3000)}`);
  }
    
  start(token) {
    this.login(token);
  }
  /**
   *
   * @param {User} user
   * @returns
   */
   
  // apiRequest
/* Emitted before every API request. This event can emit several times for the same request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    */
apiRequest(code) { 
  client.on("apiRequest", async (request) => {code})
};

// apiResponse
/* Emitted after every API request has received a response. This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    */
apiResponse(code) { 
  client.on("apiResponse", async (response) => {code})
};

// the previous, apiRequest and apiResponse, are informational events that are emitted quite frequently, it is highly recommended to check request.path to filter the data.

// channelCreate
/* Emitted whenever a channel is created.
PARAMETER    TYPE        DESCRIPTION
channel      Channel     The channel that was created    */
channelCreate(code) {
client.on("channelCreate", async (channel) => {code});
};

// channelDelete
/* Emitted whenever a channel is deleted.
PARAMETER   TYPE      DESCRIPTION
channel     Channel   The channel that was deleted    */
channelDelete(code) {
client.on("channelDelete", async (channel) => {code});
};

// channelPinsUpdate
/* Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
PARAMETER    TYPE         DESCRIPTION
channel      Channel      The channel that the pins update occurred in
time         Date         The time of the pins update    */
channelPinsUpdate(code) {
client.on("channelPinsUpdate", async (channel, time) => {code});
};

// channelUpdate
/* Emitted whenever a channel is updated - e.g. name change, topic change.
PARAMETER        TYPE        DESCRIPTION
oldChannel       Channel     The channel before the update
newChannel       Channel     The channel after the update    */
channelUpdate(code) {
client.on("channelUpdate", async (oldChannel, newChannel) => {code});
};

// debug
/* Emitted for general debugging information.
PARAMETER    TYPE         DESCRIPTION
info         string       The debug information    */
debug(code) {
client.on("debug", async (info) => {code});
};

// emojiCreate
/* Emitted whenever a custom emoji is created in a guild.
PARAMETER    TYPE          DESCRIPTION
emoji        Emoji         The emoji that was created    */
emojiCreate(code) {
client.on("emojiCreate", async (emoji) => {code});
};

// emojiDelete
/* Emitted whenever a custom guild emoji is deleted.
PARAMETER    TYPE         DESCRIPTION
emoji        Emoji        The emoji that was deleted    */
emojiDelete(code) {
client.on("emojiDelete", async (emoji) => {code});
};

// emojiUpdate
/* Emitted whenever a custom guild emoji is updated.
PARAMETER    TYPE       DESCRIPTION
oldEmoji     Emoji      The old emoji
newEmoji     Emoji      The new emoji    */
emojiUpdate(code) {
client.on("emojiUpdate", async (oldEmoji, newEmoji) => {code});
};

// error
/* Emitted whenever the client's WebSocket encounters a connection error.
PARAMETER    TYPE     DESCRIPTION
error        Error    The encountered error    */
error(code) {
client.on("error", async (error) => {code});
};

// guildBanAdd
/* Emitted whenever a member is banned from a guild.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that the ban occurred in
user         User          The user that was banned    */
guildBanAdd(code) {
client.on("guildBanAdd", async (guild, user) => {code});
};

// guildBanRemove
/* Emitted whenever a member is unbanned from a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that the unban occurred in
user         User         The user that was unbanned    */
guildBanRemove(code) {
client.on("guildBanRemove", async (guild, user) => {code});
};

// guildCreate
/* Emitted whenever the client joins a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The created guild    */
guildCreate(code) {
client.on("guildCreate", async (guild) => {code});
};

// guildDelete
/* Emitted whenever a guild is deleted/left.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that was deleted    */
guildDelete(code) {
client.on("guildDelete", async (guild) => {code});
};

// guildIntegrationsUpdate
/* Emitted whenever a guild integration is updated
PARAMETER   TYPE    DESCRIPTION
guild       Guild   The guild whose integrations were updated   */
guildIntegrationsUpdate(code) {
client.on("guildIntegrationsUpdate", async (guild) => {code});
};

// guildMemberAdd
/* Emitted whenever a user joins a guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has joined a guild    */
guildMemberAdd(code) {
client.on("guildMemberAdd", async (member) => {code});
};

// guildMemberAvailable
/* Emitted whenever a member becomes available in a large guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that became available    */
guildMemberAvailable(code) {
client.on("guildMemberAvailable", async (member) => {code});
};

// guildMemberRemove
/* Emitted whenever a member leaves a guild, or is kicked.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has left/been kicked from the guild    */
guildMemberRemove(code) {
client.on("guildMemberRemove", async (member) => {code});
};

// guildMembersChunk
/* Emitted whenever a chunk of guild members is received (all members come from the same guild).
PARAMETER      TYPE                      DESCRIPTION
members        Array<GuildMember>        The members in the chunk
guild          Guild                     The guild related to the member chunk    */
guildMembersChunk(code) {
client.on("guildMembersChunk", async (members, guild, chunk) => {code});
};

// guildMemberUpdate
/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    */
guildMemberUpdate(code) {
client.on("guildMemberUpdate", async (oldMember, newMember) => {code});
};

// guildScheduledEventCreate
/* Emitted whenever a guild scheduled event is created.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The created guild scheduled event   */
guildScheduledEventCreate(code) {
client.on("guildScheduledEventCreate", async (guildScheduledEvent) => {code});
};

// guildScheduledEventDelete
/* Emitted whenever a guild scheduled event is deleted.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The deleted guild scheduled event   */
guildScheduledEventDelete(code) {
client.on("guildScheduledEventDelete", async (guildScheduledEvent) => {code});
};

// guildScheduledEventUpdate
/* Emitted whenever a guild scheduled event gets updated.
PARAMETER                TYPE                   DESCRIPTION
oldGuildScheduledEvent   ?GuildScheduledEvent   The guild scheduled event object before the update
newGuildScheduledEvent   GuildScheduledEvent    The guild scheduled event object after the update  */
guildScheduledEventUpdate(code) {
client.on("guildScheduledEventUpdate", async (oldGuildScheduledEvent, newGuildScheduledEvent) => {code});
};

// guildScheduledEventUserAdd
/* Emitted whenever a user subscribes to a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who subscribed */ 
guildScheduledEventUserAdd(code) {
client.on("guildScheduledEventUserAdd", async (guildScheduledEvent, user) => {code});
};

// guildScheduledEventUserRemove
/* Emitted whenever a user unsubscribes from a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who unsubscribed */ 
guildScheduledEventUserRemove(code) {
client.on("guildScheduledEventUserRemove", async (guildScheduledEvent, user) => {code});
};

// guildUnavailable
/* Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that has become unavailable    */
guildUnavailable(code) {
client.on("guildUnavailable", async (guild) => {code});
};

// guildUpdate
/* Emitted whenever a guild is updated - e.g. name change.
PARAMETER     TYPE      DESCRIPTION
oldGuild      Guild     The guild before the update
newGuild      Guild     The guild after the update    */
guildUpdate(code) {
client.on("guildUpdate", async (oldGuild, newGuild) => {code});
};

// interaction
/* DEPRECATED - Use interactionCreate instead */

// interactionCreate
/* Emitted when an interaction is created.
PARAMETER     TYPE          DESCRIPTION
interaction   Interaction   The interaction which was created  */
interactionCreate(code) {
client.on("interactionCreate", async (interaction) => {code});
}

// invalidated
/* Emitted when the client's session becomes invalidated. 
NOTICE: You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event. 
so, I'm not putting in an example because you really shouldn't be rolling your own graceful shutdown unless you are silly like me. */

// invalidRequestWarning
/* Emitted periodically when the process sends invalid requests to let users avoid the 10k invalid requests in 10 minutes threshold that causes a ban
PARAMETER                   TYPE                        DESCRIPTION
invalidRequestWarningData   InvalidRequestWarningData   Object containing the invalid request info  */
invalidRequestWarning(code) {
client.on("invalidRequestWarning", async (invalidRequestWarningData) => {code});
};

// inviteCreate
/* Emitted when an invite is created.
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was created  */
inviteCreate(code) {
client.on("inviteCreate", async (invite) => {code});
};

// inviteDelete
/* Emitted when an invite is deleted. 
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was deleted */
inviteDelete(code) {
client.on("inviteDelete", async (invite) => {code});
};

// message
/* DEPRECATED - Use messageCreate instead */

// messageCreate
/* Emitted whenever a message is created.
PARAMETER   TYPE      DESCRIPTION
message     Message   The created message */
messageCreate(code) {
client.on("messageCreate", async (message) => {code});
};

// messageDelete
/* Emitted whenever a message is deleted.
PARAMETER      TYPE           DESCRIPTION
message        Message        The deleted message    */
messageDelete(code) {
client.on("messageDelete", async (message) => {code});
};

// messageDeleteBulk
/* Emitted whenever messages are deleted in bulk.
PARAMETER    TYPE                              DESCRIPTION
messages     Collection<Snowflake, Message>    The deleted messages, mapped by their ID    */
messageDeleteBulk(code) {
client.on("messageDeleteBulk", async (messages) => {code});
};

// messageReactionAdd
/* Emitted whenever a reaction is added to a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that applied the emoji or reaction emoji     */
messageReactionAdd(code) {
client.on("messageReactionAdd", async (messageReaction, user) => {code});
}

// messageReactionRemove
/* Emitted whenever a reaction is removed from a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that removed the emoji or reaction emoji     */
messageReactionRemove(code) {
client.on("messageReactionRemove", async (messageReaction, user) => {code});
};

// messageReactionRemoveAll
/* Emitted whenever all reactions are removed from a message.
PARAMETER          TYPE           DESCRIPTION
message            Message        The message the reactions were removed from    */
messageReactionRemoveAll(code) {
client.on("messageReactionRemoveAll", async (message) => {code});
};

// messageReactionRemoveEmoji
/* Emitted when a bot removes an emoji reaction from a cached message.
PARAMETER   TYPE              DESCRIPTION
reaction    MessageReaction   The reaction that was removed */
messageReactionRemoveEmoji(code) {
client.on("messageReactionRemoveEmoji", async (reaction) => {code});
};

// messageUpdate
/* Emitted whenever a message is updated - e.g. embed or content change.
PARAMETER     TYPE           DESCRIPTION
oldMessage    Message        The message before the update
newMessage    Message        The message after the update    */
messageUpdate(code) {
client.on("messageUpdate", async (oldMessage, newMessage) => {code});
};

// presenceUpdate
/* Emitted whenever a guild member's presence changes, or they change one of their details.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the presence update
newMember    GuildMember        The member after the presence update    */
presenceUpdate(code) {
client.on("presenceUpdate", async (oldMember, newMember) => {code});
};

// rateLimit
/* Emitted when the client hits a rate limit while making a request
PARAMETER       TYPE            DESCRIPTION
rateLimitData   RateLimitData   Object containing the rate limit info   */
rateLimit(code) {
client.on("rateLimit", async (rateLimitData) => {
    console.log(`the rate limit has been hit!  Slow'r down a tad.`);
    console.log({rateLimitData});
});
}

// ready
/* Emitted when the client becomes ready to start working.    */
ready(code) {
client.on("ready", async () => {code});
};

// roleCreate
/* Emitted whenever a role is created.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was created    */
roleCreate(code) {
client.on("roleCreate", async (role) => {code});
};

// roleDelete
/* Emitted whenever a guild role is deleted.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was deleted    */
roleDelete(code) {
client.on("roleDelete", async (role) => {code});
};

// roleUpdate
/* Emitted whenever a guild role is updated.
PARAMETER      TYPE        DESCRIPTION
oldRole        Role        The role before the update
newRole        Role        The role after the update    */
roleUpdate(code) {
client.on("roleUpdate", async (oldRole, newRole) => {code});
};

// shardDisconnect
/* Emitted when a shard's WebSocket disconnects and will no longer reconnect.
PARAMETER   TYPE         DESCRIPTION
event       CloseEvent   The WebSocket close event
id          number       The shard id that disconnected */
shardDisconnect(code) {
client.on("shardDisconnect", async (event, id) => {code});
};

// shardError
/* Emitted whenever a shard's WebSocket encounters a connection error.
PARAMETER   TYPE    DESCRIPTION
error       Error   The encountered error
shardId     number  The shard that encountered this error   */
shardError(code) {
client.on("shardError", async (error, shardId) => {});
};

// shardReady
/* Emitted when a shard turns ready.
PARAMETER            TYPE               DESCRIPTION
id                   number             The shard id that turned ready
unavailableGuilds    ?Set <Snowflake>   Set of unavailable guild ids, if any  */
shardReady(code) {
client.on("shardReady", async (id, unavailableGuilds) => {code});
};

// shardReconnecting
/* Emitted when a shard is attempting to reconnect or re-identify.
PARAMETER   TYPE     DESCRIPTION
id          number   The shard id that is attempting to reconnect   */
shardReconnecting(code) {
client.on("shardReconnecting", async (id) => {code});
};

// shardResume
/* Emitted when a shard resumes successfully.
PARAMETER        TYPE     DESCRIPTION
id               number   The shard id that resumed
replayedEvents   number   The amount of replayed events   */
shardResume(code) {
client.on("shardResume", async (id, replayedEvents) => {code});
};

// stageInstanceCreate
/* Emitted whenever a stage instance is created.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The created stage instance  */
stageInstanceCreate(code) {
client.on("stageInstanceCreate", async (stageInstance) => {code});
};

// stageInstanceDelete
/* Emitted whenever a stage instance is deleted.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The deleted stage instance   */
stageInstanceDelete(code) {
client.on("stageInstanceDelete", async (stageInstance) => {code});
};

// stageInstanceUpdate
/* Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level
PARAMETER          TYPE             DESCRIPTION
oldStageInstance   ?StageInstance   The stage instance before the update
newStageInstance   StageInstance    The stage instance after the update     */
stageInstanceUpdate(code) {
client.on("stageInstanceUpdate", async (oldStageInstance, newStageInstance) => {code});
};

// stickerCreate
/* Emitted whenever a custom sticker is created in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was created  */
stickerCreate(code) {
client.on("stickerCreate", async (sticker) => {code});
};
// stickerDelete
/* Emitted whenever a custom sticker is deleted in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was deleted  */
stickerDelete(code) {
client.on("stickerDelete", async (sticker) => {code});
};

// stickerUpdate
/* Emitted whenever a custom sticker is updated in a guild.
PARAMETER    TYPE      DESCRIPTION
oldSticker   Sticker   The old sticker
newSticker   Sticker   The new sticker      */
stickerUpdate(code) {
client.on("stickerUpdate", async (oldSticker, newSticker) => {code});
};

// threadCreate
/* Emitted whenever a thread is created or when the client user is added to a thread.
PARAMETER      TYPE            DESCRIPTION
thread         ThreadChannel   The thread that was created
newlyCreated   boolean         Whether the thread was newly created  */
threadCreate(code) {
client.on("threadCreate", async (thread, newlyCreated) => {code});
};

// threadDelete
/* Emitted whenever a thread is deleted.
PARAMETER   TYPE            DESCRIPTION
thread      ThreadChannel   The thread that was deleted     */
threadDelete(code) {
client.on("threadDelete", async (thread) => {code});
};

// threadListSync
/* Emitted whenever the client user gains access to a text or news channel that contains threads
PARAMETER   TYPE                                    DESCRIPTION
threads     Collection <Snowflake, ThreadChannel>   The threads that were synced */
threadListSync(code) {
client.on("threadListSync", async (threads) => {code});
};

// threadMembersUpdate
/* Emitted whenever members are added or removed from a thread. 
Permissions Required: GUILD_MEMBERS privileged intent
PARAMETER    TYPE                                   DESCRIPTION
oldMembers   Collection <Snowflake, ThreadMember>   The members before the update
newMembers   Collection <Snowflake, ThreadMember>   The members after the update    */
threadMembersUpdate(code) {
client.on("threadMembersUpdate", async (oldMembers, newMembers) => {code});
};

// threadMemberUpdate
/* Emitted whenever the client user's thread member is updated.
PARAMETER   TYPE           DESCRIPTION
oldMember   ThreadMember   The member before the update
newMember   ThreadMember   The member after the update      */
threadMemberUpdate(code) {
client.on("threadMemberUpdate", async (oldMember, newMember) => {code});
}

// threadUpdate
/* Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
PARAMETER   TYPE            DESCRIPTION
oldThread   ThreadChannel   The thread before the update
newThread   ThreadChannel   The thread after the update     */
threadUpdate(code) {
client.on("threadUpdate", async (oldThread, newThread) => {code});
};

// typingStart
/* Emitted whenever a user starts typing in a channel.
PARAMETER      TYPE            DESCRIPTION
channel        Channel         The channel the user started typing in
user           User            The user that started typing    */
typingStart(code) {
client.on("typingStart", async (channel, user) => {code});
};

// userUpdate
/* Emitted whenever a user's details (e.g. username) are changed.
PARAMETER      TYPE        DESCRIPTION
oldUser        User        The user before the update
newUser        User        The user after the update    */
userUpdate(code) {
client.on("userUpdate", async (oldUser, newUser) => {code});
};

// voiceStateUpdate
/* Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
PARAMETER    TYPE             DESCRIPTION
oldMember    GuildMember      The member before the voice state update
newMember    GuildMember      The member after the voice state update    */
voiceStateUpdate(code) {
client.on("voiceStateUpdate", async (oldMember, newMember) => {code});
};

// warn
/* Emitted for general warnings. 
PARAMETER    TYPE       DESCRIPTION
info         string     The warning   */
warn(code) {
client.on("warn", async (info) => {code});
};

// webhookUpdate
/* Emitted whenever a channel has its webhooks changed.
PARAMETER   TYPE           DESCRIPTION
channel     TextChannel    The channel that had a webhook update
            NewsChannel
            VoiceChannel        */
webhookUpdate(code) {
client.on("webhookUpdate", async (channel) => {code});
 };
}

module.exports = client = new BOT;

process.on("unhandledRejection", (reason, p) => {

    console.log(" [Error_Handling] :: Unhandled Rejection/Catch");

    console.log(reason, p);

});



process.on("uncaughtException", (err, origin) => {

    console.log(" [Error_Handling] :: Uncaught Exception/Catch");

    console.log(err, origin);

});



process.on("uncaughtExceptionMonitor", (err, origin) => {

    console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");

    console.log(err, origin);

});