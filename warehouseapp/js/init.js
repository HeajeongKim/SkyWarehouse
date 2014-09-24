var text = $.get("http://skystore.herokuapp.com/employeeDashboard/mobile/newCustomerOrders", {employeeId : 1}).done(function(data){
		var source = $("#order-template").html(); 
		var template = Handlebars.compile(source);
		console.log(data);
		$('#order-list').append(template({orders: data}));
});
