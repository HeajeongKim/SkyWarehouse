function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 

// get ordername parameter from the user
var paramStatus = getUrlParameter('status');
var paramId = getUrlParameter('id');

$.get("http://skystore.herokuapp.com/employeeDashboard/mobile/viewOrder", {orderId : paramId}).done(function(data){

		var source = $("#detail-template").html(); 
		var template = Handlebars.compile(source);
		console.log({status: paramStatus, obj:data});

		$('#order-detail').append(template({status:paramStatus, obj:data}));
});

function chooseOrder(){
	$.post("http://skystore.herokuapp.com/employeeDashboard/mobile/assignTo", {employeeId:1, orderI: paramId}).done(function(data){
		
		$.get("http://skystore.herokuapp.com/employeeDashboard/mobile/myAssignedOrders", {employeeId:1}).done(function(data){
			var source = $("#myorder-template").html(); 
			var template = Handlebars.compile(source);

			$('#myorder-list').append(template({orders: data}));
		});
		window.location.href = "myorder.html";
	});
}



