from pattern_engine.geometry import curve_to_svg


def draw_front_bodice(builder, bodice, scale=10, offset_x=120, offset_y=80):

    points = bodice["points"]

    def p(name):
        point = points[name]
        return (
            point.x * scale + offset_x,
            point.y * scale + offset_y,
        )

    def convert(point):
        return (
            point.x * scale + offset_x,
            point.y * scale + offset_y,
        )

    # Draw construction points
    for name in points:

        x, y = p(name)

        builder.circle(x, y)

        builder.text(
            x + 6,
            y - 6,
            name,
            size=12,
        )

    # Outline
    builder.line(*p("A"), *p("H"))
    builder.line(*p("H"), *p("I"))
    builder.line(*p("I"), *p("B"))
    builder.line(*p("B"), *p("E"))
    builder.line(*p("E"), *p("K"))
    builder.line(*p("K"), *p("M"))
    builder.line(*p("M"), *p("L"))
    builder.line(*p("L"), *p("A"))

    # Neck curve
    neck = bodice["neckCurve"]

    builder.path(
        curve_to_svg(
            neck,
            scale=scale,
            offset_x=offset_x,
            offset_y=offset_y,
        )
    )

    # Armhole curve
    armhole = bodice["armholeCurve"]

    builder.path(
        curve_to_svg(
            armhole,
            scale=scale,
            offset_x=offset_x,
            offset_y=offset_y,
        )
    )

    # Waist dart
    dart = bodice["waistDart"]

    left = convert(dart["left"])
    right = convert(dart["right"])
    top = convert(dart["top"])

    builder.line(*left, *top)
    builder.line(*right, *top)
    builder.dashed_line(*left, *right)