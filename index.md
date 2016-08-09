<div class="hero">ML Bootcamp</div>

### Table of contents

[[toc]]


# Schedule

## Summer quarter '16

### Applied track

Week | Date     | Time | Place         | Content
---  | ---      | ---  | ---           | ---
1    | Tue 6/21 | 10am | CSE 624 [Noe] | Linear algebra 1 [[reading][la1]]
2    | Tue 6/28 | 10am | CSE 624 [Noe] | Linear algebra 2 [[reading][la2]]
3    | Tue 7/5  | 10am | CSE 624 [Noe] | _(Nothing because Max is incompetent)_
4    | Tue 7/12 | 10am | CSE 624 [Noe] | A Visual Tour of ML (Max)
5    | Tue 7/19 | 10am | CSE 624 [Noe] | A Loss Function Tour of ML (Lucy)
6    | Tue 7/26 | 10am | CSE 624 [Noe] | CRFs (John) [[notebook][crf_binder]] [[writeup][crf_writeup]]
7    | Tue 8/2  | 10am | CSE 624 [Noe] | Spectral methods (Kelvin)
8    | Tue 8/9  | 10am | CSE 624 [Noe] | Semi-supervised learning (Colin) [[slides 1][ss_slides1]] [[slides 2][ss_slides2]] [[writeup][ss_writeup]]
9    | Tue 8/16 | 10am | CSE 624 [Noe] | Gaussian Processes (Jesse)
10   | Tue 8/23 | 10am | CSE 624 [Noe] | TBD (Nelson)
11   | Tue 8/30 | 10am | CSE 624 [Noe] | TBD
12   | Tue 9/6  | 10am | CSE 624 [Noe] | Question / explanation day (all)

[la1]: http://www.deeplearningbook.org/contents/linear_algebra.html
[la2]: https://inst.eecs.berkeley.edu/~ee127a/book/login/index.html
[crf_binder]: http://mybinder.org:/repo/mbforbes/mlbc
[crf_writeup]: slides/crf_john.pdf
[ss_slides1]: slides/ss_colin.pdf
[ss_slides2]: http://pages.cs.wisc.edu/~jerryzhu/pub/sslicml07.pdf
[ss_writeup]: http://pages.cs.wisc.edu/~jerryzhu/pub/SSL_EoML.pdf


### Foundational track

Week | Date     | Time | Place         | Content
---  | ---      | ---  | ---           | ---
1    | Thu 6/23 | 10am | CSE 624 [Noe] | HW 1: 1--5
2    | Thu 6/30 | 10am | CSE 624 [Noe] | HW 1: 6--10; HW 2: 4
3    | Thu 7/7  | 10am | CSE 624 [Noe] | HW 2 1--3, 5 (6 opt)
4    | Thu 7/14 | 10am | CSE 624 [Noe] | HW 3
5    | Thu 7/21 | 10am | CSE 624 [Noe] | HW 4 _(whoops)_
6    | Thu 7/28 | 10am | CSE 624 [Noe] | HW 4 _(redux)_
7    | Thu 8/4  | 10am | CSE 624 [Noe] | HW 5
8    | Thu 8/11 | 10am | CSE 624 [Noe] | HW 6
9    | Thu 8/18 | 10am | CSE 624 [Noe] | HW 7
10   | Thu 8/25 | 10am | CSE 624 [Noe] | HW 8
11   | Thu 9/1  | 10am | CSE 624 [Noe] | HW 9
12   | Thu 9/8  | 10am | CSE 624 [Noe] | HW 10

-   Link: [Wasserman's course (with homeworks and solutions)](http://www.stat.cmu.edu/~larry/=stat705/)

-   Mapping from homeworks to Wasserman's lectures and book chapters:

    ```
    Homework    Lecture         Book (printed version)
    ---         ---             ---
    HW 1:       Lecture 1       Ch 1, 2, 3
    HW 2:       Lecture 2       Ch 4
    HW 3:       Lecture 3, 4    Ch 5
    HW 4:       Lecture 5, 6    Ch 6, 9
    HW 5:       Lecture 7, 8    Ch 9, 12
    HW 6:       Lecture 9       Ch 9, 12
    HW 7:       Lecture 10      Ch 10
    HW 8:       Lecture 11, 12  Ch 6, 7, 10
    HW 9:       Lecture 13, 14  Ch 7, 8, 11 
    HW 10:      Lecture 15      Ch 12, 13 (in lec 15, he also notes Ch 22, 20.4)
    
    I believe lectures 16, 17 aren't required for homeworks. I am happy to
    meet to discuss them.
    ```

# Resources

-	Material: [_All of Statistics_ by Larry Wasserman](http://www.amazon.com/All-Statistics-Statistical-Inference-Springer/dp/0387402721)

-   Wasesrman's Course (lecture notes, homeworks, solutions, exams) [CMU stat705](http://www.stat.cmu.edu/~larry/=stat705/)

-	Google Group: [ML Bootcamp](https://groups.google.com/forum/#!forum/ml-bootcamp)

-	This website (edits, suggestions, bugs): [GitHub](https://github.com/mbforbes/mlbc)


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
