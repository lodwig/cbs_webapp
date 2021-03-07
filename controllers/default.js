exports.install = function() {
	ROUTE('GET /' , beranda)
	ROUTE('GET /playlist', playlist)
};

function beranda() {
	var self = this;
	generateResData().then((data)=>{
		console.log(data);
		self.view('index', {resData:data})
	})
	
	// var helper = require('../helpers/ythelper');
	// helper.ambilListVideo(helper.utils.hengkiVideo).then((d)=>{
	// 	var data = d.data.items[0];
	// 	self.view('index', {resData:data});
	// });
}

generateResData = async ()=> {
	var helper = require('../helpers/ythelper');
	var resData = {};
	var c  = await helper.ambilListVideo(helper.utils.hengkiVideo)
	resData.dataChannel = c.data.items[0];
	var v = await helper.ambilListVideo(helper.utils.listVideo)
	resData.dataVideo = v.data.items
	console.log(resData)
	
	return resData;
}


function playlist() {
	var data = generateResData()
	console.log(data)
	// var self = this;
	// var helper = require('../helpers/ythelper');
	// helper.ambilListVideo(helper.utils.listVideo).then((d)=>{
	// 	var data = d.data.items;
	// 	console.log(data)
	// 	self.view('playlist', {resData:data});
	// });
}