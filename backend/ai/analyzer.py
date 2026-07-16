from PIL import Image

from ai.loader import model, processor, device


def analyze_image(image_path: str):

    image = Image.open(image_path).convert("RGB")

    prompt = "<MORE_DETAILED_CAPTION>"

    inputs = processor(
        text=prompt,
        images=image,
        return_tensors="pt"
    ).to(device)

    generated_ids = model.generate(
        input_ids=inputs["input_ids"],
        pixel_values=inputs["pixel_values"],
        max_new_tokens=256,
        do_sample=False,
    )

    generated_text = processor.batch_decode(
        generated_ids,
        skip_special_tokens=False
    )[0]

    result = processor.post_process_generation(
        generated_text,
        task=prompt,
        image_size=image.size,
    )

    return result