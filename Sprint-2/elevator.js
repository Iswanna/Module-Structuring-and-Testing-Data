function elevator(left, right, call) {
    if (call === right) {
        return "right"
    }
    else if (call === left) {
        return "left"
    }
    return "right"
}

const actualResult = elevator(0, 2, 0);
