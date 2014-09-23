var text = $.get("http://skystore.herokuapp.com/employeeDashboard/mobile/newCustomerOrders", {employeeID : 1}).done(function(data){
		var clickedOrder;

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
		var paramOrdername = getUrlParameter('ordername');

		for (var i = obj.length - 1; i >= 0; i--) {
			
		};


		var source = $("#detail-template").html(); 
		var template = Handlebars.compile(source);

		$('#order-detail').append(template(clickedOrder));
});

function chooseOrder(orderid){
	$.post("http://skystore.herokuapp.com/employeeDashboard/mobile/assignTo", {employeeID:1, orderID: orderid}).done(function(data){
		window.location.href = "myorder.html"
	});
}



