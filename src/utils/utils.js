export const calculatePrice = (coach, place) => {
    let placeCost = 0;
    if (coach.class_type === "first" || coach.class_type === "fourth") {
        placeCost = coach.price;
    } else if (coach.class_type === "second") {
        placeCost = place % 2 === 0 ? coach.top_price : coach.bottom_price;
    } else if (coach.class_type === "third") {
        if (place > 32) {
            placeCost = coach.side_price
        } else {
            placeCost = place % 2 === 0 ? coach.top_price : coach.bottom_price;
        }
    }
    if (coach.is_linens_included) {
        placeCost += coach.linens_price;
    }
    return placeCost;
}
