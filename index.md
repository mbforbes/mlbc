<div class="hero">ML Bootcamp</div>

### Table of contents

[[toc]]


# Schedule

## Summer quarter '16
<span class="label label-danger">new</span>

### Foundational track

Week | Date      | Time           | Place   | Content
---  | ---       | ---            | ---     | ---
1    | TBD       | TBD            | TBD     | Wasserman homework 1
2    | TBD       | TBD            | TBD     | Wasserman homework 2
3    | TBD       | TBD            | TBD     | Wasserman homework 3
4    | TBD       | TBD            | TBD     | Wasserman homework 4
5    | TBD       | TBD            | TBD     | Wasserman homework 5
6    | TBD       | TBD            | TBD     | Wasserman homework 6
7    | TBD       | TBD            | TBD     | Wasserman homework 7
8    | TBD       | TBD            | TBD     | Wasserman homework 8
9    | TBD       | TBD            | TBD     | Wasserman homework 9
10   | TBD       | TBD            | TBD     | Wasserman homework 10
11   | TBD       | TBD            | TBD     | Wasserman homework 11
12   | TBD       | TBD            | TBD     | Wasserman homework 12

-   Link: [Wasserman's course (with homeworks and solutions)](http://www.stat.cmu.edu/~larry/=stat705/)

### Applied track

Week | Date             | Time    | Place   | Content
---  | ---              | ---     | ---     | ---
1    | TBD (6/20--6/24) | TBD     | TBD     | Linear algebra 1 (exact TBD)
2    | TBD (6/27--7/1)  | TBD     | TBD     | Linear algebra 2 (exact TBD)
3    | TBD (7/4--7/8)   | TBD     | TBD     | A Visual Tour of ML (Max)
4    | TBD (7/11--7/15) | TBD     | TBD     | A Loss Function Tour of ML (Lucy)
5    | TBD (7/18--7/22) | TBD     | TBD     | Semi-supervised learning (Colin)
6    | TBD (7/25--7/29) | TBD     | TBD     | _TBD_ (Nelson (+ Kelvin))
7    | TBD (8/1--8/5)   | TBD     | TBD     | Spectral methods (Kelvin)
8    | TBD (8/8--8/12)  | TBD     | TBD     | Gaussian Processes (Jesse)
9    | TBD (8/15--8/19) | TBD     | TBD     | (something w/) Neural Nets (John)
10   | TBD (8/22--8/26) | TBD     | TBD     | TBD
11   | TBD (8/29--9/2)  | TBD     | TBD     | TBD
12   | TBD (9/5--9/9)   | TBD     | TBD     | TBD


## Spring quarter '16

Week | Date      | Time           | Place   | Content
---  | ---       | ---            | ---     | ---
1    | n/a       | n/a            | n/a     | _(no bootcamp)_
2    | Wed 4/6   | 4:30pm--6:30pm | CSE 305 | Ch 8 [The Bootstrap] (read only)
3    | Mon 4/11  | 3:30pm--5:30pm | CSE 403 | Ch 9 [Parametric Inference] (read only)
4    | Mon 4/18  | 3:30pm--5:30pm | CSE 303 | Ch 9 [Parametric Inference] (exercises)
5    | Mon 4/25  | 3:30pm--5:30pm | CSE 303 | Ch 10 [Hypothesis Testing and p-values] (read only)
6    | Mon 5/2   | 3:30pm--5:30pm | CSE 303 | Ch 10 [Hypothesis Testing and p-values] (exercises)
7    | Mon 5/9   | 3:30pm--5:30pm | CSE 303 | _(summer planning)_
8    | Mon 5/16  | 3:30pm--5:30pm | CSE 303 | Ch 11 [Bayesian Inference] (read + exercises)
9    | Mon 5/23  | 3:30pm--5:30pm | CSE 303 | Ch 12 [Statistical Decision Theory] (read + exercises)
10   | Mon 5/30  | n/a            | n/a     | _(no bootcamp)_
11   | Mon 6/6   | n/a            | n/a     | _(no bootcamp)_


# Resources

-	Material: [_All of Statistics_ by Larry Wasserman](http://www.amazon.com/All-Statistics-Statistical-Inference-Springer/dp/0387402721)

-   Wasesrman's Course (lecture notes, homeworks, solutions, exams) [CMU stat705](http://www.stat.cmu.edu/~larry/=stat705/)

-	Google Group: [ML Bootcamp](https://groups.google.com/forum/#!forum/ml-bootcamp)

-	This website (edits, suggestions, bugs): [GitHub](https://github.com/mbforbes/mlbc)


# Extra material

What | MLBC rating | Notes
--- | --- | ---
http://deeplearningbook.org/ | (none yet)  | The second chapter has a quick review of relevant linear algebra.
[Optimization course](https://inst.eecs.berkeley.edu/~ee127a/book/login/index.html) | (none yet) | The first part of the course has a review of relevant linear algebra.

# Notes

## Chapter 5 [Convergence of Random Variables]

### Exercise 5.2

$$
    \def\E{\mathbb{E}}
    \def\Var{\mathbb{V}}
$$

Let $X_1, X_2, \dots$ be a sequence of random variables. Show that $X_n \xrightarrow{qm} b$ if and only if

$$
    \lim_{n \rightarrow \infty} \E(X_n) = b \text{ and } \lim_{n \rightarrow \infty} \Var(X_n) = 0
$$

Proof:

-   $\Leftarrow$:

    Showing that $X_n \xrightarrow{qm} b$ is equivalent to showing (by definition) that $\lim_{n \rightarrow \infty} \E(X_n - b)^2 = 0$.

    Expanding the latter expression within the limit, we have:

    $$
        \begin{align*}
        \E(X_n - b)^2 &= \E(X_n^2) - 2b\ \E(X_n) + b^2 \\\\
            &= \Var(X_n) + (\E(X_n))^2 - 2b\ \E(X_n) + b^2 \\\\
            & \\\\
        \Rightarrow \lim_{n \rightarrow \infty} \E(X_n - b)^2 &= \lim_{n \rightarrow \infty} (\Var(X_n) + (\E(X_n))^2 - 2b\ \E(X_n) + b^2) \\\\
            &= 0 + b^2 - 2b^2 + b^2 \text{ (applying given limits)}\\\\
            &= 0 \\\\
        \end{align*}
    $$

-   $\Rightarrow$:

    $$
        \begin{align*}
        \E(X_n - b)^2 &= \E(X_n^2) - 2b\ \E(X_n) + b^2 \\\\
            &= \Var(X_n) + (\E(X_n)^2 - 2b\ \E(X_n) + b^2) \\\\
            &= \Var(X_n) + (\E(X_n) - b)^2 \\\\
        \end{align*}
    $$

    Since we are given that $X_n \xrightarrow{qm} b$, by definition

    $$
        \begin{align*}
        \lim_{n \rightarrow \infty} \E(X_n - b)^2 &= 0 \\\\
        \Rightarrow \lim_{n \rightarrow \infty} \Var(X_n) + \lim_{n \rightarrow \infty} (\E(X_n) - b)^2 &= 0 \\\\
        \end{align*}
    $$

    Note that both $\Var(X_n) \ge 0$ and $(\E(X_n) - b)^2 \ge 0$. Since the above sum is equal to zero, it follows that each of the limits being added must also be equal to zero:

    $$
        \begin{align*}
        \lim_{n \rightarrow \infty} \Var(X_n) &= 0 \\\\
        \lim_{n \rightarrow \infty} (\E(X_n) - b)^2 &= 0 \Rightarrow \lim_{n \rightarrow \infty} \E(X_n) = b \\\\
        \end{align*}
    $$

## Chapter 9 [Parametric Inference]

### MoM estimator for $\hat{\theta}_n$ for $\Gamma(\alpha$, $\beta$)

(Posting soon)

# Manifesto

## Areas

The areas will be areas of math that a study of ML assumes you have a good
background in. We’ll start with linear algebra, probability, and statistics,
then continue in either depth or breadth as needed. We’ll aim to be pretty
complete with the topics in each area. A good alternate title for “ML Bootcamp”
would be “Foundational Math for ML.”

## Material

The material will be a textbook in each relevant area. If there’s a complete
and well-written resource for a particular area or topic, we can consider that,
too.

## Unofficial Format

This is not going to be a course, or anything official or registered with the
department or sent to CSE-wide mailing lists. I am writing this because a few
of us had discussed something like this and I want it to happen. This seemed
like the best way to do so.

## Benevolent Dictator

Because I believe that having a benevolent dictator is extremely helpful to get
nonmandatory things like this off the ground and keep them going, I will
organize this bootcamp and select the material that will be covered. With that
said, I will aim to be open and receptive to suggestions and feedback.

## Small Group

I think for this to work well, there should be between two and ten people
involved. Twenty would be too large. This should feel like some intimate
liberal arts class you took as an undergrad where everyone is engaged.

## Goals
Here are my goals:

## Safe Space for Extremely Dumb Questions

I will do my best to lead the charge on this. My mathematics background is
thin, and I’m shaky on many of the fundamentals utilized in ML. No one should
feel embarrassed to admit not understanding any concept we cover (or one that
we assume knowledge of). I think there are several requirements to meet this
goal:

1.	no faculty should be present for these meetings
1.	the group should be kept small
1.	we must be vigilant in keeping each other positive and supportive.

## Multiple Explanations

I think visually. The foundations of ML are often presented primarily with
equations. This at least ensures we’ll attempt two explanations for each
concept. One boon of discussing together is we’ll have more ways of thinking
about concepts. One challenge will be that getting into higher dimensional
spaces can make visual analogies difficult to make, misleading, or—at
worst—both.

## Move Fast

We probably should have done this in the summer. Many of us have already taken
ML, and now we’re on to application domains (NLP). However, I don’t think it’s
“too late.” I also think we can cover topics much faster than they are normally
covered. But it is important that we get going, both because we’re already
working on research and learning about advanced topics in classes, and because
going too slow would bore us. Note: this is absolutely in contrast with
attempting to leave anyone behind.

## Good Use of Your Time

Covering a lot of background material will take a considerable amount of time.
I have personally found that the more value people around me put on their time
as well as my own, the more I then value my time. I want this to be a good use
of your time, because I think you (and I) deserve to feel this way. Here some
strategies I have for this:

-   you must do the background reading beforehand. This is essential to keep
     sessions productive. If you can’t, catch up and come to the next session.
     If you fall behind on one topic, you can wait until the next topic or stop
     coming entirely. You shouldn’t feel guilty about stopping or missing if
     you need to: this is for you.

-   feel free to come only for areas (e.g. textbooks) or topics (e.g. chapters)
     you’re interested in and want to cover.

-   only one person should take notes. I will do this, though if anyone has a
     strong interest, we can alternate. Obviously no one is forbidden from
     taking notes, but the way we do it right now in ML class is a waste of
     time: everyone copying everything down takes the collective focus off of
     what’s going on.

## Compile a Reference

I will keep a running log online of core concepts we cover and good
visualizations we come up with. This will be something everyone can access and
print. I want this to be more **[a]** relevant, **[b]** easy to understand, and
**[c]** easy to access than flipping through textbooks.

## Feedback Early; Fail Fast

I doubt this will be perfect on the first meeting. I want to open the forum for
both discussions and anonymous feedback on the format—what we cover, how we
cover it, how often we meet, who leads—from the get go.

## Please Fork This

With all of the above said, I don’t have the expectation this will be the sole
study / reading group. If one or more people decide they’d like a different
format, topic area, or materials list, please, fork (as in the open source
concept) this idea and spin off new and different groups! I won’t be
butthurt—this would be a fantastic thing! I’m starting this one to fit my needs
in the hopes that it will also fit others’, but people with different interests
or math levels may find other formats better.
