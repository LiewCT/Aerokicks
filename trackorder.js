const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    toggleStatus("paymentPending");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    toggleStatus("shipped");
}

three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    toggleStatus("dispatch");
}

four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    toggleStatus("delivered");
}

function toggleStatus(className) {
    const allStatus = document.querySelectorAll(".status");
    allStatus.forEach(status => {
        const tr = status.closest("tr");
        if (status.classList.contains(className)) {
            status.style.display = "block";
            tr.style.display = "table-row"; // Show the entire row
        } else {
            status.style.display = "none";
            tr.style.display = "none"; // Hide the entire row
        }
    });
}
