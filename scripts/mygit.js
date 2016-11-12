//https://github.com/mikedeboer/node-github
//git diff --name-only
//git diff origin/master
// git log --name-only 
//git ls-tree --name-only -r <branch_name> 
var GitHubApi = require("github");

var github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "/user/repos", 
	//users/:username/starred  
	//user/starred/
	//for some GHEs; none for GitHub
	//users/:username/starred
    timeout: 5000
});
//https://api.github.com/users/defunkt
//https://api.github.com/users/ZaiweiXiong
//JSON.parse('{}'); 



github.authenticate({
    type: "oauth",
    token: "c67f4d7865ca2b77dece30d15214f16c65c9f3ec"
});


github.repos.getAll({ 
"affiliation": "owner,organization_member"

 },function(err, res) {
	//console.log('test res->'+JSON.stringify(res));
	//console.log("repositoroy->"+res[1].name);
	console.log("repositoroy.length->"+res.length);
	for (var i=0;i<res.length;i++) {
		
		console.log("repositoroy->"+i+" "+res[i].name);
	}
	
    //console.log("activity.getStarredReposForUser.page->"+res);
	
});








