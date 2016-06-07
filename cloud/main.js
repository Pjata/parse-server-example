
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

/*
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("getTime", function(request, response) {
  var today = new Date();
  response.success(today);
});

Parse.Cloud.define("sendReceipt", function(request, response){
	var json = '{"receipt-data":"' + request.params.receipt + '", "password":"9e57eb32c34c40beb817e3cc93a20504"}';
	console.log('https://sandbox.itunes.apple.com/verifyReceipt');
	Parse.Cloud.httpRequest({
	method: 'POST',
	url: "https://sandbox.itunes.apple.com/verifyReceipt",
	headers:{
		'Content-Type': 'application/json;charset=utf-8'
	},
	body: json
	
	}).then(function(httpResponse){
		console.log(httpResponse.text)
		response.success(httpResponse.text);
	},
		function(httpResponse){
		console.error('fail' + httpResponse.status);
		response.success(httpResponse.status);
	});
});
Parse.Cloud.define("isUserSubscriptionAlive", function(request, response) {
    var Subscription = Parse.Object.extend("Subscription");
    var query = new Parse.Query(Subscription);
    query.equalTo("user",request.user);
    var now = new Date();
    query.greaterThan("endsAt",now);
    query.find({
	success:function(results){
		if(results.length != 0) { 
		   response.success(results);
                } else {
		   response.success(results);
                }
        },
       error: function(error){
	response.error(error);
	}
    });
});

Parse.Cloud.job("registerYahooUsers", function(request, status){
	Parse.Cloud.useMasterKey();
	var query = new Parse.Query(Parse.User);
	query.equalTo('emailVerified',false);
	query.matches('email','@yahoo.com');
	query.find({
		success: function(results){
			for(var i=0;i<results.length;i++){
				alert('verified' + results[i].get('emailVerified'));
				results[i].set('emailVerified',true);
				results[i].save();
			}
		}, 
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
});
Parse.Cloud.job("pushSubscribeNotification", function(request, status){
	Parse.Cloud.useMasterKey();
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('isSubscribed',false);

	Parse.Push.send({where: query, 
			data: {alert:"Subscribe to Story2Go to remove watermark from your exports!"}},{
		success:function(){
		  status.success("jo!");
		},
		error:function(error){
		}
	});
});
*/
