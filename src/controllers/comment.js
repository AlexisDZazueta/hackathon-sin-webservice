// Dependencies
const Comments = require('../models/comment');
const Events = require('../models/event');
const Places = require('../models/place');

// Export modules
module.exports = {

  getComments: async (req, res, next) => {
    let comments = await Comments.find({ });
    res.status(200).json(comments);
  },
  getCommentsByEvent: async (req, res) => {
    let { eventId } = req.params;
    let event = await Events.findById(eventId);
    res.status(200).json(event.comments);
  },
  newComment: async (req, res) => {
    let { userId, eventId } = req.params;
    req.body.userId = userId;
    req.body.eventId = eventId;
    let event = await Events.findById(eventId);
    let place = await Places.findById(eventId);
    if (event) {
      let comment = await new Comments(req.body);
      await comment.save();
      event.comments.push(comment);
      await event.save();
    } if (place) {
      let comment = await new Comments(req.body);
      await comment.save();
      place.comments.push(comment);
      await place.save();
    }
    res.status(200).json(comment);
  },
  deleteComment: async (req, res, next) => {
    let { commentId } = req.params;
    let comment = await Comments.findById(commentId);
    let event = await Events.findById(comment.eventId);
    if (event) {
      event.comments.pop(commentId);
      await event.save();
    }
    await Comments.findByIdAndRemove(commentId);
    res.status(200).json({ success: true, message: 'Comentario eliminado exitosamente' })
  }
  
};