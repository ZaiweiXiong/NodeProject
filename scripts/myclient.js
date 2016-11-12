var Client =require("./node_modules/github/lib/index");
var GitHubApi = require("github");
var fs = require("fs");
var github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "/repos/:owner/:repo/branches", 
	//users/:username/starred  
	//user/starred/
	//for some GHEs; none for GitHub
	//users/:username/starred
    timeout: 5000
});


var USERNAME = "ZaiweiXiong";
var PASSWORD = "zaq1xsw@";
github.authenticate({
    type: "basic",
    username: USERNAME,
    password: PASSWORD
});
var array= [];
github.repos.getBranches({
   "owner": "Zaiweixiong",
   "repo":"I18nTesting"
}, function(err, res) {
    //console.log(err, res.meta);
	console.log("res[0]->"+res[0].name);
	var str = JSON.stringify(res);
	array = res;
	console.log("array -> "+array[1].name);
	//var str = JSON.stringify(res);
	//writefile(str);
	//console.log("res->"+str);
	//console.log("res->"+res.url);
});

function writefile(data){

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();

}
