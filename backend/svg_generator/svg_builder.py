class SVGBuilder:

    def __init__(self, width=1000, height=1200):

        self.width = width
        self.height = height
        self.elements = []

    def line(
        self,
        x1,
        y1,
        x2,
        y2,
        stroke="black",
        width=2,
    ):

        self.elements.append(
            f'<line '
            f'x1="{x1}" '
            f'y1="{y1}" '
            f'x2="{x2}" '
            f'y2="{y2}" '
            f'stroke="{stroke}" '
            f'stroke-width="{width}" />'
        )

    def path(
        self,
        d,
        stroke="black",
        fill="none",
        width=2,
    ):

        self.elements.append(
            f'<path '
            f'd="{d}" '
            f'fill="{fill}" '
            f'stroke="{stroke}" '
            f'stroke-width="{width}" />'
        )

    def text(
        self,
        x,
        y,
        value,
        size=16,
    ):

        self.elements.append(
            f'<text '
            f'x="{x}" '
            f'y="{y}" '
            f'font-size="{size}" '
            f'font-family="Arial">'
            f'{value}'
            f'</text>'
        )

    def circle(
        self,
        x,
        y,
        radius=4,
        color="red",
    ):

        self.elements.append(
            f'<circle '
            f'cx="{x}" '
            f'cy="{y}" '
            f'r="{radius}" '
            f'fill="{color}" />'
        )

    def rectangle(
        self,
        x,
        y,
        width,
        height,
    ):

        self.elements.append(
            f'<rect '
            f'x="{x}" '
            f'y="{y}" '
            f'width="{width}" '
            f'height="{height}" '
            f'fill="none" '
            f'stroke="#cccccc" '
            f'stroke-width="1"/>'
        )

    def dashed_line(
        self,
        x1,
        y1,
        x2,
        y2,
    ):

        self.elements.append(
            f'<line '
            f'x1="{x1}" '
            f'y1="{y1}" '
            f'x2="{x2}" '
            f'y2="{y2}" '
            f'stroke="#777" '
            f'stroke-width="1" '
            f'stroke-dasharray="6 6"/>'
        )

    def build(self):

        return f"""
<svg
xmlns="http://www.w3.org/2000/svg"
width="{self.width}"
height="{self.height}"
viewBox="0 0 {self.width} {self.height}">

{''.join(self.elements)}

</svg>
"""