from PIL import Image
import torch

from ai.model import model, processor, device
from ai.prompts import GARMENT_PROMPT


def analyze_image(image_path):

    image = Image.open(image_path).convert("RGB")

    inputs = processor(
        text=GARMENT_PROMPT,
        images=image,
        return_tensors="pt"
    ).to(device)

    generated_ids = model.generate(
        **inputs,
        max_new_tokens=200
    )

    answer = processor.batch_decode(
        generated_ids,
        skip_special_tokens=True
    )[0]

    return answer