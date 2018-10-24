(function(){
	$(document).ready(initialize);
	function initialize(){
		$("#hiddenDiv").load("https://chandlercrane.github.io/1A.json", 
		function() {
		var content = $('#idi').html();
		console.log(content);
		})
	}
})();
