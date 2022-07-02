
let summary = 50;
let summary_complete = 105;
let currency = 'грн';
let attempts = "5";
let stat = "Good Luck !"

$(".chooseOpen").hide(0);

$(".item1").hide(0);

$(".money").html(summary + currency);

$(".money_complete").html(summary_complete + currency);

$("#price").html(summary + currency);

$("#try").html(attempts);

$("#status").html(stat);

$("#meet").click(function() {

	$("#chooseMeet").slideToggle(300);
	$("#chooseVegetable").hide(300);
	$("#chooseCheese").hide(300);
	$("#chooseSouse").hide(300);
	$("#chooseAdd").hide(300);

});

$("#vegetable").click(function() {

	$("#chooseVegetable").slideToggle(300);
	$("#chooseMeet").hide(300);
	$("#chooseCheese").hide(300);
	$("#chooseSouse").hide(300);
	$("#chooseAdd").hide(300);

});

$("#cheese").click(function() {

	$("#chooseCheese").slideToggle(300);
	$("#chooseMeet").hide(300);
	$("#chooseVegetable").hide(300);
	$("#chooseSouse").hide(300);
	$("#chooseAdd").hide(300);

});

$("#souse").click(function() {

	$("#chooseSouse").slideToggle(300);
	$("#chooseMeet").hide(300);
	$("#chooseVegetable").hide(300);
	$("#chooseCheese").hide(300);
	$("#chooseAdd").hide(300);

});

$("#add").click(function() {

	$("#chooseAdd").slideToggle(300);
	$("#chooseMeet").hide(300);
	$("#chooseVegetable").hide(300);
	$("#chooseCheese").hide(300);
	$("#chooseSouse").hide(300);

});

