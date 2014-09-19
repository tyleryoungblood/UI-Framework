$(function() {

	function getHtml(codeElement) {

		// get target element if data-target is set on code element
		var target = $(codeElement).data("target");
		if(target) {
			// if data-target, grab element with that target, duplicate (clone), and remove data-target-name attribute
			// prior to copying to clipboard
			var el = $("[data-target-name=" + target + "]").clone().removeAttr("data-target-name");
		} else {
			// create selector from code element inner-html (content) and select the element from the dom 
			var el = $($(codeElement).parent().children("code").text().replace(/\s/g, "")); 
			// the (/\s/g, "") regex removes whitespace when multiple classes are included in the same code element
		}

		// stringifys the html grabbed from above (the returned object is turned into a string)
		return el[0].outerHTML;

	}

	$("code").on("click", function() {

		
		console.log(getHtml(this));
		$.growl('successfully copied to clipboard');

		

	})

	// $("code").on("mouseover", function() {

	// 	var tooltip = $("<div/>").addClass("codeTooltip").text(getHtml(this));
	// 	$(this).after(tooltip);

	// })

	// $("code").on("mouseout", function() {

	// 	$(".codeTooltip").remove();

	// })

	$("code").each(function(){
		try {
			var tooltip = $("<div/>").addClass("codeTooltip").text(getHtml(this));
			$(this).after(tooltip);
		} catch(e) {
		
		}

		
	})

});



