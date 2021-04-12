const usedMotivationCards = new Set()
const usedChapterCards = new Set()

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getUniqueRandomNum(min, max, cardType) {
        randomNum = getRandomIntInclusive(min, max);

        if (cardType=="Motivation") {
            if (usedMotivationCards.size == 95) {
                usedMotivationCards.clear();
            }
            while (usedMotivationCards.has(randomNum)) {
                console.log("oop"+randomNum);
                newRandomNum = getRandomIntInclusive(min, max);
                randomNum = newRandomNum;
                console.log("new"+randomNum);
                console.log(usedMotivationCards);
            }
            usedMotivationCards.add(randomNum);
        } else {
            if (usedChapterCards.size == 36) {
                usedChapterCards.clear();
            }
            while (usedChapterCards.has(randomNum)) {
                // console.log("oop"+randomNum);
                newRandomNum = getRandomIntInclusive(min, max);
                randomNum = newRandomNum
                // console.log("new"+randomNum);
            }
            usedChapterCards.add(randomNum);
        }
        // randomNum = getRandomIntInclusive(2,96);
        // playerNum = i+1;
        // console.log(randomNum);
        return randomNum;
    }

    function getRandomMotivationCard(numPlayers) {
        for (let i=0; i<numPlayers; i++){
            playerNum = i+1;
            document.getElementById("playerHeader"+playerNum).innerHTML += "Player "+playerNum;
            for (let j=0; j<5; j++) {
                // print("hello");
                // randomNum = getRandomIntInclusive(2,96);
                // while (usedCards.has(randomNum)) {
                //     console.log("oop"+randomNum);
                //     newRandomNum = getRandomIntInclusive(2,96);
                //     randomNum = newRandomNum
                //     console.log("new"+randomNum);
                // }
                // // randomNum = getRandomIntInclusive(2,96);
                // usedCards.add(randomNum);
                // // playerNum = i+1;
                // // console.log(randomNum);
                randomNum = getUniqueRandomNum(2, 96, "Motivation");
                document.getElementById("result"+playerNum).innerHTML += '<img id='+playerNum+j+' onclick ="drawMotivationCard(id)" src =../coauthor/cards/Motivation-'+randomNum+'.jpg />';
                // console.log(usedCards);
            }
        }
    }

    function getRandomChapterCard() {
        document.getElementById("chapterCardHeader").innerHTML += 'Chapter Card';
        randomNum = getUniqueRandomNum(97, 132, "Chapter");
        document.getElementById("chapterCard").innerHTML = '<img id=chapterCard'+randomNum+' onclick ="drawChapterCard(id)" src =../coauthor/cards/Chapter-'+randomNum+'.jpg />';

    }

    function drawChapterCard(id) {
        randomNum = getUniqueRandomNum(97, 132, "Chapter");
        card = document.getElementById(id);
        card.setAttribute("src", "../coauthor/cards/Chapter-"+randomNum+".jpg");
    }

    function drawMotivationCard(id) {
        // console.log("YUH"+id);
        randomNum = getUniqueRandomNum(2, 96, "Motivation");
        card = document.getElementById(id);
        // console.log("OOP"+image);
        card.setAttribute("src", "../coauthor/cards/Motivation-"+randomNum+".jpg");
        
        // = '<img id='+id+' onclick ="drawCard()" src =../coauthor/cards/Motivation-'+randomNum+'.jpg />';
    }

    function getRandomGenre(){
        document.getElementById("genreHeader").innerHTML = 'Genre';
        let genres = ["Mystery", "Fantasy", "Comedy", "Adventure", "Horror", "Romance"]
        randomNum = Math.floor(Math.random() * 6);
        document.getElementById("genre").innerHTML = genres[randomNum];
    }