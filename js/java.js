//works filter
let boxes = Array.from(document.querySelectorAll(".works .box-container"));
let worksList = Array.from(document.querySelectorAll(".works ul li"));
worksList.forEach(function(li) {
    li.addEventListener("click", function() {
        worksList.forEach(function(li) {
            li.classList.remove("active");
        });
        this.classList.add("active");
        this.classList.add("rounded-pill");
        boxes.forEach(function(box) {
            box.style.display = "none";
        });
        document.querySelectorAll(this.dataset.filter).forEach(function(box) {
            box.style.display = "block";
        });
    });
});