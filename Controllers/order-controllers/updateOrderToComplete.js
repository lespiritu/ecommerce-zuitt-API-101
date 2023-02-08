
const Order = require('../../Models/ordersSchema.js');
const auth = require('../../auth.js');

module.exports.updateOrderToComplete = (request, response)=>{
    const userData = auth.decode(request.headers.authorization);
    const orderId = request.params.orderId;

    if(userData.isAdmin){
        response.send("This page is restricted for user only. Admin doesn't have an access!");
    }
    else{
        Order.findByIdAndUpdate(orderId, {orderStatus:"recieved"}, {new:true})
        .then(data => {
            if (data === null){
                response.send("Invalid Order ID")
            }
            else{
                response.send(`OrderNo: ${data._id} is now recieved and completed. Thank you!`)
            }
        })
        .catch(error => response.send(error))
    }
}