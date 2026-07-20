from pattern_engine.base import BaseMeasurements
from pattern_engine.bodice import draft_front_bodice


def generate_dress_pattern(measurements):

    base = BaseMeasurements(
        bust=float(measurements["bust"]),
        waist=float(measurements["waist"]),
        hip=float(measurements["hip"]),
        shoulder=float(measurements["shoulder"]),
        neck=float(measurements["neck"]),
        armhole=float(measurements["armhole"]),
        sleeve_length=float(measurements["sleeveLength"]),
        dress_length=float(measurements["dressLength"]),
    )

    bodice = draft_front_bodice(base)

    return {
        "measurements": base,
        "bodice": bodice,
    }