class Product {
    constructor(image, name, rating, cost, originalcost, percentoff) {
        this.image = image;
        this.name = name;
        this.rating = rating;
        this.cost = cost;
        this.originalcost = originalcost;
        this.percentoff = percentoff;
    }

    create() {
        const container = document.createElement("div");

        container.style.backgroundColor = "rgb(255, 253, 253)";
        container.style.height = "325px";
        container.style.width = "140px";
        container.style.borderRadius = "10px";
        container.style.padding = "2px 13px";

        const image = document.createElement("img");
        image.src = this.image;
        image.style.width = "140px";
        image.style.height = "200px";

        const name = document.createElement("p");
        name.textContent = this.name;

        const rating = document.createElement("p");
        rating.innerHTML = `<i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${this.rating}`;

        const cost = document.createElement("p");
        cost.textContent = this.cost;
        cost.style.fontSize = "30px";

        const priceContainer = document.createElement("div");
        priceContainer.style.display = "flex";
        priceContainer.style.gap = "10px";

        const originalcost = document.createElement("p");
        originalcost.textContent = this.originalcost;
        originalcost.style.textDecoration = "line-through";

        const discount = document.createElement("div");
        discount.style.backgroundColor = "rgb(8, 148, 8)";
        discount.style.borderRadius = "5px";

        const percentoff = document.createElement("p");
        percentoff.textContent = this.percentoff;
        percentoff.style.color = "white";

        discount.appendChild(percentoff);

        priceContainer.appendChild(originalcost);
        priceContainer.appendChild(discount);

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(rating);
        container.appendChild(cost);
        container.appendChild(priceContainer);

        return container;
    }
}

const watch = new Product(
    "https://www.bing.com/th?id=OPHS.RHjA%2fbTfWQ7XPg474C474&o=5&pid=21.1&w=140&h=200&qlt=100&dpr=1&o=2&pcl=f5f5f5",
    "Samsung Galaxy Watch9 44mm Bluet",
    "5",
    "N 509,355",
    "N 600,000",
    "-15%"
);

document.body.appendChild(watch.create());