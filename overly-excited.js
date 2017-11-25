var sentence = ["the","walrus","danced","through","the","trees","in","the","light", "of", "the", "moon"]

// function addExcitement (sentence) {
//     var walrus = "";
//     for (var i = 0; i<sentence.length; i+=1) {
//         walrus += sentence[i] + " ";
//         console.log(walrus);
//     }
// };


// function addExcitement (sentence) {
//     var walrus = "";
//     for (var i = 0; i<sentence.length; i+=1) {
//         if ((i+1)%3 === 0) {
//             walrus += sentence[i] + "! ";
//             console.log(walrus);
//         } else {
//             walrus += sentence[i] + " ";
//             console.log(walrus);
//         } 
//     }
// };


function addExcitement (sentence) {
    var walrus = "";
    for (var i=0; i<sentence.length; i+=1) {
        if ((i+1)%3 === 0) {
            walrus += sentence[i] + "!".repeat((i+1)/3) + " ";
            console.log(walrus);
        } else {
            walrus += sentence[i] + " ";
            console.log(walrus);
        } 
    }
};

addExcitement(sentence);