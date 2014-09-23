var text = $.get("http://skystore.herokuapp.com/employeeDashboard/mobile/newCustomerOrders", {employeeID : 1}).done(function(data){
		var source = $("#order-template").html(); 
		var template = Handlebars.compile(source);
		$('#order-list').append(template({orders: data}));
});
