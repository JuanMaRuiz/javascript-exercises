# 1. Mark and Toys

Mark and Jane are very happy after having their first kid. Their son is very fond of toys, so Mark wants to buy some. There are  different toys lying in front of him, tagged with their prices, but he has only . He wants to maximize the number of toys he buys with this money.

Now, you are Mark's best friend and have to help him buy as many toys as possible.

### Input Format

The first line contains two integers,  and , followed by a line containing  space separated integers indicating the products' prices.


A toy can't be bought multiple times.

### Output Format
```4```
An integer that denotes maximum number of toys Mark can buy for his son.

### Sample Input
```
7 50
1 12 5 111 200 1000 10
```
### Sample Output
```
4
```

### Explanation

He can buy only 4 toys at most. These toys have the following prices: 1,12,5,10.

# 2. Compare the Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing:

* If ```a[i] > b[i]```, then Alice is awarded  point.

* If ```a[i] < b[i]```, then Bob is awarded  point.

* If ```a[i] = b[i]```, then neither person receives a point.

Comparison points is the total points a person earned.

Given ```A``` and ```B```, can you compare the two challenges and print their respective comparison points?

### Input Format

The first line contains 3 space-separated integers ```a[0], a[1], and a[2]```, describing the respective values in triplet .

The second line contains 3 space-separated integers, ```b[0], b[1], and b[2]```, describing the respective values in triplet .


### Sample Input
```
5 6 7
3 6 10
```

### Sample Output

```
1 1
```
