$(document).ready(function(){
	var myFavBooks=["The Last Olympian by Rick Riordan","Kane Chronicles by Rick Riordan","Dragon Rider by Cornelia Funke","The Chronicles of Narnai by C.S. Lewis","Dark Fusion series by Neal Shusterman","Grimm Fairy Tales"];
	var item = myFavBooks[Math.floor(Math.random()*myFavBooks.length)];
		$("#books").html(item);
			var myFavQuotes=["We knew the world would not be the same. A few people laughed, a few people cried. Most people were silent. I remembered the line from the Hindu scripture, the Bhagavad-Gita. Vishnu is trying to persuade the Prince that he should do his duty, and, to impress him, takes on his multi-armed form and says, 'Now I am become Death, the destroyer of worlds.' I suppose we all thought that, one way or another. from J. Robert Oppenheimer","Only Thing We Have to Fear Is Fear Itself. from Franklin d. Roosevelt"," I am bad and that's good, I will never be good and that's not bad, there's no one I would rather be than me. From Wrek It Ralph","If you don't think, Then you shouldn't talk. March Hare from Alice in Wonderland","Like so many things it is not what is outside, But what is inside that counts. Merchant from Aladdin"];
	var item = myFavQuotes[Math.floor(Math.random()*myFavQuotes.length)];
		$("#quotes").html(item);
		var myFavFairyTales=["Beauty and the Beast","Legend of the Lindorm","The Little Mermaid","Rapunzel","Hansel and Gretel","Hans the Hedgehog","Snow White and Red Rose","The Twelve Brothers"];
	var item = myFavFairyTales[Math.floor(Math.random()*myFavFairyTales.length)];
		$("#fairyT").html(item);
});
