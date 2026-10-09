"""Extract the authentic BPEC source photo; no homepage generation or image synthesis.

Usage: python scripts/build_about_section.py path/to/company-introduction.pdf
Requires PyMuPDF and Pillow. The source is the BPEC background on page 5.
"""
import io
import sys
from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
with pymupdf.open(sys.argv[1]) as profile:
    # Find the high-resolution landscape photograph in page 5, independent of xref.
    candidates = [i for i in profile[4].get_images() if i[2:4] == (4096, 3072)]
    if len(candidates) != 1:
        raise ValueError('Expected one 4096 x 3072 BPEC photograph on page 5.')
    image = Image.open(io.BytesIO(profile.extract_image(candidates[0][0])['image'])).convert('RGB')
    image.thumbnail((1600, 1200), Image.Resampling.LANCZOS)
    destination = ROOT / 'assets/images/about/bpec-cpr-practice.webp'
    image.save(destination, 'WEBP', quality=90, method=6)
    print(f'{destination}: {image.width} x {image.height}, {destination.stat().st_size} bytes')
