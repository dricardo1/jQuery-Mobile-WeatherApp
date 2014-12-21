var advisorArray = ["Hugo Boss says you ","Giorgio Armani says you ", "Oh honey, your mum thinks you ", "YO! Your dad thinks you ","Sweetie, grandma thinks you ","My dear, the Doctor thinks you ","Your aerobics instructor says you ","Michelle Obama thinks you ","Madonna thinks you ","Miley Cyrus says you ", "Sister, Katie Perry says all the Cali girls ","Coco Chanel says you REALLY "];
var outfitArray = ["Pumpkin spice makes everything nice!", "Try a warm-brown/cinnamon palette today.","A down jacket, a nice knit scarf, a beanie, yoga pants, and those cute fur-topped boots you've been dying to wear. Work it!.","Black Jacket, slacks and pumps. ","Ladies choice. Let them savor your pallette of fine style tastes today!", "A hoodie, some nice jeans, sneakers. Casual is cool.", "Nothing but a smile. Try Naturism at home today."];
var hintMessageArray = ["YOLO","Walk like you have three men walking behind you. - Oscar de la Renta"," Give a girl the right shoes and she can conquer the world. - Marilyn Monroe", "In order to be irreplaceable one must always be different. - Coco Chanel", "Fashions fade, style is eternal. - Yves Saint Laurent", "Whoever said that money can&#39;t buy happiness, simply didn&#39;t know where to go shopping. - Bo Derek","Elegance is the only beauty that never fades. - Audrey Hepburn","Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening. - Coco Chanel"," Fashion is what you&#39;re offered four times a year by designers. And style is what you choose. - Lauren Hutton","The difference between style and fashion is quality. - Giorgio Armani","Don&#39;t be into trends. Don&#39;t make fashion own you, but you decide what you are, what you want to express by the way you dress and the way you live. - Gianni Versace","Over the years I have learned that what is important in a dress is the woman who is wearing it. - Yves Saint Laurent","A woman&#39;s dress should be a like a barbed-wire fence: serving its purpose without obstructing the view. - Sophia Loren","When in doubt, wear red. - Bill Blass","Delete the negative; accentuate the positive! - Donna Karan","A beautiful cleavage is like jewellery - Daphne Deckers"];

//var imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
//var basePath="images/";

//var messageIndex = 0;

//function hintMessage() {
	// now grab the message and change it.
	///var newMessage = hintMessageArray[messageIndex];
	//var messageElement = document.getElementById("hintMessage");
	//messageElement.innerHTML = newMessage;
	//messageIndex++;
	//if (messageIndex >= hintMessageArray.length) {
		//messageIndex = 0;
	//}
//};

function hintMessage() {
	var newMessage = hintMessageArray[Math.floor(Math.random() * hintMessageArray.length)];
	var messageElement = document.getElementById("hintMessage");
	messageElement.innerHTML = newMessage;
};

	
function chooseAdvisor() {
	var randomAdvisor = advisorArray[Math.floor(Math.random() * advisorArray.length)];
	var advisorElement = document.getElementById("advisor");
	advisorElement.innerHTML = randomAdvisor;
};

function chooseOutfit() {
	var randomOutfit = outfitArray[Math.floor(Math.random() * outfitArray.length)];
	var outfitElement = document.getElementById("outfit");
	outfitElement.innerHTML = randomOutfit;
};

//function imgRandom() {
   // for (var i = 0; i < 7; i++) {
   //     var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
   //     var image = new Image();
    //    image.src = basePath+rand;
    //    document.getElementById("outfitImage").appendChild(image);
        
   // }
//};

window.onload = function() {
	setInterval(hintMessage, 7000);
	chooseAdvisor();
	chooseOutfit();
	//imgRandom();
	
};