exports.install = function() {
	ROUTE('GET /' , beranda)
};

function beranda() {
	var self = this;
	var helper = require('../helpers/ythelper');
	helper.ambilListVideo(helper.utils.hengkiVideo).then((d)=>{
		var data = d.data.items[0];
		console.log(data.snippet.thumbnails.default);
		self.view('index', {resData:data});
	});
}