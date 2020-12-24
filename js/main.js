let flipped = false;

function changeImg() {
	let i = 1;

	const cardTopsNode = document.querySelectorAll(".card-img-top");
	const cardTops = Array.apply(null, cardTopsNode);
	cardTops.forEach(element=>{
		$(element).attr('src', `images/news/news-${i}-sm.jpg`);
		i++
	});
	flipped = true;
}

function reverseImg() {
	let i = 1;

	const cardTopsNode = document.querySelectorAll(".card-img-top");
	const cardTops = Array.apply(null, cardTopsNode);
	cardTops.forEach(element=>{
		$(element).attr('src', `images/news/news-${i}.jpg`);
		i++
	});
	flipped = false;
}

window.addEventListener('resize', () => {
	if (window.innerWidth<=576 && flipped === false) {
		changeImg();
	} else {
		reverseImg();
	}
});

