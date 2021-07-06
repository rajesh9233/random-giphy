let randomWordURi = "https://random-word-api.herokuapp.com/word?number=1"
let giphyURi = "https://api.giphy.com/v1/stickers/search?api_key=Cc0cDk9PZZMUNjMgvr0MssB098TJR3kN&limit=25&offset=0&rating=g&lang=en&q="
let wordId = document.getElementById('word');
let gifRow = document.getElementById('gif-row');

async function getGIF(){
    try {
        // let resp1 = await fetch(randomWordURi);
        // let data = await resp1.json();
        // let word = data[0];
        // console.log(word)
        let resp2 = await fetch(giphyURi + 'smile');
        let data2 = await resp2.json();
        const gif = data2.data
        console.log(data2,gif);
        // wordId.innerHTML = word;
        // console.log(gif);
        // if(gif.length === 0){
        //     wordId.innerHTML = 'No GiF found for the word' + word; 
        // }
        gif.forEach(item=>{
            const col = document.createElement('div');
            col.setAttribute('class','col-4')
            const obj = document.createElement('img');
            obj.src = item.images.fixed_height.url;
            col.append(obj);
            gifRow.append(col);
        })
    } catch (error) {
        console.log(error);
    }
}

// getGIF();