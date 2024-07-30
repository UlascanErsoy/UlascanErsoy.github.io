---
title: Decision Graphs Of Caching Algorithms
description: Lorem ipsum dolor sit amet
pubDate: Jul 29 2024
heroImage: /blog-banner-caching.jpg
draft: false
---

Recently, I was tasked with gaining an understanding of caching systems and preparing a presentation about a newly proposed caching mechanism called `OGA` based on Online Gradient Ascent[ [1]](https://arxiv.org/pdf/1904.09849.pdf). 

The proposed method is an incremental update to the traditional `LFU` method where instead of making caching decisions based on top-k of the utility vector, euclidean normalization is applied to generate a smooth caching decision vector that is capable of providing optimal partial caching.

As I was reading the paper I did not expect to encounter anything mind blowing. Caching is a concept many people have a passing understanding due to its ubiquity. After all, all it takes is a Python decorator.

```python
from functools import lru_cache

@lru_cache(maxsize=16)
def foo(a: int, b: int) -> int:
	return a + b
```

<br>
Joking aside, preparing for this presentation took me on a journey to develop a better understanding of something I have been using for a long time, but had not spent much time pondering over.

I am sure a lot of us have heard that the `LFU` is better for request sequences with a stationary distribution where as the `LRU` shines where files might get requested frequently in short bursts (time local). I don't think however, that many of us have seen this in action.

To come up with such a representation, I ran a stochastic simulation and plotted the decision vectors as a heat map over time.

![LRU Decision Vector](https://github.com/UlascanErsoy/ECEN757---Presentation/blob/main/images/lru_heat.png?raw=true)

<br>
It is fascinating to see the time locality in action. Files get admitted and evicted from the cache in short periods of time. The `LFU` decision vector looks very different.

![LRU Heatmap](https://github.com/UlascanErsoy/ECEN757---Presentation/blob/main/images/lfu_heat.png?raw=true)

By the end, it almost looks like the `LFU` is approximating the true distribution of the request sequence. It also provides a more intuitive understanding why the `LFU` provides better performance on stationary distributions.

Finally I ran the simulation for the `OGA` with the expectation that it should be similar to the `LFU`

![OGA Heatmap](https://github.com/UlascanErsoy/ECEN757---Presentation/blob/main/images/oga_heat.png?raw=true)

As expected, the `OGA` looks like a smoother version of the `LFU`. I think this is a good reminder that, we should not refrain from looking a little more deeper into things whenever we can.