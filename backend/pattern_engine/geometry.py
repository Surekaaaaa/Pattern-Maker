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


def curve_to_svg(
    curve: Curve,
    scale=1,
    offset_x=0,
    offset_y=0,
):

    x1 = curve.start.x * scale + offset_x
    y1 = curve.start.y * scale + offset_y

    cx = curve.control.x * scale + offset_x
    cy = curve.control.y * scale + offset_y

    x2 = curve.end.x * scale + offset_x
    y2 = curve.end.y * scale + offset_y

    return (
        f"M {x1},{y1} "
        f"Q {cx},{cy} "
        f"{x2},{y2}"
    )