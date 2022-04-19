
const getDetails = (req , res ) => {
    res.send ({
        name: Abhishek
    })
    console.log("succcess");
}


// const postProduct = (req , res ) => {
//     res.send ({
//         name: Amit
//     })
//     console.log("success");
// }

module.exports.getDetails = getDetails 