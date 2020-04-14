/**
 * ComputerControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index (req, res) {
    let feedbacks = await Feedback.getFeedbackList();

    res.send({
      feedbacks
    });
  }
};

