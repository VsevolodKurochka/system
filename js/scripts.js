$(document).ready(function(){
		$(".modal-close").click(function(){
			$(this).closest(".modal-bg").toggleClass("dn");
			$("body").removeClass("modal-open");
			$(".modal-bg").removeClass("thismodalopen");
		});
		$(".modal-bd").click(function(){
			$(this).parent().toggleClass("dn");
			$("body").removeClass("modal-open");
			$(".modal-bg").removeClass("thismodalopen");
		});
		$("#politika-link").click(function(){
			$("#modal-politika").toggleClass("dn thismodalopen");
			$("body").toggleClass("modal-open");
		});
		
});	