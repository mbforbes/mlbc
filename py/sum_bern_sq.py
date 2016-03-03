__author__ = 'mbforbes'

import code  # code.interact(local=dict(globals(), **locals()))
import random

import numpy as np
import matplotlib.pyplot as plt

p = 0.7
n = 500000
samples = np.random.random_sample(n)
samples = np.array([1.0 if s <= p else 0.0 for s in list(samples)])
# samples = np.square(samples)
# code.interact(local=dict(globals(), **locals()))

x = []
y = []
for i in range(1, n, 10):
	x += [i]
	y += [np.average(samples[:i])]

plt.plot(x, y)
plt.axhline(y=p, xmin=0, xmax=n, color='red')
plt.ylim([p-0.1, p+0.1])
plt.show()
