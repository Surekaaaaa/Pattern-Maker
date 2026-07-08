def get_chat_response(message: str):
    message = message.lower()

    if "fabric" in message:
        return "Cotton Poplin is recommended because it provides good structure, comfort, and durability."

    if "pattern" in message:
        return "Your sewing pattern includes Front Bodice, Back Bodice, Front Skirt, Back Skirt, Short Sleeve, and Neck Facing."

    if "measure" in message:
        return "Please provide your body measurements to generate a custom-fit pattern."

    return (
        "I'm PatternAI Assistant. Ask me about sewing patterns, fabrics, "
        "measurements, garment construction, or tailoring."
    )