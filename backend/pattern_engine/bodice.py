from pattern_engine.geometry import (
    Point,
    Curve,
    move_x,
    move_y,
)

from pattern_engine.base import BaseMeasurements
from pattern_engine.dart import calculate_waist_dart


def draft_front_bodice(measurements: BaseMeasurements):

    # Starting point
    A = Point(0, 0)

    # Neck
    F = move_x(A, measurements.neck_width)
    G = move_y(A, measurements.neck_depth)

    # Shoulder
    H = move_x(A, measurements.shoulder_length)

    # Shoulder slope (2 cm drop)
    I = move_y(H, 2)

    # Armhole depth
    C = move_y(A, measurements.armhole)

    # Bust width
    B = move_x(C, measurements.quarter_bust)

    # Waist line
    D = move_y(A, measurements.dress_length * 0.45)

    # Waist width
    E = move_x(D, measurements.quarter_waist)

    # Hip line
    J = move_y(A, measurements.dress_length * 0.70)

    # Hip width
    K = move_x(J, measurements.quarter_hip)

    # Hem
    L = move_y(A, measurements.dress_length)

    M = move_x(L, measurements.quarter_hip)

    # Neck curve
    neck_curve = Curve(
        start=F,
        control=Point(
            F.x,
            G.y / 2,
        ),
        end=G,
    )

    # Armhole curve (temporary)
    armhole_curve = Curve(
        start=I,
        control=Point(
            B.x,
            C.y / 2,
        ),
        end=B,
    )

    # Waist dart
    dart = calculate_waist_dart(
        E,
        B,
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
            "I": I,
            "J": J,
            "K": K,
            "L": L,
            "M": M,
        },
        "neckCurve": neck_curve,
        "armholeCurve": armhole_curve,
        "waistDart": dart,
    }