$("#bacon").click(function() {

	$(".baconGroup").hide(150);
	$("#baconHide").show(150);

	summary += 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#bayernkovbaski").click(function() {

	$(".bayernkovbaskiGroup").hide(150);
	$("#bayernkovbaskiHide").show(150);

	summary += 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#chicken").click(function() {

	$(".chickenGroup").hide(150);
	$("#chickenHide").show(150);

	summary += 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#hum").click(function() {

	$(".humGroup").hide(150);
	$("#humHide").show(150);

	summary += 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#korn").click(function() {

	$(".kornGroup").hide(150);
	$("#kornHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#mushrooms").click(function() {

	$(".mushroomsGroup").hide(150);
	$("#mushroomsHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#olivki").click(function() {

	$(".olivkiGroup").hide(150);
	$("#olivkiHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#cibula").click(function() {

	$(".cibulaGroup").hide(150);
	$("#cibulaHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#ananas").click(function() {

	$(".ananasGroup").hide(150);
	$("#ananasHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#bergaderblu").click(function() {

	$(".bergaderbluGroup").hide(150);
	$("#bergaderbluHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#feta").click(function() {

	$(".fetaGroup").hide(150);
	$("#fetaHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#parmezan").click(function() {

	$(".parmezanGroup").hide(150);
	$("#parmezanHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#mozzarela").click(function() {

	$(".mozzarelaGroup").hide(150);
	$("#mozzarelaHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#cheder").click(function() {

	$(".chederGroup").hide(150);
	$("#chederHide").show(150);

	summary += 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#alfredo").click(function() {

	$(".alfredoGroup").hide(150);
	$("#alfredoHide").show(150);

	summary += 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#bbq").click(function() {

	$(".bbqGroup").hide(150);
	$("#bbqHide").show(150);

	summary += 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#dominos").click(function() {

	$(".dominosGroup").hide(150);
	$("#dominosHide").show(150);

	summary += 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#chasnykoviy").click(function() {

	$(".chasnykoviyGroup").hide(150);
	$("#chasnykoviyHide").show(150);

	summary += 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

	doBounce($("#bounce"), 100, "10px", 500);

});

$("#pashalka").click(function() {

	alert("Готово !)");

});

$("#baconHide").click(function() {

	$(".baconGroup").show(150);
	$("#baconHide").hide(150);

	summary -= 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#bayernkovbaskiHide").click(function() {

	$(".bayernkovbaskiGroup").show(150);
	$("#bayernkovbaskiHide").hide(150);

	summary -= 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#chickenHide").click(function() {

	$(".chickenGroup").show(150);
	$("#chickenHide").hide(150);

	summary -= 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#humHide").click(function() {

	$(".humGroup").show(150);
	$("#humHide").hide(150);

	summary -= 50;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#kornHide").click(function() {

	$(".kornGroup").show(150);
	$("#kornHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#mushroomsHide").click(function() {

	$(".mushroomsGroup").show(150);
	$("#mushroomsHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#olivkiHide").click(function() {

	$(".olivkiGroup").show(150);
	$("#olivkiHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#cibulaHide").click(function() {

	$(".cibulaGroup").show(150);
	$("#cibulaHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#ananasHide").click(function() {

	$(".ananasGroup").show(150);
	$("#ananasHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#bergaderbluHide").click(function() {

	$(".bergaderbluGroup").show(150);
	$("#bergaderbluHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#fetaHide").click(function() {

	$(".fetaGroup").show(150);
	$("#fetaHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#parmezanHide").click(function() {

	$(".parmezanGroup").show(150);
	$("#parmezanHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#mozzarelaHide").click(function() {

	$(".mozzarelaGroup").show(150);
	$("#mozzarelaHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#chederHide").click(function() {

	$(".chederGroup").show(150);
	$("#chederHide").hide(150);

	summary -= 30;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#alfredoHide").click(function() {

	$(".alfredoGroup").show(150);
	$("#alfredoHide").hide(150);

	summary -= 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#bbqHide").click(function() {

	$(".bbqGroup").show(150);
	$("#bbqHide").hide(150);

	summary -= 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#dominosHide").click(function() {

	$(".dominosGroup").show(150);
	$("#dominosHide").hide(150);

	summary -= 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);

});

$("#chasnykoviyHide").click(function() {

	$(".chasnykoviyGroup").show(150);
	$("#chasnykoviyHide").hide(150);

	summary -= 25;
	$(".money").html(summary + currency);
	$("#price").html(summary + currency);
});

$("#buy").click(function() {

	$(".wrap").css("display", "none");
	$(".pay").css("display", "block");

});

$("#buy_1").click(function() {

	$(".plate").css("display", "none");
	$(".pay").css("display", "block");

});

$("#complete_btn").click(function() {

	$(".wrap").css("display", "none");
	$(".plate").css("display", "block");

});

$("#complete_btn_comeback").click(function() {

	$(".wrap").css("display", "flex");
	$(".plate").css("display", "none");

});

$("#complete_btn_comeback_draw").click(function() {

	$(".wrap").css("display", "flex");
	$(".draw").css("display", "none");

});

$(".apple_pay").click(function() {

	prompt("Введіть пароль: ");
	alert("Готово, оплата пройшла успішно");

	$(".wrap").css("display", "flex");
	$(".pay").css("display", "none");

});

$("#visa").click(function() {

	prompt("Логін в системі VISA");
	prompt("Пароль в системі VISA");
	alert("Готово, оплата пройшла успішно");

	$(".wrap").css("display", "flex");
	$(".pay").css("display", "none");

});

$("#maestro").click(function() {

	prompt("Логін в системі Maestro: ");
	prompt("Пароль в системі Maestro: ");
	alert("Готово, оплата пройшла успішно");

	$(".wrap").css("display", "flex");
	$(".pay").css("display", "none");

});

$("#ibox").click(function() {

	prompt("Введіть номер рахунку: ");
	alert("Готово, оплата пройшла успішно");

	$(".wrap").css("display", "flex");
	$(".pay").css("display", "none");

});

$("#pashalka_2").click(function() {

	alert("Квитанція ! Серйозно !? 2022 Рік на дворі !");

});

let a = 0;
let b = 0;

$("#spin").click(function() {

	a = a + 90;
    circule.style.transform = 'rotate(' + a + 'deg)';

    $(".pizaa_size").css("display", "flex");
    $(".row_circule").css("display", "flex");
    $(".pizza_complete_btn").css("display", "flex");

    $(".Pright").css("background-image", "url(./img_cml/1.jpg)");
    $(".Pright").css("background-size", "cover");
    $(".Pright").css("font-size", "0px");

    $(".Pleft").css("background-image", "url(./img_cml/3.jpg)");
    $(".Pleft").css("background-size", "cover");
    $(".Pleft").css("font-size", "0px");

    $(".Ptop").css("background-image", "url(./img_cml/2.jpg)");
    $(".Ptop").css("background-size", "cover");
    $(".Ptop").css("font-size", "0px");

    $(".Pbottom").css("background-image", "url(./img_cml/4.jpg)");
    $(".Pbottom").css("background-size", "cover");
    $(".Pbottom").css("font-size", "0px");

    if (b == 0) {

    	dishName.innerText = "Піца Мангеттен";
    	dishWeight.innerText = "(359г)";
    	dishText.innerText = "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо";

    	summary_complete = 105;
    	$(".money_complete").html(summary_complete + currency);

    	$("#pizza_size_item_1").addClass("active");
    	$("#pizza_size_item_2").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

		$("#pizza_type_item_1").addClass("active");
    	$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

    	b = 1;

    } else if (b == 1) {

    	dishName.innerText = "Піца Гриль Мікс";
    	dishWeight.innerText = "(374г)";
    	dishText.innerText = "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю";

    	summary_complete = 141;
    	$(".money_complete").html(summary_complete + currency);

    	$("#pizza_size_item_1").addClass("active");
    	$("#pizza_size_item_2").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

		$("#pizza_type_item_1").addClass("active");
    	$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

    	b = 2;

    } else if (b == 2) {

    	dishName.innerText = "Піца Чикен кебаб";
    	dishWeight.innerText = "(412г)";
    	dishText.innerText = "Поливка (соус Burger), Курка, Цибуля, Гриби, Моцарела, Огірки мариновані";

    	summary_complete = 141;
    	$(".money_complete").html(summary_complete + currency);

    	$("#pizza_size_item_1").addClass("active");
    	$("#pizza_size_item_2").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

		$("#pizza_type_item_1").addClass("active");
    	$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

    	b = 3;

    } else if (b == 3) {

    	dishName.innerText = "Піца Техас";
    	dishWeight.innerText = "(378г)";
    	dishText.innerText = "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю";

    	summary_complete = 105;
    	$(".money_complete").html(summary_complete + currency);

    	$("#pizza_size_item_1").addClass("active");
    	$("#pizza_size_item_2").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

		$("#pizza_type_item_1").addClass("active");
    	$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

    	b = 0;

    }

});

$("#pizza_size_item_1").click(function() {

		$("#pizza_size_item_1").addClass("active");

		$("#pizza_size_item_2").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

	    if (b == 1) {

	    	dishWeight.innerText = "(359г)";

	    	summary_complete = 105;
	    	$(".money_complete").html(summary_complete + currency);

	    }

	    if (b == 2) {

	    	dishWeight.innerText = "(374г)";

	    	summary_complete = 141;
	    	$(".money_complete").html(summary_complete + currency);

	    }

	    if (b == 3) {

	    	dishWeight.innerText = "(412г)";

	    	summary_complete = 141;
	    	$(".money_complete").html(summary_complete + currency);

	    }

	    if (b == 0) {

	    	dishWeight.innerText = "(378г)";

	    	summary_complete = 105;
	    	$(".money_complete").html(summary_complete + currency);

	    }

	});

$("#pizza_size_item_2").click(function() {

		$("#pizza_size_item_2").addClass("active");

		$("#pizza_size_item_1").removeClass("active");
		$("#pizza_size_item_3").removeClass("active");

		summary_complete = 196;
	    $(".money_complete").html(summary_complete + currency);

	    if (b == 1) {

	    	dishWeight.innerText = "(617г)";

	    }

	    if (b == 2) {

	    	dishWeight.innerText = "(651г)";

	    }

	    if (b == 3) {

	    	dishWeight.innerText = "(583г)";

	    }

	    if (b == 0) {

	    	dishWeight.innerText = "(642г)";

	    }

	});

$("#pizza_size_item_3").click(function() {

		$("#pizza_size_item_3").addClass("active");

		$("#pizza_size_item_1").removeClass("active");
		$("#pizza_size_item_2").removeClass("active");

		summary_complete = 239;
	    $(".money_complete").html(summary_complete + currency);

	    if (b == 1) {

	    	dishWeight.innerText = "(843г)";

	    }

	    if (b == 2) {

	    	dishWeight.innerText = "(926г)";

	    }

	    if (b == 3) {

	    	dishWeight.innerText = "(810г)";

	    }

	    if (b == 0) {

	    	dishWeight.innerText = "(902г)";

	    }

	});

let c = 0;

$("#pizza_type_item_1").click(function() {

		$("#pizza_type_item_1").addClass("active");

		$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

		if (b == 1) {

	    	dishText.innerText = "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо";

	    }

	    if (b == 2) {

	    	dishText.innerText = "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю";

	    }

	    if (b == 3) {

	    	dishText.innerText = "Поливка (соус Burger), Курка, Цибуля, Гриби, Моцарела, Огірки мариновані";

	    }

	    if (b == 0) {

	    	dishText.innerText = "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю";

	    }

	});

$("#pizza_type_item_2").click(function() {

		$("#pizza_type_item_2").addClass("active");

		$("#pizza_type_item_1").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

		if (b == 1) {

	    	dishText.innerText = "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо";

	    }

	    if (b == 2) {

	    	dishText.innerText = "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю";

	    }

	    if (b == 3) {

	    	dishText.innerText = "Поливка (соус Burger), Курка, Цибуля, Гриби, Моцарела, Огірки мариновані";

	    }

	    if (b == 0) {

	    	dishText.innerText = "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю";

	    }

	});

$("#pizza_type_item_3").click(function() {

		$("#pizza_type_item_3").addClass("active");

		$("#pizza_type_item_1").removeClass("active");
		$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_4").removeClass("active");

		if (b == 1) {

	    	dishText.innerText = "(подвійна порція грибів), Гриби, Моцарела, Філадельфія, Соус Альфредо";

	    }

	    if (b == 2) {

	    	dishText.innerText = "Курка, Фрикадельки, Цибуля, Філадельфія, Болгарський перець, Моцарела, Соус Барбекю";

	    }

	    if (b == 3) {

	    	dishText.innerText = "Поливка (соус Burger), Філадельфія, Цибуля, Гриби, Моцарела, Огірки мариновані";

	    }

	    if (b == 0) {

	    	dishText.innerText = "Кукурудза, Цибуля, Гриби, Філадельфія, Моцарела, Соус Барбекю";

	    }

	});

$("#pizza_type_item_4").click(function() {

		$("#pizza_type_item_4").addClass("active");

		$("#pizza_type_item_1").removeClass("active");
		$("#pizza_type_item_2").removeClass("active");
		$("#pizza_type_item_3").removeClass("active");

		if (b == 1) {

	    	dishText.innerText = "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо";

	    }

	    if (b == 2) {

	    	dishText.innerText = "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю";

	    }

	    if (b == 3) {

	    	dishText.innerText = "Поливка (соус Burger), Курка, Цибуля, Гриби, Моцарела, Огірки мариновані";

	    }

	    if (b == 0) {

	    	dishText.innerText = "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю";

	    }

		

	});

$("#rozigrash").click(function() {

	$(".wrap").css("display", "none");
	$(".draw").css("display", "flex");

});

$("#draw_btn_save").click(function() {

	

});

