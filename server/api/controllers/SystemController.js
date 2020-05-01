/**
 * SystemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async migrate (req, res) {
   await Program.create({
      author: {
        icon_link: 'images/programs/author.png',
        name: 'author',
        title: 'Tác giả',
        component: 'author',
        data: [{
          key: 'Tên',
          value: 'Phạm Bảo Tú',
          icon: 'mdi-account'
        }, {
          key: 'Ngày sinh',
          value: '20/06/1995',
          icon: 'mdi-calendar'
        }, {
          key: 'Địa chỉ',
          value: 'Trương Định, Hoàng Mai, Hà Nội',
          icon: 'mdi-city'
        }, {
          key: 'Số điện thoại',
          value: '0969 616 090',
          icon: 'mdi-phone'
        }, {
          key: 'Email',
          value: 'tupham9506@gmail.com',
          icon: 'mdi-email'
        }, {
          key: 'Github',
          value: 'tupham9506',
          type: 'link',
          link: 'https://github.com/tupham9506',
          icon: 'mdi-github'
        }]
      }
    });
   return res.send('Success');
  }

};

