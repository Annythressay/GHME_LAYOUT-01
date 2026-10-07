# Product artwork

The active product artwork was reconstructed from the supplied GHME design references with the built-in `image_gen` tool on 7 October 2026. Each PNG has an alpha channel. These are AI illustrations based on the references; small packaging text and product details may differ from original manufacturer photography.

| Asset | Dimensions |
| --- | --- |
| [aed-hd.png](aed-hd.png) | 1200 × 1311 |
| [first-aid-bag-hd.png](first-aid-bag-hd.png) | 1536 × 1024 |
| [personal-kit-hd.png](personal-kit-hd.png) | 1680 × 936 |
| [office-family-kit-hd.png](office-family-kit-hd.png) | 1774 × 887 |
| [travel-kit-hd.png](travel-kit-hd.png) | 1536 × 1024 |
| [cpr-kit-hd.png](cpr-kit-hd.png) | 1254 × 1254 |
| [training-equipment-hd.png](training-equipment-hd.png) | 1254 × 1254 |

Final prompts: [AED and closed bag](aed-bag-hd.prompts.txt), [three open kits](kit-images-hd.prompts.txt), [CPR and training equipment](training-images-hd.prompts.txt).

The homepage uses real `img` elements with `object-fit: contain`. The background ring and podium are CSS. Source design PNGs remain here as references and are not loaded by product image elements.

Verified in Edge at 1672, 1024, 768, 390 and 320 px: all images decode, complete products fit without clipping, source resolution covers 2× pixel density, no horizontal overflow or runtime errors. Product selection, detail dialog and consultation prefill also work.
