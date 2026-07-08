import re


def parse_analysis(text: str):
    text = text.lower()

    result = {
        "garmentType": "Unknown",
        "neckline": "Unknown",
        "sleeveType": "Unknown",
        "fit": "Regular",
        "length": "Unknown",
    }

    # Garment

    if "dress" in text:
        result["garmentType"] = "Dress"

    elif "shirt" in text:
        result["garmentType"] = "Shirt"

    elif "top" in text:
        result["garmentType"] = "Top"

    # Neckline

    necklines = [
        "round",
        "v-neck",
        "square",
        "boat",
        "collar",
        "sweetheart",
    ]

    for item in necklines:
        if item in text:
            result["neckline"] = item.title()

    # Sleeves

    sleeves = [
        "sleeveless",
        "short sleeve",
        "long sleeve",
        "puff sleeve",
        "cap sleeve",
    ]

    for item in sleeves:
        if item in text:
            result["sleeveType"] = item.title()

    # Fit

    fits = [
        "loose",
        "regular",
        "fitted",
        "oversized",
    ]

    for item in fits:
        if item in text:
            result["fit"] = item.title()

    # Length

    lengths = [
        "mini",
        "knee",
        "midi",
        "maxi",
    ]

    for item in lengths:
        if item in text:
            result["length"] = item.title()

    return result