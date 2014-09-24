$.get("http://skystore.herokuapp.com/employeeDashboard/mobile/myAssignedOrders", {employeeId:1}).done(function(data){
	var source = $("#myorder-template").html(); 
	var template = Handlebars.compile(source);

	$('#myorder-list').append(template({orders: data}));
});