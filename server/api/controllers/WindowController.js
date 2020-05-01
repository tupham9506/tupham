/**
 * ComputerControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index (req, res) {
    let programs = await Program.getList();
    res.send({
      programs
    });
  }
};

