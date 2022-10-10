window.okeReviewsWidgetOnInit = function () {
    setupAggregate();
};

function setupAggregate() {
    const askAQuestion = document.querySelector('.okeReviews-custom-controlItem');
    const writeAReview = document.querySelector('.okeReviews-reviewsAggregate-controls-item:first-child');
    // Move Custom Control Item Ask A Question Button Inside Aggregate Controls
    if(askAQuestion && writeAReview) {
        writeAReview.insertAdjacentElement('afterend', askAQuestion);
    }
}