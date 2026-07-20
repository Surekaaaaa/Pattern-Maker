from dataclasses import dataclass
import math


@dataclass
class Point:
    x: float
    y: float

    def to_tuple(self):
        return (self.x, self.y)


@dataclass
class Curve:
    start: Point
    control: Point
    end: Point


def distance(p1: Point, p2: Point):
    return math.sqrt(
        (p2.x - p1.x) ** 2 +
        (p2.y - p1.y) ** 2
    )


def midpoint(p1: Point, p2: Point):
    return Point(
        (p1.x + p2.x) / 2,
        (p1.y + p2.y) / 2
    )


def move_x(point: Point, value: float):
    return Point(
        point.x + value,
        point.y
    )


def move_y(point: Point, value: float):
    return Point(
        point.x,
        point.y + value
    )


def move(point: Point, dx: float, dy: float):
    return Point(
        point.x + dx,
        point.y + dy
    )


def rotate(point: Point, angle):
    radians = math.radians(angle)

    return Point(
        point.x * math.cos(radians)
        - point.y * math.sin(radians),

        point.x * math.sin(radians)
        + point.y * math.cos(radians)
    )


def curve_to_svg(curve: Curve):
    return (
        f"M {curve.start.x},{curve.start.y} "
        f"Q {curve.control.x},{curve.control.y} "
        f"{curve.end.x},{curve.end.y}"
    )