console.log("Let's get this party started!");

const $searchInput = $("#giph-theme");
const $giphArea = $("#giph-canvas")

// get random gif from data:

function addGif(res) {
	let results = res.data.length;
	if (results) {
		let random = Math.floor(Math.random() * results);
		let $newGiph = $("<img>", {
			src: res.data[random].images.original.url,
			class: "w-100"
		});
		$giphArea.append($newGiph)
	}
}

// form submission, make ajax call and clear search box:

$("form").on("submit", async function searchGiph(e) {
	e.preventDefault();
	let term = $searchInput.val();
	$searchInput.val("");
	const res = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: term, api_key: "2ZkZqSaqVUOaVcFZwe7MXVchWkEFkpeh" } })
	addGif(res.data);
});

// remove gifs:

$("#remove").on("click", function () {
	$giphArea.empty();
})