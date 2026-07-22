from dataclasses import dataclass, field

from pattern_engine.geometry import Point, Curve


@dataclass
class Pattern:

    points: dict[str, Point] = field(default_factory=dict)

    curves: dict[str, Curve] = field(default_factory=dict)

    metadata: dict = field(default_factory=dict)

    def add_point(self, name: str, point: Point):
        self.points[name] = point

    def add_curve(self, name: str, curve: Curve):
        self.curves[name] = curve

    def get_point(self, name: str):
        return self.points[name]

    def get_curve(self, name: str):
        return self.curves[name]