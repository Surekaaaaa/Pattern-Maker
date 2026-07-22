from pattern_engine.geometry import Point


def calculate_waist_dart(
    waist_point: Point,
    bust_point: Point,
    intake=3,
):

    left = Point(
        waist_point.x - intake / 2,
        waist_point.y,
    )

    right = Point(
        waist_point.x + intake / 2,
        waist_point.y,
    )

    top = Point(
        waist_point.x,
        bust_point.y - 8,
    )

    return {
        "left": left,
        "right": right,
        "top": top,
    }