
//API - GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

//-----USING PROMISES-------//

/**                                               
//Defining the Function newjoke()

const newjoke = () => {

    //The api link is in html format...to get only the jokes we have to use this header
    const setheader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setheader)
        .then((res) =>
            res.json()) // If we successfully get data. we use .json to get the data as json.
        .then((data) => {
            jokes.innerHTML = data.joke; // 'joke' is the key of the api file. We are putting the jokes inside the html part of the div where the jokes are printing.
        }).catch((error) => {
            console.log(error); // If e fail to get data. We are printing the error.
        })

}

*/

//-----USING ASYNC AWAIT-------//

const newjoke = async () => {
    try {
        const setheader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setheader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    } catch (err) {
        console.log(`The Error is :- ${err}`);
    }
}

jokebtn.addEventListener('click', newjoke);
newjoke();

