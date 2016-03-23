const urlcode = require('urlcode-json')

module.exports = function(url){
    const id = url.query.v
    const list = url.query.list

    // https://developers.google.com/youtube/player_parameters
    const params = {
        autohide: 1,
        autoplay: 1,
        cc_load_policy: 0,
        color: 'white',
        iv_load_policy: 3,
        hl: 1,
        list: list,
        listType: 'playlist',
        // modestbranding: 1,
        // rel: 0,
        showinfo: 0
      }
      return '<iframe src="https://www.youtube.com/embed/' +
          escape(id) + '?' +
          urlcode.encode(params) + '">'
}
