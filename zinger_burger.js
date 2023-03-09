let shopOpen = true;
let orderId = 1;
let cheese = false;
let quantiy = 3;

function takeOrder() {
    return new Promise((resolve, reject) => {
        if (shopOpen) {
            setTimeout( () => {
            resolve([orderId, cheese, quantiy]);
            console.log("Order Received");
            console.log("Order Id =", orderId);
            if (cheese) {
                console.log(`Item = ${quantiy} Zinger Burger (with cheese)`)
            } else {
                console.log(`Item = ${quantiy} Zinger Burger (without cheese)`);
            };
            orderId++;
            }, 2000)

        } else {
            reject("Shop is Closed");
        }
    })
}

function makeBurger(arr) {
    return new Promise( (resolve, reject) => {
        console.log("Making Burger")
        if (arr[1]){
            console.log("Adding Cheeese")
        }
        setTimeout(() => {
            resolve(arr[0])
        }, 6000)
    } )
}

async function order() {
    try {
        let arr = await takeOrder()
        let id = await makeBurger(arr)
        console.log("Order no", id, "has been completed")

    } catch(error) {
        console.log(error)
    }
}

order();
