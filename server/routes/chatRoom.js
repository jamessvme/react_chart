const express = require("express");
const models = require("../models");
const router = express.Router({ mergeParams: true });
/* GET users listing. */
router.get("/chatrooms", async (req, res, next) => {
    const chatRooms = await models.ChatRoom.findAll();
    console.log(chatRooms);
    res.send(chatRooms);
});


router.post("/chatroom", async (req, res, next) => {
    const room = req.body.room;
    const chatRooms = await models.ChatRoom.findAll({
        where: { name: room },
    });
    const chatRoom = chatRooms[0];
    if (!chatRoom) {
        await models.ChatRoom.create({ name: room });
    }

    console.log(chatRooms)
    res.send(chatRooms);
});

router.get("/chatroom/messages/:chatRoomName", async (req, res, next) => {
    try {
        const chatRoomName = req.params.chatRoomName;
        const chatRooms = await models.ChatRoom.findAll({
        where: {
            name: chatRoomName,
        },
        });
        const chatRoomId = chatRooms[0].id;
        const messages = await models.ChatRoomMessages.findAll({
        where: {
            chatRoomId,
        },
        });
        res.send(messages);
    } catch (error) {
        res.send([]);
    }
});
module.exports = router;