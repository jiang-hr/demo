# 7.  Multiple integral

## Riemann sum

> Very similar to this: [Riemann Sum \(univariate calculus\)](https://coldmoon.gitbook.io/mathematical-analysis/mathematical-analysis-1/4.-integral#riemann-sums).

#### Intuition define:

Now give you a partition $$P$$:

$$
P: I=\bigcup_{j=1}^{m} I_{j}
$$

of this interval with distinguished points $$\xi=\left\{\xi_{1}, \cdots, \xi_{k}\right\}$$.

We defined Riemann sum as:

$$
\sigma(f, P, \xi):=\sum_{i=1}^{k} f\left(\xi_{i}\right)\left|I_{i}\right|
$$

If $$\lim _{|P| \rightarrow 0} \sigma(f, P, \xi)$$exist and finite, we often denoted it as $$\int_I f(x)\mathrm d x$$ or :

$$
\int_{I} f\left(x^{1}, \cdots, x^{n}\right) \mathrm{d} x^{1} \cdots \mathrm{d} x^{n}, \quad \int \cdots \int f\left(x^{1}, \cdots, x^{n}\right) \mathrm{d} x^{1} \cdots \mathrm{d} x^{n}
$$

## Fubini’s Theorem

Let $$X \times Y$$ be an interval in $$\mathbb{R}^{m+n}$$, which is the direct product of intervals $$X \subset \mathbb{R}^{m}$$ and $$Y \subset \mathbb R^{n} $$. If the function $$f: X \times Y \rightarrow \mathbb{R}$$ is integrable over $$X \times Y$$, then all three of the integrals

$$
\int_{X \times Y} f(x, y) \mathrm{d} x \mathrm{d} y, \quad \int_{X} \mathrm{d} x \int_{Y} f(x, y) \mathrm{d} y, \quad \int_{Y} \mathrm{d} y \int_{X} f(x, y) \mathrm{d} x
$$

exist and are equal.

## Change of Variable in a Multiple Integral

If $$\varphi: D_{t} \rightarrow D_{x}$$ is a diffeomorphism of a bounded open set $$D_{t} \subset \mathbb{R}^{n}$$ onto a set $$D_{x}=\varphi\left(D_{t}\right) \subset \mathbb{R}^{n}$$ of the same type, $$f \in \mathcal{R}\left(D_{x}\right),$$ and $$\operatorname{supp} f$$ is a compact subset of $$D_{x}$$, then $$f \circ \varphi\left|\operatorname{det} \varphi^{\prime}\right| \in \mathcal{R}\left(D_{t}\right)$$, and the following formula holds:

> simplified Chinese: 设 $$\varphi: D_{t} \rightarrow D_{x}$$ 为 $$\mathbb{R}^{n}$$ 中的有界开集之间的微分同胚，$$f$$ 为 定义在 $$D_{x}$$ 上的函数，满足条件 $$\operatorname{supp} f \subset D{x} .$$ 则 $$f \in \mathcal{R}\left(D{x}\right)$$ 当且仅当 $$f \circ \varphi \cdot\left|\operatorname{det} \varphi^{\prime}\right| \in \mathcal{R}\left(D_{t}\right)$$, 并且如果 $$f \in \mathcal{R}\left(D_{x}\right)$$，则成立如下的变量代换公式：

$$
\int_{D_{x}} f(x) \mathrm{d} x=\int_{D_{t}} f \circ \varphi \cdot\left|\operatorname{det} \varphi^{\prime}\right| \mathrm{d} t
$$













$$\blacksquare$$

