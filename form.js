const form = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var pesan = document.getElementById("message").value;

    var kotakReview = document.createElement("div");
    kotakReview.classList.add("review-item");

    kotakReview.innerHTML = `<strong>${email} :</strong> ${pesan}`;

    reviewList.prepend(kotakReview);

    form.reset();

    alert("Pesan Anda telah dikirim ke " + email + " ✔️");

});
