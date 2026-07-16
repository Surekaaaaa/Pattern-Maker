import torch
from transformers import AutoModelForCausalLM, AutoProcessor

MODEL_NAME = "microsoft/Florence-2-base"

device = "cuda" if torch.cuda.is_available() else "cpu"

print(f"Loading Florence-2 on {device}...")

processor = AutoProcessor.from_pretrained(
    MODEL_NAME,
    trust_remote_code=True,
)

model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    trust_remote_code=True,
).to(device)

model.eval()

print("Florence-2 loaded successfully.")