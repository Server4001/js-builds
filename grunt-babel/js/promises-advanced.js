getOrder(155).then(function(order) {
    return getUser(order.user_id);
}).then(function(user) {
    return getCompany(user.company_id);
}).then(function(company) {
    console.log(company.company_name);
}).catch(function(error) {
    console.error(error);
});

// Function to hit the "get order" endpoint.
function getOrder(orderId) {
    return hitEndpoint(`/endpoints/get-order.php?order_id=${orderId}`);
}

// Function to hit the "get user" endpoint.
function getUser(userId) {
    return hitEndpoint(`/endpoints/get-user.php?user_id=${userId}`);
}

// Function to hit the "get company" endpoint.
function getCompany(companyId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ "id": companyId, "company_name": "Bentler Design" });
        }, 500);
    });
}

// Function to hit an endpoint.
function hitEndpoint(url) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: "post",
            url: url,
            dataType: "json"
        }).done(function(data) {
            if (data.status !== "success") {
                reject(Error(data.message));
            }
            else {
                resolve(data.data);
            }
        }).fail(function() {
            reject(Error("The request failed."));
        });
    });
}
