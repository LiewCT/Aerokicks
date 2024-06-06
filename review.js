// Get number of each review category
var count_1star = document.getElementsByClassName('star1').length,
    count_2star = document.getElementsByClassName('star2').length,
    count_3star = document.getElementsByClassName('star3').length,
    count_4star = document.getElementsByClassName('star4').length,
    count_5star = document.getElementsByClassName('star5').length,
    star1 = document.getElementById('r1'),
    star2 = document.getElementById('r2'),
    star3 = document.getElementById('r3'),
    star4 = document.getElementById('r4'),
    star5 = document.getElementById('r5');

// Rating icons
star1.onclick = function(event) {
    toggleReviewVisibility("star5");
};
star2.onclick = function(event) {
    toggleReviewVisibility("star4");
};
star3.onclick = function(event) {
    toggleReviewVisibility("star3");
};
star4.onclick = function(event) {
    toggleReviewVisibility("star2");
};
star5.onclick = function(event) {
    toggleReviewVisibility("star1");
};

var activeCategory = ""; // Variable to track the active category

// Function to toggle review category visibility
function toggleReviewVisibility(category) {
    // If clicked on the same category again, revert the changes
    if (activeCategory === category) {
        activeCategory = "";
        showAllReviews(); // Show all reviews
    } else {
        activeCategory = category; // Set the active category
        hideOtherReviews(category); // Hide other reviews
    }
}

// Function to hide other review categories and show only the selected one
function hideOtherReviews(category) {
    for (let i = 0; i < document.getElementById('reviewWall').children.length; i++) {
        let divChild = document.getElementById('reviewWall').children[i];
        if (divChild.classList.contains(category)) {
            divChild.style.display = "block"; // Show the selected category
        } else {
            divChild.style.display = "none"; // Hide other categories
        }
    }
}

// Function to show all review categories
function showAllReviews() {
    for (let i = 0; i < document.getElementById('reviewWall').children.length; i++) {
        let divChild = document.getElementById('reviewWall').children[i];
        divChild.style.display = "block"; // Show all categories
    }
}
