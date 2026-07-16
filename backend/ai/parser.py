import re


def parse_analysis(result: dict):

    caption = result.get("<MORE_DETAILED_CAPTION>", "").lower()

    data = {
        "garmentType": "Unknown",
        "neckline": "Unknown",
        "sleeve": "Unknown",
        "fit": "Unknown",
        "length": "Unknown",
        "closure": "Unknown",
        "difficulty": "Intermediate",
        "estimatedPieces": 6,
        "description": result.get("<MORE_DETAILED_CAPTION>", "")
    }

    # ---------- Garment Type ----------

    if "dress" in caption:
        data["garmentType"] = "Dress"

    elif "shirt" in caption:
        data["garmentType"] = "Shirt"

    elif "top" in caption:
        data["garmentType"] = "Top"

    elif "kurti" in caption:
        data["garmentType"] = "Kurti"

    # ---------- Neckline ----------

    if "round neckline" in caption or "round neck" in caption:
        data["neckline"] = "Round Neck"

    elif "v-neck" in caption:
        data["neckline"] = "V Neck"

    elif "square neckline" in caption:
        data["neckline"] = "Square Neck"

    elif "collar" in caption:
        data["neckline"] = "Collared"

    # ---------- Sleeve ----------

    if "long sleeves" in caption:
        data["sleeve"] = "Long Sleeve"

    elif "short sleeves" in caption:
        data["sleeve"] = "Short Sleeve"

    elif "sleeveless" in caption:
        data["sleeve"] = "Sleeveless"

    elif "half sleeves" in caption:
        data["sleeve"] = "Half Sleeve"

    # ---------- Length ----------

    if "floor" in caption:
        data["length"] = "Floor Length"

    elif "ankle" in caption:
        data["length"] = "Ankle Length"

    elif "knee" in caption:
        data["length"] = "Knee Length"

    elif "mini" in caption:
        data["length"] = "Mini"

    # ---------- Fit ----------

    if "loose" in caption:
        data["fit"] = "Loose"

    elif "regular" in caption:
        data["fit"] = "Regular"

    elif "fitted" in caption:
        data["fit"] = "Fitted"

    elif "oversized" in caption:
        data["fit"] = "Oversized"

    return data