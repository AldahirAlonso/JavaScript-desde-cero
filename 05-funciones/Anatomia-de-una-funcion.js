function calculateDiscountPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const pricewithDiscount = price - discount;

    return pricewithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

console.log("Original Price: $" + originalPrice);
console.log("Discount Porcentage: " + discountPercentage + "%");
console.log("Price with Discount: $" + finalPrice);