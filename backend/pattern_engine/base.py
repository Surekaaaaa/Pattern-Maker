from dataclasses import dataclass


@dataclass
class BaseMeasurements:

    bust: float
    waist: float
    hip: float

    shoulder: float
    neck: float

    armhole: float

    sleeve_length: float

    dress_length: float

    ease: float = 4.0

    seam_allowance: float = 1.0

    @property
    def quarter_bust(self):
        return (self.bust + self.ease) / 4

    @property
    def quarter_waist(self):
        return (self.waist + self.ease) / 4

    @property
    def quarter_hip(self):
        return (self.hip + self.ease) / 4

    @property
    def neck_width(self):
        return self.neck / 6

    @property
    def neck_depth(self):
        return self.neck / 5

    @property
    def shoulder_length(self):
        return self.shoulder / 2