from pattern_engine.geometry import Point, move_x, move_y, Curve
from pattern_engine.base import BaseMeasurements


def draft_front_bodice(measurements: BaseMeasurements):

    A = Point(0, 0)

    B = move_x(
        A,
        measurements.quarter_bust
    )

    C = move_y(
        A,
        measurements.armhole
    )

    D = move_y(
        A,
        measurements.dress_length
    )

    E = move_x(
        D,
        measurements.quarter_hip
    )

    F = move_x(
        A,
        measurements.neck_width
    )

    G = move_y(
        A,
        measurements.neck_depth
    )

    H = move_x(
        A,
        measurements.shoulder_length
    )

    # Neckline curve
    neck_curve = Curve(
        start=F,
        control=Point(
            F.x,
            G.y / 2
        ),
        end=G,
    )

    return {
        "points": {
            "A": A,
            "B": B,
            "C": C,
            "D": D,
            "E": E,
            "F": F,
            "G": G,
            "H": H,
        },
        "neckCurve": neck_curve,
    }