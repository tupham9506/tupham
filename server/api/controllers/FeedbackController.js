/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create (req, res) {
    let params = req.allParams();
    Feedback.createFeedback(params);
    return res.send();
  }

};

