$(function() {
	$("code").on("click", function() {
		$.growl('successfully copied to clipboard');
		//console.log($(this).parent().prev()[0].outerHTML);
		var target = $(this).data("target");
		if(target) {
			var el = $("[data-target-name=" + target + "]").clone().removeAttr("data-target-name");
		} else {
			var el = $($(this).parent().children("code").text().replace(/\s/g, ""));
		}

		console.log(el[0].outerHTML);

	})
})