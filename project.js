(function($){
	var names, randomNames, i, j, newArray = [], removeItem, emptyArray;
	names = [
		'yashwant',
    'gogodu',
    'godwin',
		'monish',
		'mathumitha',
		'Dosa',
		'nicky',
		'suraj',
		'antrow',
		'suraj',
		'korea',
		'Nickel',
		'yashu sai',
		'niteesh',
		'vasanthkesan',
		'sri hari'
	];
	document.getElementById('Pers').innerHTML = names;
	$('#select').click(function() {
		randomNames = names[Math.floor(Math.random() * names.length)];
		document.getElementById('sltdPer').innerHTML = randomNames;
		$('#remPerBlk').show();
		for(i=0; i< names.length; i++) {
			if(randomNames === names[i]) {
				removeItem = randomNames;
				names.splice($.inArray(removeItem, names), 1);
				document.getElementById('remPers').innerHTML = names;
				for(j=0; j<names.length+1; j++) {
					newArray[j] = removeItem;
				}
			}
		}
		emptyArray = jQuery.isEmptyObject(names);
		if(emptyArray === true) {
			$.merge(names, newArray);
		}
	});
})(jQuery);
